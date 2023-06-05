// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usageInformation}
  
  
  ![alt text](${data.usageScreenshotURL})
  
  
  ## Credits
  
  ${data.collaborators}
  
  ## License
  
  Licensed under the ${data.license} license.
  
  ---
  
  ![languagesBadge](https://img.shields.io/badge/github/languages/count/${data.gitHub}/${data.repoName})
  ![topLanguageBadge](https://img.shields.io/badge/github/languages/top/${data.gitHub}/${data.repoName})
`;
}

module.exports = generateMarkdown;
