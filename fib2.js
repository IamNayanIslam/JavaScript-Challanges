/*
Problem:
Find the N-th Fibonacci number.

The Fibonacci sequence starts with 0 and 1. Each next number is the sum of the previous two.
Example sequence: 0, 1, 1, 2, 3, 5, 8, 13, ...

Example:
Input: n = 7
Output: 13
Explanation: The 7th Fibonacci number (starting from index 0) is 13.
*/

function findNthFibonacci(n) {
  let fibArr = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }

  let fibNthNum = fibArr[n];

  return fibNthNum;
}

// Example usage:
let n = 7;
console.log(findNthFibonacci(n)); // Expected output: 13
