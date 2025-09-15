/**
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * @param {number} num - input number
 * @return {boolean}
 */

function isPalindrome(num) {
  // Negative number cannot be palindrome
  if (num < 0) return false;

  let reverseNumber = 0;
  let numCopy = num;

  while (num > 0) {
    let lastDigit = num % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return reverseNumber === numCopy;
}

const result = isPalindrome(0);
console.log(result);
