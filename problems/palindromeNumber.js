// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise. 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

var palindromeNumber = function(x) {
  if (x < 0) {
    return false
  }

  let original = x
  let reverse = 0
  
  while (x > 0) {
    lastDigit = x % 10
    reverse = reverse * 10 + lastDigit
    x = Math.floor(x / 10)
  }
  return original === reverse
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
  module.exports = palindromeNumber;




















  // var palindromeNumber = function(x) {
  //   if (x < 0) {
  //       return false
  //   }
  //   let original = x
  //   let reverse = 0
  
  //   while (0 < x) {
  //       let lastDigit = x % 10
  //       reverse = reverse * 10 + lastDigit
  //       x = Math.floor(x / 10)
  //   }
  //   return original === reverse
  // };