let Figure = require("./src/figure.js");
let Player = require("./src/player.js");
let control = require("./src/control.js");

console.log('RBFL SIMPLE CHESS');

let loop = true

let player1 = new Player('René', {f1: new Figure('a1'), f2: new Figure('a2')})
let player2 = new Player('Felix', {f1: new Figure('a7'), f2: new Figure('a8')})

while (loop) {
    try {
        control(player1)
        control(player2)
    } catch (e) {
        console.error(e.name + ': ' + e.message)
    }
}



