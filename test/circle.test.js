const Circle = require('../lib/circle');

describe('Circle tests', () => {
  it('should draw a circle', () => {
    const shape = new Circle('blue', 'yellow', 'CCC');
    expect(shape.drawShape()).toEqual(`<svg height ='300' width='200' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"/>
    <text x='50%' y='50%' font-size="60px" text-anchor="middle" fill="yellow">CCC</text>
    </svg>`);
  });

  it('should set object properties correctly', () => {
    const shape = new Circle('blue', 'yellow', 'TTT');
    expect(shape.color).toEqual('blue');
    expect(shape.textColor).toEqual('yellow');
    expect(shape.content).toEqual('TTT');
  });
});
