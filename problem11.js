/*Write a function that takes an array of numbers and returns a new array containing only the unique numbers from the original array.

Examples:

getUniqueNumbers([1, 2, 3, 2, 1, 4]) should return [1, 2, 3, 4].

getUniqueNumbers([5, 5, 5, 5]) should return [5].

getUniqueNumbers([10, 20, 30]) should return [10, 20, 30].*/

function getUniqueNumbers(arr) {
  let uniqueNumbers = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (!uniqueNumbers.includes(arr[i])) {
      uniqueNumbers.push(arr[i]);
    }
  }

  return uniqueNumbers;
}

console.log(getUniqueNumbers([1, 2, 3, 2, 4, 3, 5]));
