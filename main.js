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