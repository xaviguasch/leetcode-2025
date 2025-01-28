// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
  // todo
  const countHashMap = {};
  let mostFreqChar;
  let numOfMostFreqChar = 0;

  for (let char of s) {
    if (!(char in countHashMap)) {
      countHashMap[char] = 0;
    }
    countHashMap[char] += 1;
  }

  for (let char of s) {
    if (countHashMap[char] > numOfMostFreqChar) {
      mostFreqChar = char;
      numOfMostFreqChar = countHashMap[char];
    }
  }

  return mostFreqChar;
};

// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('david'); // -> 'd'
// mostFrequentChar('abby'); // -> 'b'
