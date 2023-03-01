// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
//*******************************************************************************/
function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char in pairs) {
      const popped = stack.pop()
      if (popped !== pairs[char]) {
        return false
      }
    } else {
      stack.push(char)
    }
  
  }
  return stack.length === 0
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isValid;























// function isValid(s) {
//   const stack = [];
//   const pairs = { ')': '(', '}': '{', ']': '[' };
    
//     for(let i = 0; i < s.length; i++) {
//         const char = s[i]
//         if (char in pairs) {
//         const popped = stack.pop()
//             if(popped !== pairs[char]) {
//                 return false
//             }
//         } else {
//             stack.push(char)
//         }
//     }
//     return stack.length === 0
// }