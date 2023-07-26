const Square = require('../lib/square');

describe('Square tests', () => {
  it('should draw a square', () => {
    const shape = new Square('blue', 'yellow', 'SSS');
    expect(shape.drawShape()).toEqual(`<svg height ='300' width='200' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="0" height="200" width="200" fill="blue" />
    <text x='100' y='100' font-size='60px' alignment-baseline="middle" text-anchor="middle" fill="yellow">SSS</text>
    </svg>`);
  });

  it('should set object properties correctly', () => {
    const shape = new Square('blue', 'yellow', 'SSS');
    expect(shape.color).toEqual('blue');
    expect(shape.textColor).toEqual('yellow');
    expect(shape.content).toEqual('SSS');
  });
});
