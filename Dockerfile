#
# ---- Base Node ----
FROM meio/pm2:11.3.0-alpine AS base
# install node
RUN apk add --no-cache tini
# set working directory
WORKDIR /home/node/app
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY package.json .
COPY .npmrc .
COPY yarn.lock .

#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN yarn --check-files --production
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN yarn --check-files

#
# ---- Build ----
FROM dependencies AS build
COPY . .
RUN yarn build

#
# ---- Test ----
# run linters, setup and tests
FROM dependencies AS test
COPY . .
# RUN  npm run lint && npm run setup && npm run test
RUN yarn test

#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /home/node/app/prod_node_modules ./node_modules
COPY --from=build /home/node/app/dist ./dist
COPY --from=build /home/node/app/server.build.js ./server.build.js
# copy app sources
COPY . .

USER node
# expose port and define CMD
EXPOSE 3000
CMD yarn start
