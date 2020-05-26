const collision = require('../src/collision');
const board = require('../src/model/board');

test('Try example test for collision.js', () => {
    const detection = new collision(board);
    expect(detection.isValid('a1')).toBe(true);
    expect(detection.isValid('a3')).toBe(true);
});