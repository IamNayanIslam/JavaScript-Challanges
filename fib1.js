/*
Problem: Generate the first N Fibonacci numbers.
-----------------------------------------------
The Fibonacci sequence is a series of numbers where:
- The first two numbers are 0 and 1.
- Every next number is the sum of the previous two.

Example:
Input: n = 6
Output: 0, 1, 1, 2, 3, 5

Steps:
1. Take an input `n` (number of terms to generate).
2. Start with an array containing [0, 1].
3. Use a loop to generate the next terms until you have `n` numbers.
4. Print the sequence.

*/

function generateFibonacci(n) {
  // Your code here
  let fibStarter = [0, 1];
  let fibNum = fibStarter;
  for (let i = 2; i < n; i++) {
    fibStarter.push(fibStarter[i - 1] + fibStarter[i - 2]);
  }

  return fibNum;
}

// Example usage:
let n = 10;
console.log(generateFibonacci(n)); // Expected: [0, 1, 1, 2, 3, 5]
