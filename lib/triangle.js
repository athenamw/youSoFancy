const MasterShape = require('./masterShape');
class Triangle extends MasterShape {
  constructor(color, textColor, content) {
    super(color, textColor);
  }
  drawShape() {
    return `<svg height ='300' width='200'><polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/><text x='80' y='130' fill="${this.textColor}"></text>
    </svg>`;
  }
}

module.exports = Triangle;
