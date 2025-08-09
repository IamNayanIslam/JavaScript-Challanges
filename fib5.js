/**
 * Print all even Fibonacci numbers up to a given limit.
 *
 * The Fibonacci sequence starts with 0 and 1, and each subsequent
 * number is the sum of the previous two numbers.
 *
 * Input: limit (number) - The upper bound; print all even Fibonacci numbers <= limit
 * Output: Array of even Fibonacci numbers up to the limit
 *
 * Example:
 *   Input: 50
 *   Output: [0, 2, 8, 34]
 *
 * Note: 0 is considered an even Fibonacci number and should be included.
 */

/*
things to do

generate the fibonacci series first up to the limit

then filter the numbers that are even.
*/

function evenFibonacciUpTo(limit) {
  // Implement the logic to generate even Fibonacci numbers up to the limit
  // and return them in an array

  let fibStarter = [0, 1];
  let evenFibonacci = [];

  while (true) {
    let next =
      fibStarter[fibStarter.length - 1] + fibStarter[fibStarter.length - 2];
    if (next > limit) break; //stops here if the next number is larger than the limit and it will not be pushed into the fibStarter array
    fibStarter.push(next);
  }

  //check if the elements is even or not if yes then push it into the evenFibonacci array

  for (let i = 0; i < fibStarter.length; i++) {
    if (fibStarter[i] % 2 === 0) {
      evenFibonacci.push(fibStarter[i]);
    }
  }

  return evenFibonacci;
}

let limit = 50;

console.log(evenFibonacciUpTo(limit));
console.log(evenFibonacciUpTo(65));
console.log(evenFibonacciUpTo(150));
console.log(evenFibonacciUpTo(780));
console.log(evenFibonacciUpTo(3000));
