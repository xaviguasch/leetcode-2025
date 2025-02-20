// longest streak
// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ITERATIVE SOLUTION
const longestStreak = (head) => {
  // todo
  if (head === null) {
    return 0;
  }

  let current = head;
  let maxStreak = 0;
  let currentStreak = 0;
  let currentValStreak = head.val;

  while (current !== null) {
    if (current.val !== currentValStreak) {
      currentValStreak = current.val;
      currentStreak = 1;
    } else {
      currentStreak += 1;
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
    }

    current = current.next;
  }

  return maxStreak;
};

// n = number of nodes
// Time: O(n)
// Space: O(1)

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(longestStreak(a));
