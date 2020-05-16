let board = require("./src/board.js");
let Figure = require("./src/figure.js");
let CollisionDetection = require("./src/collision.js");
console.log('RBFL SIMPLE CHESS');

let loop = true

while (loop) {
    let input = 'a3';
    let figure1 = new Figure('a1');
    let collision = new CollisionDetection(board);
    try {
        collision.isValid(input, figure1);
    } catch (e) {
        console.error(e.name + ': ' + e.message)
        loop = false
    }

}
// Benutzereingabe zur Veränderung der Position 
// Gameloop mit wiederholter Benutzereingabe
// Figur wird von A1 nach A2 bewegt
// Input 1: Wähle Figur(enthält Ausgangsposition)
// Input 2: Bewege Figur(zur Endposition)