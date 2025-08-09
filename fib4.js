/**
 * Calculate the sum of the first N Fibonacci numbers.
 *
 * The Fibonacci sequence starts with 0 and 1, and each subsequent
 * number is the sum of the previous two numbers.
 *
 * Input: n (number) - The count of Fibonacci numbers to sum (starting from 0)
 * Output: number - The sum of the first n Fibonacci numbers
 *
 * Example:
 *   Input: 5
 *   Output: 7
 *   Explanation: The first 5 Fibonacci numbers are 0, 1, 1, 2, 3
 *                Their sum is 0 + 1 + 1 + 2 + 3 = 7
 *
 * Note: If n is 0, the sum should be 0.
 */

function sumFibonacci(n) {
  if (n < 0 || n !== Math.floor(n)) {
    return "Please insert a non-negative integer.";
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  let sum = 1; //total of first 2 numbers
  let a = 0;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let next = a + b;
    sum += next;
    a = b;
    b = next;
  }

  /*let fibStarter = [0, 1];

  for (let i = 2; i < n; i++) {
    fibStarter.push(fibStarter[i - 1] + fibStarter[i - 2]);
  }

  for (let i = 0; i < fibStarter.length; i++) {
    sum += fibStarter[i];
  }*/

  return sum;
}

let num = 7;
let negativeNum = -3;
let notInteger = 7.5;

console.log(sumFibonacci(num));
console.log(sumFibonacci(negativeNum));
console.log(sumFibonacci(notInteger));
