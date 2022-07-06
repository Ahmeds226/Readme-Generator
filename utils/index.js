// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
// Questions:

const questions = () => {
  return inquirer.prompt([
    {
      // Title.
      type: "input",
      name: "applicationTitle",
      message: "Please enter the title of your application.",
    },
    {
      // Description.
      type: "input",
      name: "applicationDescription",
      message: "Please provide a description of your application.",
    },
    {
      // Installation.
      type: "input",
      name: "installationInstructions",
      message:
        "Please enter the any insstructons or pre-requisites for your application.",
    },
    {
      // Usage.
      type: "input",
      name: "applicationUsage",
      message: "Please enter the required usage informaton.",
    },
    {
      // License.
      type: "input",
      name: "license",
      message: "What licenses have you used within your project?",
      choices: ["APACHE", "GNU", "ISC", "MIT", "No license"],
    },
    {
      // Contributions.
      type: "input",
      name: "applicationContributions",
      message: "Please enter how many people contributed.",
      choices: ["0-5", "6-10", "11-15", "16-20", "21+"],
    },
    {
      // Tests.
      type: "input",
      name: "applicationTests",
      message: "Please enter the type of tests required.",
    },
    {
      // Developer Email.
      type: "input",
      name: "developerEmail",
      message: "Please enter the developer email address.",
    },
    {
      // Developer Github.
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
