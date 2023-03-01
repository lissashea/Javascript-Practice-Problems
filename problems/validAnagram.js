/*******************************************************************************
 Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

*******************************************************************************/
var validAnagram = function(s, t) {
  let string1 = {}

  for (let i = 0; i < s.length; i ++) {
   let letter1 = s[i]
   if (string1[letter1]) {
    string1[letter1] += 1;
  } else {
    string1[letter1] = 1;
  }
  }

  for (let j = 0; j < t.length; j++) {
    let letter2 = t[j];
    if (string1[letter2]) {
      string1[letter2] -= 1;
    } else {
      return false;
    }
  }


  for (let count of Object.values(string1)) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
};



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = validAnagram;























// var validAnagram = function(s, t) {
//   if (s.length !== t.length) {
//       return false
//   }
//   let sMap = {}
//   for (char of s) {
//       if (sMap[char]) {
//           sMap[char] ++
//       } else {
//           sMap[char] = 1
//       }
//   }

//   for (char of t) {
//       if (!sMap[char]) {
//           return false
//       } else {
//           sMap[char] --
//       }
//   }
//   return true
// };