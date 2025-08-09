//Write a function that accepts a number as input and returns an array containing all odd integers from 1 up to the input number.

function oddNumbers(num) {
  let oddNums = [];
  for (let i = 0; i <= num; i++) {
    if (i % 2 != 0) {
      oddNums.push(i);
    }
  }

  return oddNums;
}

console.log(oddNumbers(9));
