const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: 'input',
    message: 'Enter your project title:',
    name: 'projectTitle'
},
{
    type: 'input',
    message: 'Enter your project description:',
    name: 'projectDescription'
},
{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation'
},
{
    type: 'input',
    message: 'Provide instructions and examples for use:',
    name: 'usage information'
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
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
