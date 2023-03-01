/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var twoSum = tryRequire('../problems/twoSum.js');
var longestPalindrome = tryRequire('../problems/longestPalindrome.js');
var palindromeNumber = tryRequire('../problems/palindromeNumber.js');
var romanToInteger = tryRequire('../problems/romanToInteger.js');
var longestCommonPrefix = tryRequire('../problems/longestCommonPrefix.js');
var isValid = tryRequire('../problems/isValid.js');
var containsDuplicate = tryRequire('../problems/containsDuplicate.js');
var countOddNumbers = tryRequire('../problems/countOddNumbers.js')
var fizzBuzz = tryRequire('../problems/fizzBuzz.js');
var validAnagram = tryRequire('../problems/validAnagram.js');
var lengthLastWord = tryRequire('../problems/lengthLastWord.js');
var reduceNumberOfSteps = tryRequire('../problems/reduceNumberOfSteps.js');
var runningSumArray = tryRequire('../problems/runningSumArray.js');
var removeVowelsString = tryRequire('../problems/removeVowelsString.js');
var arrayFormInteger = tryRequire('../problems/arrayFormInteger.js');
var findPivotIndex = tryRequire('../problems/findPivotIndex.js');
var plusOne = tryRequire('../problems/plusOne.js')

describe('twoSum()', function() {
  it('should return the indices of two numbers that add up to the target value', function() {
    assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
    assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
    assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
    assert.deepEqual(twoSum([0, 4, 3, 0], 0), [0, 3]);
  });

  it('should return an empty array if no two numbers add up to the target value', function() {
    assert.deepEqual(twoSum([1, 2, 3, 4], 9), []);
    assert.deepEqual(twoSum([5, 6, 7], 100), []);
  });
});

describe('longestPalindrome()', function() {
  it('should return the longest palindromic substring in the input string', function() {
    assert.equal(longestPalindrome('babad'), 'bab');
    assert.equal(longestPalindrome('cbbd'), 'bb');
    assert.equal(longestPalindrome('a'), 'a');
    assert.equal(longestPalindrome('ac'), 'a');
  });

  it('should handle empty strings', function() {
    assert.equal(longestPalindrome(''), '');
  });
});

describe('palindromeNumber()', function() {
  it('should return true if x is a palindrome', function() {
    assert.strictEqual(palindromeNumber(121), true);
    assert.strictEqual(palindromeNumber(11), true);
    assert.strictEqual(palindromeNumber(12321), true);
  });
  
  it('should return false if x is not a palindrome', function() {
    assert.strictEqual(palindromeNumber(-121), false);
    assert.strictEqual(palindromeNumber(10), false);
    assert.strictEqual(palindromeNumber(12345), false);
  });
});

describe('romanToInteger()', function() {
  it('should convert a valid roman numeral to an integer', function() {
    assert.equal(romanToInteger('III'), 3);
    assert.equal(romanToInteger('IV'), 4);
    assert.equal(romanToInteger('IX'), 9);
    assert.equal(romanToInteger('LVIII'), 58);
    assert.equal(romanToInteger('MCMXCIV'), 1994);
  });
});

describe('longestCommonPrefix()', function() {
  it('should find the longest common prefix string among an array of strings', function() {
    assert.strictEqual(longestCommonPrefix(["flower","flow","flight"]), "fl");
    assert.strictEqual(longestCommonPrefix(["dog","racecar","car"]), "");
    assert.strictEqual(longestCommonPrefix(["apple", "ape", "april"]), "ap");
    assert.strictEqual(longestCommonPrefix(["coding", "coder", "code"]), "cod");
    assert.strictEqual(longestCommonPrefix(["bake", "cake"]), "");
  });
  
  it('should return an empty string if there is no common prefix', function() {
    assert.strictEqual(longestCommonPrefix(["dog","racecar","car"]), "");
  });
});
describe('isValid()', function() {
  it('should return true if input string is valid', function() {
    assert.strictEqual(isValid('()'), true);
    assert.strictEqual(isValid('()[]{}'), true);
    assert.strictEqual(isValid('{[()]}'), true);
    assert.strictEqual(isValid('(){}[({})]'), true);
  });

  it('should return false if input string is invalid', function() {
    assert.strictEqual(isValid('(]'), false);
    assert.strictEqual(isValid('([)]'), false);
    assert.strictEqual(isValid('{'), false);
    assert.strictEqual(isValid(')'), false);
  });

  it('should return true for an empty string', function() {
    assert.strictEqual(isValid(''), true);
  });
});

describe('containsDuplicate()', function() {
  it('should return true if any value appears at least twice in the array', function() {
    assert.strictEqual(containsDuplicate([1, 2, 3, 1]), true);
    assert.strictEqual(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
  });
  
  it('should return false if every element is distinct', function() {
    assert.strictEqual(containsDuplicate([1, 2, 3, 4]), false);
    assert.strictEqual(containsDuplicate([0, -1, 10]), false);
  });
});

describe('countOddNumbers', function() {
  it('returns the count of odd numbers between low and high (inclusive)', () => {
    assert.strictEqual(countOddNumbers(3, 7), 3);
    assert.strictEqual(countOddNumbers(8, 10), 1);
    assert.strictEqual(countOddNumbers(0, 0), 0);
    assert.strictEqual(countOddNumbers(2, 2), 0);
    assert.strictEqual(countOddNumbers(100, 101), 1);
  });

  it('returns 0 when low is greater than high', () => {
    assert.strictEqual(countOddNumbers(7, 3), 0);
  });

  it('returns 1 when low and high are the same odd number', () => {
    assert.strictEqual(countOddNumbers(5, 5), 1);
  });

  it('returns 0 when low and high are the same even number', () => {
    assert.strictEqual(countOddNumbers(6, 6), 0);
  });
});

describe('validAnagram()', function() {
  it('should return true if t is an anagram of s', function() {
    assert.strictEqual(validAnagram('anagram', 'nagaram'), true);
    assert.strictEqual(validAnagram('cinema', 'iceman'), true);
  });

  it('should return false if t is not an anagram of s', function() {
    assert.strictEqual(validAnagram('rat', 'car'), false);
    assert.strictEqual(validAnagram('hello', 'world'), false);
  });

  it('should handle empty strings', function() {
    assert.strictEqual(validAnagram('', ''), true);
    assert.strictEqual(validAnagram('abc', ''), false);
    assert.strictEqual(validAnagram('', 'def'), false);
  });
});


describe('fizzBuzz', function() {
  it('returns an array of strings', () => {
    const result = fizzBuzz(3);
    assert.strictEqual(Array.isArray(result), true);
    assert.strictEqual(typeof result[0], 'string');
  });

  it('returns the expected output for n = 3', () => {
    const expected = ['1', '2', 'Fizz'];
    assert.deepStrictEqual(fizzBuzz(3), expected);
  });

  it('returns the expected output for n = 5', () => {
    const expected = ['1', '2', 'Fizz', '4', 'Buzz'];
    assert.deepStrictEqual(fizzBuzz(5), expected);
  });

  it('returns the expected output for n = 15', () => {
    const expected = ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz'];
    assert.deepStrictEqual(fizzBuzz(15), expected);
  });
});

describe('lengthLastWord', () => {
  it('should return the length of the last word in the string', () => {
    assert.strictEqual(lengthLastWord('Hello World'), 5);
    assert.strictEqual(lengthLastWord('   fly me   to   the moon  '), 4);
    assert.strictEqual(lengthLastWord('luffy is still joyboy'), 6);
  });

  it('should return 0 for empty string or string with no words', () => {
    assert.strictEqual(lengthLastWord(''), 0);
    assert.strictEqual(lengthLastWord('    '), 0);
  });
});

describe('reduceNumberOfSteps', function() {
  it('should return the correct number of steps to reduce the input number to zero', function() {
    assert.equal(reduceNumberOfSteps(14), 6);
    assert.equal(reduceNumberOfSteps(15), 7);
    assert.equal(reduceNumberOfSteps(1), 1);
    assert.equal(reduceNumberOfSteps(123), 12);
  });

  it('should return 0 for input 0', function() {
    assert.equal(reduceNumberOfSteps(0), 0);
  });
});

describe('runningSumArray', function() {
  it('should return the correct running sum for the input array', function() {
    assert.deepEqual(runningSumArray([1,2,3,4]), [1, 3, 6, 10]);
    assert.deepEqual(runningSumArray([5,6,7]), [5, 11, 18]);
    assert.deepEqual(runningSumArray([0,0,0,0]), [0, 0, 0, 0]);
    assert.deepEqual(runningSumArray([1]), [1]);
    assert.deepEqual(runningSumArray([-1, 0, 1]), [-1, -1, 0]);
  });

  it('should return an empty array for an empty input array', function() {
    assert.deepEqual(runningSumArray([]), []);
  });
});

describe('removeVowelsString', function() {
  it('should remove all vowels from the input string', function() {
    assert.equal(removeVowelsString("leetcodeisacommunityforcoders"), "ltcdscmmntyfrcdrs");
    assert.equal(removeVowelsString("aeiou"), "");
    assert.equal(removeVowelsString("hello world"), "hll wrld");
  });

  it('should return the input string when it contains no vowels', function() {
    assert.equal(removeVowelsString("xyz"), "xyz");
  });
});

describe('arrayFormInteger', function() {
  it('should return the correct array form of the integer num + k', function() {
    assert.deepEqual(arrayFormInteger([1,2,0,0], 34), [1,2,3,4]);
    assert.deepEqual(arrayFormInteger([9,9,9,9], 1), [1,0,0,0,0]);
    assert.deepEqual(arrayFormInteger([0], 123), [1,2,3]);
    assert.deepEqual(arrayFormInteger([2,4,6], 0), [2,4,6]);
  });

  it('should return the input array if k is 0', function() {
    assert.deepEqual(arrayFormInteger([1,2,3], 0), [1,2,3]);
  });

  it('should return the array form of k if num is an empty array', function() {
    assert.deepEqual(arrayFormInteger([], 123), [1,2,3]);
  });
});

describe('findPivotIndex', function() {
  it('should return the leftmost pivot index in the array', function() {
    assert.equal(findPivotIndex([1,7,3,6,5,6]), 3);
    assert.equal(findPivotIndex([1,2,3,4,5,6]), -1);
    assert.equal(findPivotIndex([2,1,-1]), 0);
    assert.equal(findPivotIndex([1,2,3]), -1);
    assert.equal(findPivotIndex([0,0,0,0,0]), 0);
  });

  it('should return -1 when the input array is empty', function() {
    assert.equal(findPivotIndex([]), -1);
  });

  it('should return 0 when the input array has length 1', function() {
    assert.equal(findPivotIndex([1]), 0);
  });
});


describe('plusOne', function() {
  it('should increment the large integer by one', function() {
    assert.deepStrictEqual(plusOne([1, 2, 3]), [1, 2, 4]);
    assert.deepStrictEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
    assert.deepStrictEqual(plusOne([9]), [1, 0]);
  });
});