// pair sum
// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

const pairSum = (numbers, targetSum) => {
  const hashMap = {};

  for (let [idx, num] of numbers.entries()) {
    const complement = targetSum - num;

    if (complement in hashMap) {
      return [hashMap[complement], idx];
    }

    hashMap[num] = idx;
  }
};

console.log(pairSum([9, 9], 18)); // -> [0, 2]

// n = length of string
// Time: O(n)
// Space: O(n)
