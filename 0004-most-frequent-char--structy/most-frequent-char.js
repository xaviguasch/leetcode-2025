// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
  // todo
  let hashMap = {};

  let mostFreqChar = "";
  let biggestCount = -Infinity;

  for (char of s) {
    if (!hashMap[char]) {
      hashMap[char] = 0;
    }

    hashMap[char] += 1;
  }

  for (char of s) {
    if (hashMap[char] > biggestCount) {
      biggestCount = hashMap[char];
      mostFreqChar = char;
    }
  }

  return mostFreqChar;
};

// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('david'); // -> 'd'
// mostFrequentChar('abby'); // -> 'b'
