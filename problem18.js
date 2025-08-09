/*
  Given an array of non-negative integers representing an elevation map,
  where the width of each bar is 1, compute how much water it can trap after raining.

  Example:
  Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  Output: 6
*/

/*

function trap(heights) {
  let totalTrapWater = 0;
  if (heights.length < 3) {
    return 0;
  }

  for (let i = 0; i < heights.length; i++) {
    let maxHeightLeft = 0;

    for (let j = i; j >= 0; j--) {
      maxHeightLeft = Math.max(maxHeightLeft, heights[j]);
    }

    let maxHeightRight = 0;

    for (let j = i; j < heights.length; j++) {
      maxHeightRight = Math.max(maxHeightRight, heights[j]);
    }

    let waterLevel = Math.min(maxHeightLeft, maxHeightRight);

    let trappedWater = waterLevel - heights[i];
    if (trappedWater > 0) {
      totalTrapWater += trappedWater;
    }
  }

  return totalTrapWater;
}

// Example usage and verification
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Expected output: 6*/
