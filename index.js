const file = require('fs');
const inquirer = require('inquirer');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const Circle = require('./lib/circle');
const FILENAME = './logo.svg';
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
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color would you like to fill the shape with? (color name or hexadecimal number)',
    },
  ])
  .then((answers) => {
    //Create logo
    if (answers.shape === 'Circle') {
      logo = new Circle(answers.shapeColor, answers.fontColor, answers.content);
    } else if (answers.shape === 'Square') {
      logo = new Square(answers.shapeColor, answers.fontColor, answers.content);
    } else if (answers.shape === 'Triangle') {
      logo = new Triangle(answers.shapeColor, answers.fontColor, answers.content);
    }

    // creates file
    file.writeFile(FILENAME, logo.drawShape(), (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
