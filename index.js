const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const writeFileAsync = util.promisify(fs.writeFile);


function promptTheUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Please enter the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Please give a description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Please describe the installation process: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the useage of this project?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "sources",
            meaasge: "Please list all your sources"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} .then (answers => {
    const readMe = generateReadme(answers);
    fs.writeFile('README.md', generateReadme, (error)=>
    error ? console.log(error) : console.log('Sucessful README generated!📜'))
})

// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} </h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

This application is covered by the ${answers.license} license. 
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
${answers.questions}
## Sources
${answers.sources}

Find me on GitHub: [${answers.username}](https://github.com/${answers.username})

Email me with any questions: ${answers.email}

    `;
  }
  
const answers = promptTheUser();
const writeFile = generateReadme(answers);