class Graph {
    constructor() {
      this.adjList = {};
    }
  
    addNode(node) {
        this.adjList[node.value] = {
            node,
            edges: []
        };
    }
  
    addEdge(node1, node2) {
        this.adjList[node1.value].edges.push(node2);
        this.adjList[node2.value].edges.push(node1);
    }
  
    removeNode(node) {
        // remove from all adjacency lists that it appears in
        this.adjList[node.value].edges.forEach(relatedNode => {
            this.adjList[relatedNode.value].edges = this.adjList[relatedNode.value].edges.filter(nodeInList => nodeInList !== node);
        });
        // remove node from adjacency list
        delete this.adjList[node.value];
    }
  
    removeEdge(node1, node2) {
        this.adjList[node1.value].edges = this.adjList[node1.value].edges.filter(nodeInList => nodeInList !== node2);
        this.adjList[node2.value].edges = this.adjList[node2.value].edges.filter(nodeInList => nodeInList !== node1);
    }
  
    depthFirstTraversal(startingNode, visited = [], func = console.log) {
        func(startingNode);
        visited.push(startingNode);
        this.adjList[startingNode.value].edges.forEach(relatedNode => {
            if (!visited.includes(relatedNode)) {
                this.depthFirstTraversal(relatedNode, visited);
            }
        })
    }
  
    breadthFirstTraversal(startingNode, func = console.log) {
        let visited = [];
        let nodesToProcess = [startingNode];

        while (nodesToProcess.length) {
            let currentNode = nodesToProcess.shift();
            func(currentNode);
            visited.push(currentNode);
            this.adjList[currentNode.value].edges.forEach(relatedNode => {
                if (!visited.includes(relatedNode)) {
                    nodesToProcess.push(relatedNode);
                }
            });
        }
    }
  }

class Node {
    constructor(value) {
        this.value = value;
    }
}
  
//   export default Graph;

  const myGraph = new Graph;
  const node1 = new Node(1);
  myGraph.addNode(node1);
  const node2 = new Node(2);
  myGraph.addNode(node2);
  const node3 = new Node(3);
  myGraph.addNode(node3);

//   console.log(myGraph);

  myGraph.addEdge(node1, node2);
  myGraph.addEdge(node3, node2);

//   console.log(myGraph);

//   myGraph.removeEdge(node1, node2);

//   console.log(myGraph);
myGraph.breadthFirstTraversal(node1);