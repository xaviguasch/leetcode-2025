// linked list values
// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

// Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive! -AZ

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
  // ITERATIVE SOLUTION

  //   let current = head;
  //   const resultArr = [];

  //   while (current !== null) {
  //     resultArr.push(current.val);

  //     current = current.next;
  //   }

  //   return resultArr;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)

  // RECURSIVE SOLUTION
  const valuesArr = [];

  fillValues(head, valuesArr);

  return valuesArr;

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const fillValues = (head, valuesArr) => {
  if (head === null) {
    return;
  }

  valuesArr.push(head.val);

  fillValues(head.next, valuesArr);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListValues(a));
// -> [ 'a', 'b', 'c', 'd' ]
