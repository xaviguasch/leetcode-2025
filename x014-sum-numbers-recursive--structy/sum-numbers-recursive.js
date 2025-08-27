// sum numbers recursive
// Watch the Approach video first!

// Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. All elements will be integers. Solve this recursively.

const sumNumbersRecursive = (numbers) => {
  // todo
  if (numbers.length === 0) {
    return 0;
  }

  return numbers[0] + sumNumbersRecursive(numbers.slice(1));
};

console.log(sumNumbersRecursive([5, 2, 9, 10]));
// -> 26

// Time: O(N^2)
// Space: O(N^2)
