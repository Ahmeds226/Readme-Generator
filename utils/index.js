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
            message: "Please enter the title of your application",
        }
    ])
  },
;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
