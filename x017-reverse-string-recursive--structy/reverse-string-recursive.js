// reverse string recursive
// Write a function, reverseString, that takes in a string as an argument. The function should return the string with its characters in reverse order. You must do this recursively.

const reverseString = (s) => {
  // todo
  if (s.length === 0) {
    return "";
  }

  return s.slice(-1) + reverseString(s.slice(0, -1));
};

console.log(reverseString("hello")); // -> "olleh"

// Time: O(N^2)
// Space: O(N^2)
