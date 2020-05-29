class CollisionDetection {
    constructor(board) {
        this.board = board.Board;
    }
    isValid(position) {

        if(position.length > 2) {
            return false;
        }

        if (this.board[position[1]][position[0]] !== 'undefiend') {
            return true;
        }
        return false;
    }
    isFieldOccupied(moveToPosition) {
        return this.board[moveToPosition[1]][moveToPosition[0]];
    }
    isBeaten(player, moveToPosition) {
        if (this.isFieldOccupied(moveToPosition)) {
            try {
                let figure = player.get(moveToPosition)
                if (figure) {
                    return false;
                }

            } catch (e) {
                return true;
            }
        }
        return false;
    }
}

module.exports = CollisionDetection