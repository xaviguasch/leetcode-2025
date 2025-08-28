// sum of lengths
// Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.

// You must solve this recursively.

const sumOfLengths = (strings) => {
  // todo
  if (strings.length === 0) {
    return 0;
  }

  return strings[0].length + sumOfLengths(strings.slice(1));
};

console.log(sumOfLengths(["goat", "cat", "purple"]));

// Time: O(N^2)
// Space: O(N^2)
