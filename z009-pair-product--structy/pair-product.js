// pair product
// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

const pairProduct = (numbers, targetProduct) => {
  const hashMap = {};

  for (const [index, num] of numbers.entries()) {
    const complement = targetProduct / num;

    if (complement in hashMap) {
      return [index, hashMap[complement]];
    }

    hashMap[num] = index;
  }
};

// Time: O(n)
// Space: O(n)

console.log(pairProduct([3, 2, 5, 4, 1], 8));
