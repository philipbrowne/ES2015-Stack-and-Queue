class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.last = newNode;
    } else {
      newNode.next = this.first;
    }
    this.first = newNode;
    return ++this.size;
  }
  pop() {
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

var stack = new Stack();
