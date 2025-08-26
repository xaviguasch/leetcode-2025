// fizz buzz
// Write a function, fizzBuzz, that takes in a number n as an argument. The function should return an array containing numbers from 1 to n, replacing certain numbers according to the following rules:

// if the number is divisible by 3, make the element "fizz"
// if the number is divisible by 5, make the element "buzz"
// if the number is divisible by 3 and 5, make the element "fizzbuzz"

const fizzBuzz = (n) => {
  const finalArr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      finalArr.push("fizzbuzz");
    } else if (i % 3 === 0) {
      finalArr.push("fizz");
    } else if (i % 5 === 0) {
      finalArr.push("buzz");
    } else {
      finalArr.push(i);
    }
  }

  return finalArr;
};

// Time: O(N)
// Space: O(N)

console.log(fizzBuzz(11)); // -> [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11]
