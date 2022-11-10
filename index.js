const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'faveActor',
      message: 'What is your favorite actor?'
    },
    {
        name: 'faveRapper',
        message: 'What is your favorite rapper?'
      },
  ])
  .then(answers => {
    console.info('Answer:', answers);
  });
