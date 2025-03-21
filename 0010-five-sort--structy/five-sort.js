// five sort
// Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

const fiveSort = (nums) => {
  // todo
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      const tempI = nums[i];
      const tempJ = nums[j];

      nums[i] = tempJ;
      nums[j] = tempI;

      i++;
    } else {
      i++;
    }
  }

  return nums;
};

// n = array size
// Time: O(n)
// Space: O(1)

console.log(fiveSort([12, 5, 1, 5, 12, 7]));
