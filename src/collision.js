class CollisionDetection {
    constructor(board) {
        this.board = board.Board;
    }
    isValid(position) {
        if (!this.board[position[0]][position[1]]) {
            return true;
        }
        return false;
    }

}


module.exports = CollisionDetection