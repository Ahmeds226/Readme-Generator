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
  ${data.title}

${renderLicenseBadge(data.license)}

  ## Description
${data.description}

 ## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

 ## Installation
 <a name ="installation"> </a>
${data.installation}

## Usage
<a name ="usage"> </a>
${data.usage}

## Licence
<a name ="license"> </a>
${renderLicenseBadge(data.license)}

## Contributing
<a name ="contributing"> </a>
${data.contributing}

## Tests
<a name ="tests"> </a>
${data.tests}

## Questions
 If you have any further questions, contact me on ${data.email}.
 My github is ${data.github}.
`;
}

module.exports = generateMarkdown;
