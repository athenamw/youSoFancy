const MasterShape = require('./masterShape');
class Triangle extends MasterShape {
  constructor(color, textColor, content) {
    super(color, textColor);
    this.content = content;
  }
  drawShape() {
    return `<svg height ='300' width='200' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <polygon height="100%" width="100%" points="0,200 100,0 200,200" fill="${this.color}"/>
    <text x='80' y='130' fill="${this.textColor}">${this.content}</text>
    </svg>`;
  }
}

module.exports = Triangle;
