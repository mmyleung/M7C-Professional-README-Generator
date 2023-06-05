const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { error } = require("console");

// array of questions for user
const questions = [
{
    type: 'input',
    message: 'Enter your project title:',
    name: 'title'
},
{
    type: 'input',
    message: 'Enter your project description:',
    name: 'description'
},
{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation'
},
{
    type: 'input',
    message: 'Provide instructions and examples for use:',
    name: 'usageInformation'
},
{
    type: 'input',
    message: 'Enter the URL for usage screenshot',
    name: 'usageScreenshotURL'
},
{
    type: 'input',
    message: 'List your collaborators',
    name: 'collaborators'
},
{
    type: 'list',
    message: 'Select your license for this project',
    choices: ["MIT","GPL","Apache"],
    name: 'license'
},
{
    type: 'input',
    message: 'Enter your GitHub username',
    name: 'gitHub'
},
{
    type: 'input',
    message: 'Enter the GitHub repository name for this project',
    name: 'repoName'
}
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err?console.error(err):console.log("README successfully generated!")
    })
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then((data) => {
    writeToFile("README.md", generateMarkdown(data))
})
}

// function call to initialize program
init();
