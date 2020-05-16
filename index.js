let board = require("./src/board.js");
let Figure = require("./src/figure.js");
let CollisionDetection = require("./src/collision.js");

let prompt = require('prompt-sync')();

console.log('RBFL SIMPLE CHESS');

let loop = true

let figures = {
    f1: new Figure('a1'),
    f2: new Figure('a2'),

    get: (selected) => {
        if (figures.f1.position == selected) {
            return figures.f1;
        }
        if (figures.f2.position == selected) {
            return figures.f1;
        }
        throw new Error('InvalidSelectedFigureException')
    }
}
let collision = new CollisionDetection(board);

while (loop) {
    let selectedFigure = prompt('Spielfigur? ');
    let figure = null;

    try {
        figure = figures.get(selectedFigure);
    } catch (e) {
        console.error(e.name + ': ' + e.message)
        continue;
    }

    let moveFigureTo = prompt('Bewege Spielfigure nach: ')
    try {
        collision.isValid(moveFigureTo, figure);
    } catch (e) {
        console.error(e.name + ': ' + e.message)
        process.exit(0);
    }
    console.log(board.Board.a);
}