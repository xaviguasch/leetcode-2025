class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, index) => {
  let current = head;
  let currentIdx = 0;

  while (current !== null) {
    if (currentIdx === index) {
      return current.val;
    }

    current = current.next;
    currentIdx += 1;
  }

  return null;
};

// n = number of nodes
// Time: O(n)
// Space: O(1)

// RECURSION VERSION
// const getNodeValue = (head, index) => {};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(getNodeValue(a, 2));
