class Chessboard {
    constructor(size = 8) {
        this.size = size;
        this.board = this.createBoard(size);
    }

    createBoard(size) {
        let board = {};
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let node = `${i},${j}`;
                board[node] = [];
            }
        }
        return board;
    }

    addEdge(node1, node2) {
        this.board[node1].push(node2);
        this.board[node2].push(node1);
    }

}

let chess = new Chessboard();
let starting = [0, 0];


function possible_moves(position) {
    let possibleMoves = [
        [position[0] + 2, position[1] + 1],
        [position[0] + 2, position[1] - 1],
        [position[0] - 2, position[1] + 1],
        [position[0] - 2, position[1] - 1],
        [position[0] + 1, position[1] + 2],
        [position[0] - 1, position[1] + 2],
        [position[0] + 1, position[1] - 2],
        [position[0] - 1, position[1] - 2],
    ];

    return possibleMoves.filter(move => 
        move[0] >= 0 && move[0] < this.size && move[1] >= 0 && move[1] < this.size
    );
}



