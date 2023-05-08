class Graph  {

  constructor() {
    this.adjacencyList = {};
  }


  addVertex(v) {
    if(!this.adjacencyList[v]) {
      this.adjacencyList[v] = new Set();
    }
  }

  addEdge(v1, v2) {
    if(!this.adjacencyList[v1]) {
      throw new Error(`Vertex ${v1} does not exist`);
    }
    if(!this.adjacencyList[v2]) {
      throw new Error(`Vertex ${v2} does not exist`);
    }
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  removeEdge(v1, v2) {
    if(!this.adjacencyList[v1]) {
      throw new Error(`Vertex ${v1} does not exist`);
    }
    if(!this.adjacencyList[v2]) {
      throw new Error(`Vertex ${v2} does not exist`);
    }
    this.adjacencyList[v1].delete(v2);
    this.adjacencyList[v2].delete(v1);
  }

  removeVertex(v1) {
    for (const v2 in this.adjacencyList) {
      this.removeEdge(v1, v2);
      }

    delete this.adjacencyList[v1];
  }

  dfs(start) {
    if(!start) {
      throw new Error("Start vertex is not provided");
    }
    const result = [];
    const visited = new Set();

    const dfsRecursive = (node) => {
      if(!this.adjacencyList[node]) {
        return;
      }

      visited.add(node);
      result.push(node);
      for (const v of this.adjacencyList[node]) {
        if(!visited.has(v)) {
          dfsRecursive(v);
        }
      }
    }

    dfsRecursive(start);
    return result;
  }


  dfsIterative(start){ 
    const stack = [];
    const result = [];
    const visited  = new Set();
    stack.push(start);

    while(stack.length) {
      const current = stack.pop();
      if(!visited.has(current)) {
        result.push(current);
        visited.add(current);
      }

      for (const v of this.adjacencyList[current]) {
        if(!visited.has(v)) {
          stack.push(v);
        }
      }
    }

    return result;
  }


}


const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");


g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

/* 

      A
    /   \
  B       C
  |       |
  D  ___  E
    \    /
       F
*/

console.log(g);
console.log(g.dfs("A"));
console.log(g.dfsIterative("A"));
