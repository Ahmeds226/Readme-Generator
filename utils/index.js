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
      type: "input",
      name: "developerEmail",
      message: "Please enter the developer email address.",
    },
    {
      type: "input",
      name: "devloperGithub",
      message: "Please enter your Github user name.",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fileToWrite = path.join(process.cwd(), fileName);
  fs.writeFileSync(fileToWrite, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const markdown = generateMarkdown(answers);
    writeToFile("./README/README.md", markdown);
  });
}

// Function call to initialize app
init();
