let prompt = require('prompt-sync')();
let CollisionDetection = require("../collision.js");

let selectedFigure = null;
let moveToPosition = null;


class FrontController {
    constructor(board, view) {
        this.board = board
        this.view = view
    }

    move(player) {
        let collision = new CollisionDetection(this.board);
        console.log("Player " + player.name + ": ")

        selectedFigure = prompt('Select figure: ');
        let figure = player.get(selectedFigure);

        moveToPosition = prompt('Move figure to: ')

        if (!collision.isValid(moveToPosition)) {
            throw new Error('InvalidMoveException');
        }

        this.board.Board[moveToPosition[1]][moveToPosition[0]] = true;
        let oldPosition = figure.position;
        figure.move(moveToPosition);
        this.board.Board[oldPosition[1]][oldPosition[0]] = false;
        

        
        console.log(this.view.view(this.board.Board))
    }
}

module.exports = FrontController
