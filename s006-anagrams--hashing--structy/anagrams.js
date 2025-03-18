// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
  const hashMap = {};

  for (let char of s1) {
    if (!(char in hashMap)) {
      hashMap[char] = 0;
    }

    hashMap[char] += 1;
  }

  for (let char of s2) {
    if (char in hashMap) {
      hashMap[char] -= 1;
    } else {
      return false;
    }
  }

  for (let char in hashMap) {
    if (hashMap[char] !== 0) {
      return false;
    }
  }

  return true;
};

console.log(anagrams("restful", "fluster")); // -> true

//   n = length of string 1
//   m = length of string 2
//   Time: O(n + m) , it's O(n) simplified
//   Space: O(n + m) , it's O(n) simplified
