// sum list
// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sumList = (head) => {
  // ITERATIVE
  // let current = head
  // let totalSum = 0

  // while (current !== null) {
  //   totalSum += current.val

  //   current = current.next
  // }

  // return totalSum

  // n = number of nodes
  // Time: O(n)
  // Space: O(1)

  // RECURSIVE

  if (head === null) return 0;

  let totalSum = 0;

  return head.val + sumList(head.next);

  // n = number of nodes
  // Time: O(n)
  // Space: O(n)
};

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

console.log(sumList(a)); // 19
