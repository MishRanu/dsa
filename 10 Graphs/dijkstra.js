class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, end) {
    const priority = new PriorityQueue();
    const distances = {};
    const previous = {};
    const visited = {};

    // set initial distances to Infinity
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priority.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priority.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    distances[start] = 0;
    visited[start] = true;

    priority.enqueue(start, distances[start]);
    /* Check if queue has any node to visit */
    while (priority.values.length) {
      const current = priority.dequeue().val;

      if (current === end) {
        break;
      }

      if (current || distances[current] !== Infinity) {
        for (const neighbor of this.adjacencyList[current]) {
          const candidate = distances[current] + neighbor.weight;

          if (candidate < distances[neighbor.node]) {
            distances[neighbor.node] = candidate;
            previous[neighbor.value] = current;
            priority.enqueue(neighbor.node, distances[neighbor.node]);
          }

          console.log(distances);
        }
      }
    }

    // calculate path and return
  }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.adjacencyList["A"]);
console.log(g.dijkstra("A", "E"));

/* 
s
      A
    /   \
  B       C
  |       |
  D  ___  E
    \    /
        F

*/
