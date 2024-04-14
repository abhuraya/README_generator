//inquirer and fs module variables
const inquirer = require('inquirer');
const fs = require('fs');

//function to fill content of README file
const generateREADME = ({ name, description, installation, usage, licence, contributing, tests, github, email, questions}) =>
  `## ${name}

  ## Description
  - ${description}

  ## Table of Contents
  - #Installation
  - #Usage
  - #Licence
  - #Contributers
  
  ## Installation
  - ${installation}
  
  ## Usage
  - ${usage}
  
  ## Licence
  - ${licence}
  
  ## Contributers
  - ${contributing}
  
  ## Tests
  - ${tests}
  
  ## Questions
  - ${questions}
  - If you have any questions please feel free to contact me at:
    - Github repo: github.com/${github}
    - Email: ${email}`;

//question prompts to accept user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is name of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Explain how to install the software?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain how the software will be used?',
    },
    {
      type: 'list',
      name: 'licence',
      message: 'What type of licence will the software have?',
      choices: ['MIT', 'Stanford']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {
      type: 'input',
      name: 'contributers',
      message: 'Enter the name of all contributer',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test methods',
    }
  ])

  
  .then((answers) => {
    console.log(answers);
    const readmePageContent = generateREADME(answers);
//function to create README file
    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });