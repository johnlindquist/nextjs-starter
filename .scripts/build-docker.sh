#!/usr/bin/env bash

REPO_NAME="meio/nextjs-starter"
GIT_TAG=`git describe --tags --always --dirty`
DOCKER_TAG="${GIT_TAG}"

# build only tag branch in this format 0.0.0
if [[ ${GIT_TAG} =~ ^[[:digit:].[:digit:].[:digit:]]+$ ]]; then
    true
    echo "TAG: ${GIT_TAG} - start build"
else
    echo "TAG: ${GIT_TAG} - skip build"
    exit 0
fi



if [[ ! -z "${DOCKER_PASSWORD}" && ! -z "${DOCKER_USERNAME}" ]]
then
    echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USERNAME}" --password-stdin
fi

TAG_EXIST=`curl -s "https://hub.docker.com/v2/repositories/${REPO_NAME}/tags/${DOCKER_TAG}/" | grep '"id":'`

if [[ ! -z ${TAG_EXIST}  ]]; then
    echo "${REPO_NAME}:${DOCKER_TAG} already exist"
    exit 0
fi


docker build --build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` \
             --build-arg VCS_REF=`git rev-parse --short HEAD` \
             --build-arg DOCKER_TAG="${DOCKER_TAG}" \
             --build-arg VERSION="${GIT_TAG}" \
             -t ${REPO_NAME}:${DOCKER_TAG} -f Dockerfile .

if [[ $? != 0 ]]; then
    echo "${REPO_NAME}:${DOCKER_TAG} build failed"
    exit 1
fi


if [[ -z ${TAG_EXIST}  ]]; then
    docker push ${REPO_NAME}:${DOCKER_TAG}
    echo "${REPO_NAME}:${DOCKER_TAG} pushed successfully"

fi

# push latest
docker build --build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` \
             --build-arg VCS_REF=`git rev-parse --short HEAD` \
             --build-arg DOCKER_TAG="${DOCKER_TAG}" \
             --build-arg VERSION="${GIT_TAG}" \
             -t ${REPO_NAME}:latest -f Dockerfile .

docker push ${REPO_NAME}:latest
echo "${REPO_NAME}:latest pushed successfully"

# update microbadger.com
curl -XPOST "https://hooks.microbadger.com/images/meio/nextjs-starter/TOoBKgNqzCZH6dNBlAopouqsLF0="
