const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6go4s9',
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {

    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "default",
    reportPageTitle: 'saurabh report',
    overwrite: false

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },


    specPattern: "cypress/integration/examples/*.js",
    projectId: "6go4s9"



  },
});
