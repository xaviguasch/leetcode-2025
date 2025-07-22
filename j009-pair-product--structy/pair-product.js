// pair product
// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

const pairProduct = (numbers, targetProduct) => {
  // todo
  const hashMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    const productNum = targetProduct / number;

    if (productNum in hashMap) {
      return [hashMap[productNum], i];
    }

    hashMap[number] = i;
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8));

// Time: O(N)
// Space: O(N)
