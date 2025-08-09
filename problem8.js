/*Write a function that takes a number as an argument and returns its factorial.

A factorial is the product of an integer and all the integers below it. For example, the factorial of 4 (written as 4!) is 4 * 3 * 2 * 1 = 24. The factorial of 0 is defined as 1.

Examples:

factorial(4) should return 24.

factorial(0) should return 1.

factorial(1) should return 1. */

function getFactorialOf(num) {
  let factorial = 1;

  for (let i = num - 1; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
}

console.log(getFactorialOf(0));
