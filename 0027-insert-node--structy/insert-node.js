// insert node
// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ITERATIVE SOLUTION
const insertNode = (head, value, index) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  let current = head;
  let prev = null;
  count = 0;

  while (current !== null) {
    if (index - 1 === count) {
      const temp = current.next;
      current.next = new Node(value);
      current.next.next = temp;
    }

    count += 1;
    current = current.next;
  }

  return head;
};

// n = number of nodes
// Time: O(n)
// Space: O(1)

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(insertNode(a, "x", 2));

// a -> b -> x -> c -> d
