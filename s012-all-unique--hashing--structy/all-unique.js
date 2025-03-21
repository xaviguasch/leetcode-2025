// all unique
// Write a function, allUnique, that takes in an array. The function should return a boolean indicating whether or not the array contains unique items.

const allUnique = (items) => {
  // todo
  //   const hashMap = {};

  //   for (const el of items) {
  //     if (!hashMap[el]) {
  //       hashMap[el] = 1;
  //     } else {
  //       return false;
  //     }
  //   }

  //   return true;

  const newSet = new Set(items);

  return newSet.size === items.length;
};

// n = array length
// Time: O(n)
// Space: O(n)

console.log(allUnique(["q", "r", "s", "a"])); // -> true
