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
    this.size++;
    return this.size;
  }
  pop() {
    if (!this.first) return undefined;
    var currentFirst = this.first;
    if (this.size === 0) this.last = null;
    this.first = currentFirst.next;
    this.size--;
    return currentFirst;
  }
}

var stack = new Stack();
