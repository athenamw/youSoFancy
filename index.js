const inquirer = require('inquirer');
const jest = require('jest');

inquirer.prompt([
  {
    type: 'input',
    name: 'content',
    message: 'Pick three characters for your logo content.',
    maxlength: 3,
  },
  {
    type: 'input',
    name: 'fontColor',
    message: 'What color would you like the font to be? (color name or hexadecimal number)',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape do you want your logo?',
    choices: ['circle', 'square', 'triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color would you like to fill the shape with? (color name or hexadecimal number)',
  },
]);
