let FrontController = require("./src/controller/front.js");
let ConsoleView = require("./src/view/console.js");
let board = require("./src/model/board.js");
const players = require("./src/factory/players.js");


let loop = true

let player1 = players.player1;
let player2 = players.player2;

let view = new ConsoleView()
let controller = new FrontController(board, view, players);

let stop = 0

while (loop) {
    if(stop === 3) {
        break;
    }
    stop += 1
    try {
        controller.move(player1)
        controller.move(player2)
    } catch (e) {
        console.error(e.name + ': ' + e.message)
    }
}
