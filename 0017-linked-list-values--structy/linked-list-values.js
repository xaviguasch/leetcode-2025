// linked list values
// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

// Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive! -AZ

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const linkedListValues = (head) => {
//   let current = head;

//   const resultArr = [];

//   while (current !== null) {
//     resultArr.push(current.val);

//     current = current.next;
//   }

//   return resultArr;
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

// RECURSION

const linkedListValues = (head) => {
  const valuesArr = [];

  fillValues(head, valuesArr);

  return valuesArr;
};

const fillValues = (head, valuesArr) => {
  if (head === null) {
    return;
  }

  valuesArr.push(head.val);

  fillValues(head.next, valuesArr);
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

console.log(linkedListValues(a));
