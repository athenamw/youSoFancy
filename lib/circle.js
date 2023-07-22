const MasterShape = require('./masterShape');

class Circle extends MasterShape {
  constructor(color, textColor, content) {
    super(color, textColor);
  }
  drawShape() {
    return `<svg height ='300' width='200'>
    <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>
    <text x='80' y='130' fill="${this.textColor}"></text>
    </svg>`;
  }
}

module.exports = Circle;
