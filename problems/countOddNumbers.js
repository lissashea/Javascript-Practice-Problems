// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].
/***************************************/

var countOddNumbers = function (low, high) {

  let count = 0
  let start = low
  let end = high

  while (start <= end) {
    if (start % 2 === 1) [
      count += 1
    ]

    start ++
    
  }

return count
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = countOddNumbers;
