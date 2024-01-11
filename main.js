const gameBoard = (function() {
    const board = [];
    for (let i = 0; i < 9; i++) {
        board.push("");
    }

    const setBoardSpace = (i, sign) => {
        board[i] = sign;
        return board;
    }
      
    const getBoardSpace = (i) => {
        return board[i];
    }

    const clearBoard = () => {
        for (let i = 0; i < 9; i++) {
            board[i] = "";
        }
    }

    return {setBoardSpace, getBoardSpace, clearBoard};
})();

const player = (sign) => {
    this.sign = sign;
    const getSign = () => {
        return sign;
    }
    return {getSign};
};

const gameManager = (function() {
    //let isOver = false;
    let round = 1;
    const player1 = player('X');
    const player2 = player('O');
    
    const getCurrentPlayer = () => {
        if (round % 2) {
            return player2.getSign();
        } else {
            return player1.getSign();
        }
    }

    const playRound = (index) => {
        if (checkEmpty(index) == false) {
            return;
        } else if (checkEmpty(index)) {
            round++;
            console.log(round);
            return gameBoard.setBoardSpace(index, getCurrentPlayer());
        }

    }

    const checkEmpty = (i) => {
        if (gameBoard.getBoardSpace(i) === "") {
            return true;
        } else if (!(gameBoard.getBoardSpace(i) === "")) {
            return false;
        }
    }
    

    return {playRound, getCurrentPlayer, checkEmpty}
})();