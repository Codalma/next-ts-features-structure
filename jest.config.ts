/* eslint-disable */

import { JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';
// @ts-ignore
import { compilerOptions } from './tsconfig.json';
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig: JestConfigWithTsJest = {
  clearMocks: true,
  coverageDirectory: './coverage',
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coveragePathIgnorePatterns: ['index.ts', '.config.ts', '__snapshots__'],
  coverageReporters: ['json', 'lcov', 'text-summary', 'text', 'clover'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      lines: 80,
      functions: 80,
    },
  },
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
    "\\.(css|scss)$": "identity-obj-proxy"
},
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
