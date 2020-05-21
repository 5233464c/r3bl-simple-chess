let prompt = require('prompt-sync')();
let CollisionDetection = require("./collision.js");
let board = require("./board.js");

let collision = new CollisionDetection(board);
let selectedFigure = null;
let moveToPosition = null;

function control(player) {
    console.log("Spieler " + player.name + ": ")

    selectedFigure = prompt('Spielfigur? ');
    figure = player.get(selectedFigure);

    moveToPosition = prompt('Bewege Spielfigure nach: ')

    if (!collision.isValid(moveToPosition)) {
        throw new Error('InvalidMoveException');
    }

    board.Board[moveToPosition[0]][moveToPosition[1]] = true;
    let oldPosition = figure.position;
    figure.move(moveToPosition);
    board.Board[oldPosition[0]][oldPosition[1]] = false;

    console.log(board.Board.a);
}

module.exports = control