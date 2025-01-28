// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

const pairSum = (numbers, targetSum) => {
  // todo

  const hashMap = {};

  for (let [idx, num] of numbers.entries()) {
    const complementary = targetSum - num;

    if (complementary in hashMap) {
      return [idx, hashMap[complementary]];
    }

    hashMap[num] = idx;
  }
};

console.log(pairSum([3, 2, 5, 4, 1], 8));
console.log(pairSum([4, 7, 9, 2, 5, 1], 5));
