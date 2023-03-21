import dotenv from 'dotenv';
import { defineConfig } from "cypress";

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8081',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    experimentalRunAllSpecs: true,
    env: {
      ...process.env,
      apiBaseUrl: `http://${process.env.VUE_APP_API_DOMAIN}:${process.env.VUE_APP_API_PORT}/api`,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
