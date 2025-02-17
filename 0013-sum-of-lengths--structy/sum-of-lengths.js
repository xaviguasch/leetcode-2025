// sum of lengths
// Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.

// You must solve this recursively.

const sumOfLengths = (strings) => {
  if (strings.length === 0) {
    return 0;
  }
  return strings[0].length + sumOfLengths(strings.slice(1));
};

// Time: O(n^2)
// Space: O(n^2)

console.log(sumOfLengths(["goat", "cat", "purple"]));
