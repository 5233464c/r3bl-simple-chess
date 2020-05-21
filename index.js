let board = require("./src/board.js");
let Figure = require("./src/figure.js");
let Player = require("./src/player.js");
let CollisionDetection = require("./src/collision.js");
let ConsoleView = require("./src/console-view.js")

let prompt = require('prompt-sync')();

console.log('RBFL SIMPLE CHESS');

let loop = true

let player1 = new Player({f1: new Figure('a1'), f2: new Figure('a2')})
let player2 = new Player({f1: new Figure('a7'), f2: new Figure('a8')})

let collision = new CollisionDetection(board);
let selectedFigure = null;
let moveFigureTo = null;

let consoleView = new ConsoleView(board)
consoleView.view()

let stop = 0

// while (loop) {
//     stop += 1
//     if (stop===3) {loop =false}


//     console.log("Spieler 1: ")
//     selectedFigure = prompt('Spielfigur? ');

//     try {
//         figure = player1.get(selectedFigure);
//     } catch (e) {
//         console.error(e.name + ': ' + e.message)
//         continue;
//     }

//     moveFigureTo = prompt('Bewege Spielfigure nach: ')
//     try {
//         if(!collision.isValid(moveFigureTo)) {
//             throw new Error('InvalidMoveException');
//         }
//         board.Board[moveFigureTo[0]][moveFigureTo[1]] = true;
//         let oldPosition = figure.position;
//         figure.move(moveFigureTo);
//         board.Board[oldPosition[0]][oldPosition[1]] = false;
        
//     } catch (e) {
//         console.error(e.name + ': ' + e.message)
//         process.exit(0);
//     }
//     console.log(board.Board.a);

//     console.log("Spieler 2: ")
//     selectedFigure = prompt('Spielfigur? ');
    
//     try {
//         figure = player2.get(selectedFigure);
//     } catch (e) {
//         console.error(e.name + ': ' + e.message)
//         continue;
//     }

//     moveFigureTo = prompt('Bewege Spielfigur nach: ')
//     try {
//         if(!collision.isValid(moveFigureTo)) {
//             throw new Error('InvalidMoveException');
//         }
//         board.Board[moveFigureTo[0]][moveFigureTo[1]] = true;
//         let oldPosition = figure.position;
//         figure.move(moveFigureTo);
//         board.Board[oldPosition[0]][oldPosition[1]] = false;

//     } catch (e) {
//         console.error(e.name + ': ' + e.message)
//         process.exit(0);
//     }
//     console.log(board.Board.a);
// }