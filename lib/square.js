const MasterShape = require('./masterShape');

class Square extends MasterShape {
  constructor(color, textColor, content) {
    super(color, textColor);
    this.content = content;
  }
  drawShape() {
    return `<svg height ='300' width='200' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="0" height="200" width="200" fill="${this.color}" />
    <text x='100' y='100' font-size='60px' alignment-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.content}</text>
    </svg>`;
  }
}

module.exports = Square;
