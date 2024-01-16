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
            return "Pick a blank space!";
        } 

        if (round === 9 && checkWin() == null) {
            return "It's a tie!";
        }

        if (round > 4) {
            console.log(round);
            round++;
            gameBoard.setBoardSpace(index, getCurrentPlayer());
            if (checkWin()) {
                return checkWin();
            } else if (checkWin() == null) {
                return gameBoard.setBoardSpace(index, getCurrentPlayer());
            }
        } else if (round < 5) {
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

    const checkWin = () => {
        const winCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        const checkSameSign = () => {
            for (let i = 0; i < winCombos.length; i++) {
                const combo = winCombos[i];
                const values = combo.map(index => gameBoard.getBoardSpace(index));
        
                if (values.every(value => value === 'X')) {
                    return 'X wins!';
                } else if (values.every(value => value === 'O')) {
                    return 'O wins!';
                }
            }
        
            return null;
        }
        return checkSameSign();
    }
    

    return {playRound, getCurrentPlayer, checkEmpty, checkWin};
})();