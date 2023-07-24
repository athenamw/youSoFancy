const MasterShape = require('./masterShape');

class Circle extends MasterShape {
  constructor(color, textColor, content) {
    super(color, textColor);
    this.content = content;
  }
  drawShape() {
    return `<svg height ='300' width='200' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>
    <text x='50%' y='50%' font-size="60px" text-anchor="middle" fill="${this.textColor}">${this.content}</text>
    </svg>`;
  }
}

module.exports = Circle;
