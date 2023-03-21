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
      on('task', {
        async clearDatabase() {
          const connection = await mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'QxK4ZWjAsp9KJtc!',
            database: 'tic-tac-toe'
          });

          connection.connect();

          await connection.execute("SET FOREIGN_KEY_CHECKS=0;");
          await connection.execute("TRUNCATE TABLE game;");
          await connection.execute("TRUNCATE TABLE user;");
          await connection.execute("SET FOREIGN_KEY_CHECKS=1;");
          
          await connection.end();
          return null;
        },
      });

      return config;
    },
  },
});
