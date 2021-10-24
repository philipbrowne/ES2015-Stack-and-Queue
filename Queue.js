class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    var currentFirst = this.first;
    if (this.size === 1) {
      this.last = null;
      this.first = null;
    }
    this.first = this.first.next;
    this.size--;
    return currentFirst.value;
  }
}

var q = new Queue();
