// pair sum
// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

const pairSum = (numbers, targetSum) => {
  const hashMap = {};

  for (const [index, num] of numbers.entries()) {
    const complement = targetSum - num;

    if (complement in hashMap) {
      return [hashMap[complement], index];
    }

    hashMap[num] = index;
  }
};

// n = length of array
// Time: O(n)
// Space: O(n)

console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
