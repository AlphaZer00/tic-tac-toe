
const loadBoard =(function() {
    const createBoard = () => {
        const boardArray = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
        return boardArray;
    }

    return {createBoard};
})();

loadBoard.createBoard();

