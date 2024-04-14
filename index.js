const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ name, description, tableofcontents, installation, usage, licence, contributing, tests, github, email, questions}) =>
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
      message: 'Explain how will the software be used?',
    },
    {
      type: 'list',
      name: 'licence',
      message: 'What type of licence will the software have?',
      choices: ['MIT', 'Stanford'],
      filter(val){
        return val.toLowerCase();
      },
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
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Random stuff',
    },
  ])
  .then((answers) => {
    console.log(answers);
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (x) =>
      x ? console.log(x) : console.log('Successfully created README.md!')
    );
  });