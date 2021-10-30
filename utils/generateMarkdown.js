// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [Installation](#installation)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
## Description
${data.description}
## Usage
${data.usage} 
## Installation
${data.installation}
## Contribution 
${data.contribution}
## Tests
${data.tests}
## License
This project is licensed under the ${data.license} license
## Questions
If you have any questions, contact me at github.com/${data.username}
`;
}

module.exports = generateMarkdown;
