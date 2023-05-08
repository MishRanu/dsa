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


}


const g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addEdge("Tokyo", "Dallas");
// g.removeEdge("Tokyo", "Dallas");
// g.removeVertex("Tokyo");



console.log(g);