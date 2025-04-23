// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
  // todo
  const hashMap = {};

  let mostFreqCharacter = null;
  let numMostFreqChar = 0;

  for (const char of s) {
    if (!(char in hashMap)) {
      hashMap[char] = 0;
    }
    hashMap[char] += 1;
  }

  for (const char of s) {
    if (hashMap[char] > numMostFreqChar) {
      mostFreqCharacter = char;
      numMostFreqChar = hashMap[char];
    }
  }

  return mostFreqCharacter;
};

// Time: O(n)
// Space: O(n)

console.log(mostFrequentChar("bookeeper"));
