const gameBoard = (function() {
    const board = [];
    for (let i = 0; i < 9; i++) {
        board.push("");
    }

    const setBoard = (i, sign) => {
      board[i] = sign;
    }
      
    const getBoard = (i) => {
        return board[i];
    }

    const clearBoard = () => {
        for (let i = 0; i < 9; i++) {
            board[i] = "";
        }
    }

    return {setBoard, getBoard, clearBoard};
})();

const player = (sign) => {
    this.sign = sign;
    const getSign = () => {
        return sign;
    }
    return {getSign};
};

const gameManager = (function() {
    let isOver = false;
    let round = 1;
    const player1 = player('X');
    const player2 = player('O');

    const playRound = (index) => {
        gameBoard.setBoard(index, getCurrentPlayer());
    }
    const getCurrentPlayer = () => {
        if (round % 2) {
            return player1.getSign();
        } else {
            return player2.getSign();
        }
    }

    return {playRound, getCurrentPlayer}
})();