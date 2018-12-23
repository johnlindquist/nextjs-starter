module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/prod_node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/.theme/',
    '<rootDir>/static/',
    '<rootDir>/styles/',
    '<rootDir>/node_modules/'
  ]
};
