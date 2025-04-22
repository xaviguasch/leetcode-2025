// fizz buzz
// Write a function, fizzBuzz, that takes in a number n as an argument. The function should return an array containing numbers from 1 to n, replacing certain numbers according to the following rules:

// if the number is divisible by 3, make the element "fizz"
// if the number is divisible by 5, make the element "buzz"
// if the number is divisible by 3 and 5, make the element "fizzbuzz"

const fizzBuzz = (n) => {
  // todo
  const resultArr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push("fizzbuzz");
    } else if (i % 3 === 0) {
      resultArr.push("fizz");
    } else if (i % 5 === 0) {
      resultArr.push("buzz");
    } else {
      resultArr.push(i);
    }
  }

  return resultArr;
};

// n = length of array
// Time: O(n)
// Space: O(n)

console.log(fizzBuzz(16));
