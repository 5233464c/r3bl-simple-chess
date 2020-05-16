class CollisionDetection {
    constructor(board) {
        this.board = board.Board;
    }
    isValid(position, figure) {
        if (!this.board[position[0]][position[1]]) {
            this.board[position[0]][position[1]] = true;
            let oldPosition = figure.position;
            figure.move(position);
            this.board[oldPosition[0]][oldPosition[1]] = false;
            return true;
        }

        throw new Error('InvalidMoveException');
    }

}


module.exports = CollisionDetection