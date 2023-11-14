module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
      '^@components/(.*)$': '<rootDir>/components/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
  };