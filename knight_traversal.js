class Queue {
    constructor() {
       this.queue = [];
    }
   
    enqueue(item) {
       this.queue.push(item);
    }
   
    dequeue() {
       return this.queue.shift();
    }
   
    isEmpty() {
       return this.queue.length === 0;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null; 
      }
      return this.queue[0];
   }
}

class vertex {

    constructor(position, previous = null) {
        this.position = position;
        this.previous = previous;
    }
}

let starting = [0, 0];
let end = [7, 7];

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
        move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8
    );
}

function knight_travails(start, end) {
    let q = new Queue();
    let visited = [];
    start = new vertex(start);

    q.enqueue(start);

    while(!q.isEmpty())
    {
        let current = q.dequeue();
        visited.push(current);

        if (current.position[0] === end[0] && current.position[1] === end[1])
        {
            break;
        }
        
        let possibleMoves = possible_moves(current.position);

        possibleMoves.forEach(element => {
            if(!visited.some(v => v.position[0] === element[0] && v.position[1] === element[1]))
            {
                let node = new vertex(element, current);
                q.enqueue(node);
            }
        });
    }

    let path = [];
    end = visited[visited.length - 1];

    while(end) {
        path.unshift(end.position);
        end = end.previous;
    }

    return path;
}

console.log(knight_travails(starting, end));


