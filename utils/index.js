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
      name: "applicationDescription",
      message: "Please provide a description of your application.",
    },
    {
      type: "input",
      name: "installationInstructions",
      message:
        "Please enter the any insstructons or pre-requisites for your application.",
    },
    {
      type: "input",
      name: "applicationUsage",
      message: "Please enter the required usage informaton.",
    },
    {
      type: "input",
      name: "applicationContributions",
      message: "Please enter how many people contributed.",
      choices: ["0-5", "6-10", "11-15", "16-20", "21+"],
    },
    {
      type: "input",
      name: "license",
      message: "What licenses have you used within your project?",
      choices: ["APACHE", "GNU", "ISC", "MIT", "No license"],
    },
    {
      type: "input",
      name: "applicationTests",
      message: "Please enter the type of tests required.",
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
