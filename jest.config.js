module.exports = {
  testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.ts$': '<rootDir>/node_modules/babel-jest',
  },
};
