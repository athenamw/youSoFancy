const MasterShape = require('./masterShape');

class Square extends MasterShape {
  constructor(color, textColor, content) {
    super(color, textColor);
  }
  drawShape() {
    return `<svg height ='300' width='200'><rect x="50" height="200" width="200" fill="${this.color}"><text x='80' y='130' fill="${this.textColor}"/></text>
    </svg>`;
  }
}

module.exports = Square;
