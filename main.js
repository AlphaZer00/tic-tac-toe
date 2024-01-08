
const loadBoard = (function() {
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

function getPlayers() {
    const player1 = createPlayer("one");
    const player2 = createPlayer("two");

    let playerFirst = player1.name;
    let playerSecond = player2.name;

    return {playerFirst, playerSecond}
} 

function createPlayer(name) {
    return {name};
}

function playRound(row, col) {
    const checkSpaceBlank = () => {
        const boardArray = loadBoard.createBoard();
        if (boardArray[row][col] === 0) {
            return true;
        } else {return false;}
    }
}