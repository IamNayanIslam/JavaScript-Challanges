/**
 * Generate the first n Fibonacci numbers modulo m.
 *
 * Given two numbers n and m:
 * - Generate the first n Fibonacci numbers starting from 0.
 * - For each Fibonacci number, compute the remainder when divided by m (modulo operation).
 * - Return an array of these modulo results.
 *
 * Input:
 *   n (number) - How many Fibonacci numbers to generate.
 *   m (number) - The modulo divisor.
 *
 * Output:
 *   Array of length n containing Fibonacci numbers modulo m.
 *
 * Example:
 *   Input: n = 10, m = 3
 *   Output: [0, 1, 1, 2, 0, 2, 2, 1, 0, 1]
 *
 * Note:
 *   The Fibonacci sequence starts with 0 and 1.
 */

function fibonacciModulo(n, m) {
  let fibStarter = [0, 1];

  let fibModulerM = [];

  for (let i = 2; i < n; i++) {
    fibStarter.push(fibStarter[i - 1] + fibStarter[i - 2]);
  }

  for (let i = 0; i < fibStarter.length; i++) {
    fibModulerM.push(fibStarter[i] % m);
  }

  return fibModulerM;
}

console.log(fibonacciModulo(10, 3));
