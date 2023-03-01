/*******************************************************************************
 Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*******************************************************************************/
var lengthLastWord = function(s) {

let words = s.trim().split(" ").at(-1).length
return words 
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = lengthLastWord;










// var lengthLastWord = function(s) {
//   let string = s.trim()
//   let words = string.split(' ')
//   let last = words[words.length - 1]
//   return last.length
// };
