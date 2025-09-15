/**
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 *
 * @param {number} num - input number
 * @return {number} reverse integer
 */
function reverInteger(num) {
  let rev = 0;
  let numCopy = num;
  num = Math.abs(num);
  while (num > 0) {
    // Last digit of a number
    let lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    // Removing last digit
    num = Math.floor(num / 10);
  }

  if (numCopy < 0) {
    rev = -rev;
  }

  let limit = Math.pow(2, 31);
  // check for 32 bit integer
  if (rev < -limit || rev > limit) {
    return 0;
  }

  return rev;
}

let result = reverInteger(-341);
console.log(result);
