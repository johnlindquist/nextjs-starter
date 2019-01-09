module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.scripts/assets-transformer.js',
  },
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/prod_node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/.theme/",
    "<rootDir>/static/",
    "<rootDir>/styles/",
    "<rootDir>/node_modules/"
  ]
};
