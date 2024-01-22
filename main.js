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

    const updateMessage = (text) => {
        const display = document.querySelector(".display");
        display.textContent = text;
    }

    return {setBoardSpace, getBoardSpace, clearBoard, updateMessage};
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
        //Check for selected cell being empty
        if (checkEmpty(index) == false) {
            return gameBoard.updateMessage("Pick a blank space!");
        } 

        //Check fot tie
        if (round === 9 && checkWin() == null) {
            gameManager.updateBoard(index);
            return gameBoard.updateMessage("It's a tie!");
        }

        // Check for win after move is played only during rounds in which win is possible (round 5+)
        if (round > 4) {
            gameBoard.updateMessage(`It's ${getCurrentPlayer()}'s turn`);
            round++;
            gameBoard.setBoardSpace(index, gameManager.getCurrentPlayer());
            gameManager.updateBoard(index);

            if (gameManager.checkWin()) {
                return gameBoard.updateMessage(`${getCurrentPlayer()} wins!`);
            } else if (gameManager.checkWin() == null) {
                return gameBoard.setBoardSpace(index, gameManager.getCurrentPlayer());
            }
        // When win is not possible just play round without checking for win
        } else if (round < 5) {
            gameBoard.updateMessage(`It's ${getCurrentPlayer()}'s turn`);
            round++;
            gameManager.updateBoard(index);
            return gameBoard.setBoardSpace(index, gameManager.getCurrentPlayer());
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

    const updateBoard = (index) => {
        const target = document.querySelector(`[data-index="${index}"]`);
        let sign = gameManager.getCurrentPlayer();
        target.classList.add(`display${sign}`);
    }
    
    return {playRound, getCurrentPlayer, checkEmpty, checkWin, updateBoard};
})();

(function () {
    const boardElement = document.querySelector(".board");
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => cell.addEventListener("click", function(e) {
        gameManager.playRound(e.target.getAttribute("data-index"));
    }));
})();