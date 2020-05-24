let Figure = require("./src/model/figure.js");
let Player = require("./src/model/player.js");
let InputController = require("./src/controller/front.js");
let ConsoleView = require("./src/view/console.js");
let board = require("./src/model/board.js");

console.log('RBFL SIMPLE CHESS');

let loop = true

let player1 = new Player('René', {f1: new Figure('a1'), f2: new Figure('a2')})
let player2 = new Player('Felix', {f1: new Figure('a7'), f2: new Figure('a8')})

let view = new ConsoleView()
let controller = new InputController(board, view);

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



