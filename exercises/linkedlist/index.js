// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    let last;

    while (node) {
      last = node;
      node = node.next;
    }
    return last;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let node = this.head;

    if (!node) {
      return;
    }
    if (!node.next) {
      this.head = null;
      return;
    }

    let last;

    while (node.next) {
      last = node;
      node = node.next;
    }
    last.next = null;
    return;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(idx) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === idx) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(idx) {
    let node = this.head;
    // list is empty or out of bounds
    if (!node || this.size() <= idx) {
      return null;
    }
    // index is 0
    if (idx === 0) {
      this.head = node.next;
    }
    //index is in the middle
    const previous = this.getAt(idx - 1);
    if (previous) {
      previous.next = this.getAt(idx).next;
    }
    return;
  }

  insertAt(data, idx) {
    let node = this.head;
    let size = this.size();

    // idx is 0
    if (idx === 0) {
      return this.insertFirst(data);
    }

    //list is empty and index not 0
    if (!node && idx !== 0) {
      return null;
    }

    // if idx is out of bounds
    if (idx > size) {
      return this.insertLast(data);
    }

    //insert in the middle
    let previous = this.getAt(idx - 1);
    let newNode = new Node(data, previous.next);
    previous.next = newNode;
  }
  forEach(fn) {
    for (let i = 0; i < this.size(); i++) {
      fn(this.getAt(i));
    }
  }
}

module.exports = { Node, LinkedList };
