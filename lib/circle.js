const MasterShape = require('./masterShape');

class Circle extends MasterShape {
  constructor(color, textColor, content) {
    super(color, textColor);
  }
  drawShape() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`;
  }
}

module.exports = Circle;
