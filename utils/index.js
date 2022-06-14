// TODO: Include packages needed for this application
const inquirier = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
// Questions:

const questions = () => {
  return inquirier.prompt([
    {
      type: "input",
      name: "applicationTitle",
      message: "Please enter the title of your application.",
    },
    {
      type: "input",
      name: "installationInstructions",
      message:
        "Please enter the any insstructons or pre-requisites for your application.",
    },
    {
      type: "input",
      name: "applicationDescription",
      message: "Please provide a description of your application.",
    },
    {
      type: "list",
      name: "applicationLicensed",
      message: "Does your application require any of the following licenses?",
      choices: [
        {
          name: "No License",
          value: "None",
        },
        {
          name: "Apache 2.0",
          value:
            "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        },
        {
          name: "Eclipse 1.0",
          value:
            "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
        },
        {
          name: "Mozilla",
          value:
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        },
        {
          type: "input",
          name: "developerEmail",
          message: "Please enter the developer email address.",
        },
        {
          type: "input",
          name: "devloperGithub",
          message: "Please enter your Github user name.",
        },
      ],
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fileToWrite = path.join(process.cwd(), fileName);
  fs.writeFileSync(fileToWrite, data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
