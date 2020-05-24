class ConsoleView {
    view(board) {

        let rowOutput = ''
        for (let [key, row] of Object.entries(board)) {

            for (let [key, field] of Object.entries(row)) {
                if (field) {
                    rowOutput += '\u2654 ';
                } else {
                    rowOutput += '\u25a1 ';
                }

            }
            rowOutput += '\n';
        }
        return rowOutput;
    }
}

module.exports = ConsoleView