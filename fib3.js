/**
 * Check if a given number is a Fibonacci number.
 *
 * A number `num` is a Fibonacci number if and only if
 * one or both of (5 * num^2 + 4) or (5 * num^2 - 4) is a perfect square.
 *
 * Input: num (number) - The number to check
 * Output: boolean - true if num is a Fibonacci number, false otherwise
 *
 * Example:
 *   Input: 21
 *   Output: true
 *
 * Note: You need to write a helper function to check if a number is a perfect square.
 */

function isFibonacci(num) {
  if (num < 0 || num !== Math.floor(num)) {
    return false;
  }

  let isFibNum1 = num * num * 5 + 4;
  let isFibNum1Sqrt = Math.sqrt(isFibNum1);
  let isFibNum2 = num * num * 5 - 4;
  let isFibNum2Sqrt = Math.sqrt(isFibNum2);

  if (
    isFibNum1Sqrt === Math.floor(isFibNum1Sqrt) ||
    isFibNum2Sqrt === Math.floor(isFibNum2Sqrt)
  ) {
    return true;
  }

  return false;
}

console.log(isFibonacci(13));
console.log(isFibonacci(7));
console.log(isFibonacci(8));
console.log(isFibonacci(5));
