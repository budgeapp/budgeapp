import type { Config } from "jest";

const config: Config = {
  passWithNoTests: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};

export default config;
