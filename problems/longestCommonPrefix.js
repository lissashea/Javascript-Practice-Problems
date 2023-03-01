/*******************************************************************************
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*******************************************************************************/
var longestCommonPrefix = function(arr) {
  let str = ""
  let pre = arr[0]
  let i = 1
  while (i < arr.length) {
    if(!arr[i].startsWith(pre)) {
      pre = pre.slice(0,-1)
    } else {
      i++
    }
  }
return pre
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestCommonPrefix;







// var longestCommonPrefix = function(arr) {
//   let pre = arr[0]
//   let i = 1

//   while (i < arr.length) {
//       if(!arr[i].startsWith(pre)) {
//           pre = pre.slice(0,-1)
//       } else {
//           i++
//       }
//   }
//   return pre
// };
