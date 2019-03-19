const Queue = require('./queue');
const Node = require('./node');

class Graph {
  constructor(rootNode) {
    this.rootNode = rootNode;
    this.BFSQueue = new Queue();

    // check if the root node exists
    if (!rootNode) {
      return 'Please pass in root node';
    }

    // adds root node to bfs queue
    this.BFSQueue.enqueue(rootNode);
  }

  /**
   * Searches a graph using Breadth First Search
   * @param {string} queryValue
   */
  bfs(queryValue) {
    while (this.BFSQueue.queue.length > 0) {
      const currentNode = this.BFSQueue.queue[0];

      // check if the value of query is a match
      // for the current node's value
      if (currentNode.value === queryValue) {
        return `Found ${queryValue}`;
      }

      // if current node has a left child add it to the queue
      if (currentNode.leftNode) {
        this.BFSQueue.enqueue(currentNode.leftNode);
      }

      if (currentNode.rightNode) {
        this.BFSQueue.enqueue(currentNode.rightNode);
      }

      // remove current node from queue
      this.BFSQueue.dequeue();
    }

    // if not found return not found
    return `Could not find ${queryValue}`;
  }

  /**
   * Traverses a graph via bfs
   */
  bfsTraverse() {
    while (this.BFSQueue.queue.length > 0) {
      const currentNode = this.BFSQueue.queue[0];

      // if current node has a left child add it to the queue
      if (currentNode.leftNode) {
        this.BFSQueue.enqueue(currentNode.leftNode);
      }

      if (currentNode.rightNode) {
        this.BFSQueue.enqueue(currentNode.rightNode);
      }

      // remove current node from queue
      this.BFSQueue.dequeue();
    }
  }
}

const rootNode = new Node('rootNode');
const node2 = new Node('node2');
const node3 = new Node('node3');
const node4 = new Node('node4');
const node5 = new Node('node5');
const node6 = new Node('node6');
const node7 = new Node('node7');
const node8 = new Node('node8');

// create graph of nodes
rootNode.addLeftNode(node2);
rootNode.addRightNode(node3);

node2.addLeftNode(node4);
node2.addRightNode(node5);

node3.addLeftNode(node6);
node3.addRightNode(node7);

node4.addLeftNode(node8);

// Instantiate graph class
const graph1 = new Graph(rootNode);
// search for value
console.log(BFS.search('node2')); // returs 'Found node2'
// traverse graph
graph1.bfsTraverse();
