// Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. All elements will be integers. Solve this recursively.

const sumNumbersRecursive = (numbers) => {
  // TODO
  let sum = 0;

  if (numbers.length === 0) {
    return 0;
  }

  return numbers[0] + sumNumbersRecursive(numbers.slice(1));
};

// Time: O(n^2)
// Space: O(n^2)

console.log(sumNumbersRecursive([5, 2, 9, 10]));
