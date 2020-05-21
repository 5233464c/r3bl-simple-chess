class ConsoleView {
    constructor(board) {
        this.board = board.Board
    }
    view() {

        for (let [key, value] of Object.entries(this.board)) {

            let row = value
            let str = ''
            for (let [key, value] of Object.entries(row)) {
                if (value) {
                    str += '\u2654 ';
                } else {
                    str += '\u25a1 ';
                }

            }
            console.log(str)
        }
    }
}

module.exports = ConsoleView