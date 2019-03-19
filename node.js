class Node {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }

  addLeftNode(leftNode) {
    this.leftNode = leftNode;
  }

  addRightNode(rightNode) {
    this.rightNode = rightNode;
  }
}

module.exports = Node;
