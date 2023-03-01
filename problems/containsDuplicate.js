// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:

// const countOddNumbers = require("./countOddNumbers");

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
/***************************************/

var containsDuplicate = function(nums) {

  let num = nums.sort()
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== num[i + 1]) {
      return false
    }
    return true
  }
  
};







/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = containsDuplicate;







// let set = new Set
// for (let num of nums) {
//   if (set.has(num)) {
//     return true
//   }
//     set.add(num)
// }
// return false




