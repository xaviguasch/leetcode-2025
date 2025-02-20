// is univalue list
// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ITERATIVE SOLUTION
// const isUnivalueList = (head) => {
//   // todo
//   let headVal = head.val;
//   let current = head;

//   while (current !== null) {
//     if (current.val !== headVal) {
//       return false;
//     }
//     current = current.next;
//   }
//   return true;
// };

// n = number of nodes
// Time: O(n)
// Space: O(1)

// RECURSIVE SOLUTION
const isUnivalueList = (head, prevVal = null) => {
  // todo
  if (head === null) {
    return true;
  }

  if (prevVal !== null && head.val !== prevVal) {
    return false;
  }

  return isUnivalueList(head.next, head.val);
};

//   n = number of nodes
// Time: O(n)
// Space: O(n)

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

console.log(isUnivalueList(a));
