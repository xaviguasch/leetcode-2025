// create linked list
// Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//ITERATIVE SOLUTION
// const createLinkedList = (values) => {
//   const dummyHead = new Node(null);
//   let tail = dummyHead;

//   for (let val of values) {
//     tail.next = new Node(val);
//     tail = tail.next;
//   }

//   return dummyHead.next;
// };

// n = length of values
// Time: O(n)
// Space: O(n)

// RECURSIVE SOLUTION
const createLinkedList = (values, i = 0) => {
  if (i === values.length) return null;
  const head = new Node(values[i]);
  head.next = createLinkedList(values, i + 1);
  return head;
};

//   n = length of values
// Time: O(n)
// Space: O(n)

console.log(createLinkedList(["h", "e", "y"]));
