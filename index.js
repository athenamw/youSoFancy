const file = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const svgBuilder = require('svg-builder');
const { Circle, Square, Triangle } = require('./lib/masterShape');

class svgImage {
  constructor() {
    this.contentCharac = '';
    this.shapeChoice = '';
  }
  render() {
    return ``;
  }
}

inquirer.prompt([
  {
    type: 'input',
    name: 'content',
    message: 'Pick three characters for your logo content.',
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
