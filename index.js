let board = require("./src/board.js");
let Figure = require("./src/figure.js");
let CollisionDetection = require("./src/collision.js");
console.log('RBFL SIMPLE CHESS');


let input = 'a3';
let figure1 = new Figure('a1');
let collision = new CollisionDetection(board);
console.log(figure1.position)
console.log(board.Board.a)
try {
    collision.isValid(input, figure1);
} catch (e) {
    console.error(e.name + ': ' + e.message)
}
console.log(figure1.position)

console.log(board.Board.a)


