const path = require('path');

module.exports = {
  all: true,
  include: ['src/**'],
  extension: ['.vue', '.js', '.ts'],
  'temp-dir': path.join(__dirname, 'cypress/coverage/.nyc_output'),
  'report-dir': path.join(__dirname, 'cypress/coverage/report'),
};
