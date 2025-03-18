// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
  const splittedStr = s.split("");
  const hashMap = {};

  let highestCount = 0;
  let highestChar = "";

  for (char of splittedStr) {
    if (!(char in hashMap)) {
      hashMap[char] = 0;
    }

    hashMap[char] += 1;
  }

  for (char in hashMap) {
    if (hashMap[char] > highestCount) {
      highestCount = hashMap[char];
      highestChar = char;
    }
  }

  return highestChar;
};

// n = length of string
// Time: O(n)
// Space: O(n)

console.log(mostFrequentChar("bookeeper")); // -> 'e'
