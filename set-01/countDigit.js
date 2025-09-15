/**
 * Counts the number of digits in a given integer.
 *
 * Handles negative numbers by taking the absolute value.
 * If the input is 0, returns 1 since 0 has one digit.
 *
 * @param {number} num - The integer whose digits are to be counted.
 * @returns {number} The count of digits in the integer.
 */
function countDigit(num) {
  let count = 0;

  // Convert negative number to positive to handle digit counting correctly
  num = Math.abs(num);

  // If number is 0, it has exactly one digit
  if (num === 0) return 1;

  // Count digits by dividing the number by 10 repeatedly until it becomes 0
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

const result = countDigit(-259);
console.log(result);
