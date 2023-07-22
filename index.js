const file = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const svgBuilder = require('svg-builder');
const circle = require('./lib/circle');
const square = require('./lib/square');
const triangle = require('./lib/triangle');

inquirer.prompt([
  {
    type: 'input',
    name: 'content',
    message: 'Pick three characters for your logo content.',
    validate: (content) => {
      if (content.length == 3) {
        return true;
      } else {
        console.log('Invalid: enter 3 characters');
        return false;
      }
    },
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
// function to write to file.
function writeToFile() {}
