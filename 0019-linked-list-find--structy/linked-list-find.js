// linked list find
// Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// iterative version
// const linkedListFind = (head, target) => {
//   let current = head;

//   while (current !== null) {
//     if (current.val === target) {
//       return true;
//     }

//     current = current.next;
//   }

//   return false;
// };

// n = number of nodes
// Time: O(n)
// Space: O(1)

// recursion version
const linkedListFind = (head, target) => {
  if (head === null) {
    return false;
  }

  if (head.val === target) {
    return true;
  }

  return linkedListFind(head.next, target);
};

// n = number of nodes
// Time: O(n)
// Space: O(n)

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(linkedListFind(a, "c"));
