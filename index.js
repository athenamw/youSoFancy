const inquirer = require('inquirer');
const jest = require('jest');
const MaxCharacLengthPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxCharac-input', MaxCharacLengthPrompt);

const questions = [
  {
    type: 'maxCharac-input',
    name: 'content',
    message: 'Pick three characters for your logo content.',
    maxLength: 3,
  },
  {},
];
