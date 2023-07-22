const file = require('fs');
const inquirer = require('inquirer');
// const jest = require('jest');
// const svgBuilder = require('svg-builder');
const circle = require('./lib/circle');
const square = require('./lib/square');
const triangle = require('./lib/triangle');
const Circle = require('./lib/circle');
const FILENAME = 'logo.svg';
var logo;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'content',
      message: 'Pick three characters for your logo content.',
      validate: (content) => {
        if (content.length == 3) {
          return true;
        } else {
          console.log('  Invalid: enter 3 characters');
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
  ])
  .then((answers) => {
    //Create logo
    if (logo == 'Square') {
      logo = new Square();
      console.log('Square selected');
    } else if (logo == 'Circle') {
      logo = new Circle();
      console.log('Circle selected');
    } else if (logo == 'Triangle') {
      logo = new Triangle();
      console.log('Triangle selected');
    }
  });
