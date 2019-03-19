class Queue {
  constructor() {
    // initializes an empty array as the queue
    this.queue = [];
  }

  /**
   * pushes data to the queue
   * @param {} data
   */
  enqueue(data) {
    this.queue.push(data);
  }

  /**
   * removes first element from the queue
   */
  dequeue() {
    this.queue.shift();
  }

  get size() {
    return this.queue.length;
  }
}

module.exports = Queue;
