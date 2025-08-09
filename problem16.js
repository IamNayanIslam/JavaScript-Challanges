/*
Write a function that takes an array of numbers and returns the first "peak" element it finds. A peak element is an element that is strictly greater than its neighbors (the element to its left and the element to its right).

You can assume the array will contain at least three elements.

Examples:

findPeak([1, 2, 3, 2, 1]) should return 3.

findPeak([5, 1, 2, 3, 4]) should return 5. (It's a peak because its only neighbor, 1, is smaller).

findPeak([1, 2, 8, 3, 5]) should return 8.

findPeak([1, 2, 3, 4, 5]) should return null (or a similar indicator that no peak was found).

*/

function findPeak(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    let currentElement = myArray[i];
    let leftNeighbor = myArray[i - 1];
    let rightNeighbor = myArray[i + 1];

    if (
      (i === 0 && currentElement > rightNeighbor) ||
      (i === myArray.length - 1 && currentElement > leftNeighbor) ||
      (currentElement > leftNeighbor && currentElement > rightNeighbor)
    ) {
      return currentElement;
    }
  }

  return null;
}

// --- Test Cases ---

// Case 1: The peak is in the middle of the array
let testArray1 = [1, 2, 3, 2, 1];
console.log(`[1, 2, 3, 2, 1] -> Expected: 3, Got: ${findPeak(testArray1)}`);

// Case 2: The peak is the first element
let testArray2 = [5, 1, 2, 3, 4];
console.log(`[5, 1, 2, 3, 4] -> Expected: 5, Got: ${findPeak(testArray2)}`);

// Case 3: The peak is the last element
let testArray3 = [1, 2, 3, 4, 5];
console.log(`[1, 2, 3, 4, 5] -> Expected: 5, Got: ${findPeak(testArray3)}`);

// Case 4: No peak exists (monotonically increasing)
let testArray4 = [1, 2, 3, 4, 5, 6];
console.log(`[1, 2, 3, 4, 5, 6] -> Expected: 6, Got: ${findPeak(testArray4)}`);

// Case 5: The array has two peaks, should return the first one
let testArray5 = [10, 2, 7, 5, 12, 1];
console.log(
  `[10, 2, 7, 5, 12, 1] -> Expected: 10, Got: ${findPeak(testArray5)}`
);

// Case 6: No peak due to an element being equal to its neighbor
let testArray6 = [1, 5, 5, 3];
console.log(`[1, 5, 5, 3] -> Expected: null, Got: ${findPeak(testArray6)}`);

// Case 7: A single-element array (edge case)
let testArray7 = [5];
console.log(`[5] -> Expected: 5, Got: ${findPeak(testArray7)}`);

// Case 8: A two-element array (edge case)
let testArray8 = [1, 2];
console.log(`[1, 2] -> Expected: 2, Got: ${findPeak(testArray8)}`);

// Case 9: A complex peak scenario
let testArray9 = [1, 2, 3, 4, 3, 2, 1];
console.log(
  `[1, 2, 3, 4, 3, 2, 1] -> Expected: 4, Got: ${findPeak(testArray9)}`
);
