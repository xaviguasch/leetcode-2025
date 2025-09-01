// linked list find
// Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFind = (head, target) => {
  // ITERATIVE
  let current = head;

  while (current !== null) {
    if (current.val === target) {
      return true;
    }

    current = current.next;
  }

  return false;

  // Time: O(N)
  // Space: O(1)
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "c")); // true
