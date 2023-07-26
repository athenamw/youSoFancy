const Triangle = require('../lib/triangle');

describe('Triangle tests', () => {
  it('should draw a triangle', () => {
    const shape = new Triangle('blue', 'yellow', 'TTT');
    expect(shape.drawShape()).toEqual(`<svg height ='300' width='200' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <polygon height="100%" width="100%" points="0,200 100,0 200,200" fill="blue"/>
    <text x='50%' y='40%' font-size='60px' alignment-baseline="middle" text-anchor="middle" fill="yellow">TTT</text>
    </svg>`);
  });

  it('should set object properties correctly', () => {
    const shape = new Triangle('blue', 'yellow', 'TTT');
    expect(shape.color).toEqual('blue');
    expect(shape.textColor).toEqual('yellow');
    expect(shape.content).toEqual('TTT');
  });
});
