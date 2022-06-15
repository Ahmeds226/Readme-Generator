// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No license") {
    return `<img src = 'https://img.shields.io/badge/license-${license}-blue.svg'>`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Title
  ${data.applicationTitle}

${renderLicenseBadge(data.license)}

  ## Description
${data.applicationDescription}

 ## Table of Contents

* [Installation](#installationInstructions)

* [Usage](#applicationUsage)

* [Contributions](#applicationContributions)

* [License](#license)

* [Tests](#applicationTests)

* [Email](#developerEmail)

* [Github Username](#devloperGithub)

 ## Installation
 <a name ="installationInstructions"> </a>
${data.installationInstructions}

## Usage
<a name ="applicationUsage"> </a>
${data.applicationUsage}

## Contributing
<a name ="applicationContributions"> </a>
${data.applicationContributions}

## Licence
<a name ="license"> </a>
${renderLicenseBadge(data.license)}


## Tests
<a name ="applicationTests"> </a>
${data.applicationTests}

## Questions
 If you have any further questions, contact me on ${data.developerEmail}.
 My github is ${data.devloperGithub}.
`;
}

module.exports = generateMarkdown;
