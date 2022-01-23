// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.sA = new Stack();
    this.sB = new Stack();
  }
  add(record) {
    this.sA.push(record);
  }

  remove() {
    //pass all to B
    while (this.sA.peek()) {
      this.sB.push(this.sA.pop());
    }
    const removed = this.sB.pop();

    while (this.sB.peek()) {
      this.sA.push(this.sB.pop());
    }
    return removed;
  }
  peek() {
    return this.sA.data[0];
  }
}

module.exports = Queue;
