
const Figure = require('../model/figure.js')
const Player = require('../model/player.js')

const player1Figures = {
    f1: new Figure('a1'), 
    f2: new Figure('a2'),
    f3: new Figure('b1'),
    f4: new Figure('b2'),
    f5: new Figure('c1'),
    f6: new Figure('c2'),
    f7: new Figure('d1'),
    f8: new Figure('d2'),
    f9: new Figure('e1'),
    f10: new Figure('e2'),
    f11: new Figure('f1'),
    f12: new Figure('f2'),
    f13: new Figure('g1'),
    f14: new Figure('g2'),
    f15: new Figure('h1'),
    f16: new Figure('h2'),
};
const player2Figures = {
    f1: new Figure('a8'), 
    f2: new Figure('a7'),
    f3: new Figure('b8'),
    f4: new Figure('b7'),
    f5: new Figure('c8'),
    f6: new Figure('c7'),
    f7: new Figure('d8'),
    f8: new Figure('d7'),
    f9: new Figure('e8'),
    f10: new Figure('e7'),
    f11: new Figure('f8'),
    f12: new Figure('f7'),
    f13: new Figure('g8'),
    f14: new Figure('g7'),
    f15: new Figure('h8'),
    f16: new Figure('h8'),
};

const player1 = new Player('René', player1Figures)
const player2 = new Player('Felix', player2Figures)

module.exports = {
    player1: player1,
    player2: player2
}
