/**
 * Prints a right-angled triangle pattern of asterisks (`*`) to the console.
 * The pattern has `n` rows, and each row contains one more asterisk than the previous.
 *
 * Example for n = 5:
 * *
 * * *
 * * * *
 * * * * *
 *
 * @param {number} n - The number of rows in the triangle pattern.
 * @returns {void} This function does not return a value.
 */
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + "*" + " ";
    }
    console.log(row);
  }
}

pattern(5);
