// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   projectId: "z4dn9o",
//   viewportWidth: 1920,
//   viewportHeight: 1080,
//   reporter: "cypress-mochawesome-reporter",
//   reporterOptions: {
//     reportDir: "e2e/reports",
//     charts: true,
//     reportPageTitle: "My Test Suite",
//     embeddedScreenshots: true,
//     inlineAssets: true,
//   },
//   video: true,
//   videosFolder: 'e2e/reports',
//   e2e: {
//     // We've imported your old cypress plugins here.
//     // You may want to clean this up later by importing these.
//     setupNodeEvents(on, config) {
//       return require("./cypress/plugins/index.js")(on, config);
//     },
//     excludeSpecPattern: "**/examples/**",
//   },
// });


const { defineConfig } = require("cypress");
const fs = require('fs');
const moment = require('moment');
const { google } = require('googleapis')

const fechaActual = moment().format('YYYY-MM-DD');
const horaActual = moment().format('HH-mm-ss');
const rutaVideos = `e2e/reports/${fechaActual}${horaActual}`;
const archivo  = fs.mkdirSync(rutaVideos, { recursive: true });

console.log(archivo)
module.exports = defineConfig({
  projectId: "z4dn9o",
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: `${archivo}`,
    charts: true,
    reportPageTitle: "My Test Suite",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: true,
  videosFolder: `${archivo}`,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    excludeSpecPattern: "**/examples/**",
    "experimentalSessionAndOrigin" : true 
  }
});
