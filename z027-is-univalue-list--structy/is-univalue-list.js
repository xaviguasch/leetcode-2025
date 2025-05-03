// is univalue list
// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const isUnivalueList = (head, prevVal = null) => {
  // ITERATIVE
  //   const firstVal = head.val;
  //   let current = head;

  //   while (current !== null) {
  //     if (current.val !== head.val) {
  //       return false;
  //     }

  //     current = current.next;
  //   }

  //   return true;

  // Time: O(N)
  // Space: O(1)

  // RECURSIVE
  if (head === null) return true;
  if (prevVal === null || prevVal === head.val) {
    return isUnivalueList(head.next, head.val);
  } else {
    return false;
  }

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

console.log(isUnivalueList(a)); // true
