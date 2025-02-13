// compress
// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

const compress = (s) => {
  let i = 0;
  let j = 0;

  let result = [];

  while (j <= s.length) {
    if (s[i] === s[j]) {
      j++;
    } else {
      const count = j - i;

      if (count !== 1) {
        result.push(count);
      }
      result.push(s[i]);

      i = j;
      j++;
    }
  }

  return result.join("");
};

// TIME: O(N)
// SPACE: O(N)

console.log(compress("ccaaatsss"));
