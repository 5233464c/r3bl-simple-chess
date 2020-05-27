class ConsoleView {
    view(board) {

        let chessboard = '  a b c d e f g h\n'
        for (let [key, row] of Object.entries(board)) {
            chessboard += key + ' ';
            for (let [key, field] of Object.entries(row)) {
                if (field) {
                    chessboard += '\u2654 ';
                } else {
                    chessboard += '\u25a1 ';
                }
            }
            chessboard += key + '\n';
            if(key == 8) {
                chessboard += '  a b c d e f g h';
            }
        }
        return chessboard;
    }
}

module.exports = ConsoleView