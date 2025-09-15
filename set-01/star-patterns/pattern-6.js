/**
 * Prints a binary triangle pattern to the console.
 * Each row starts with 1 and alternates between 1 and 0.
 * The number of elements in each row equals the row number.
 *
 * Example for n = 6:
 * 1
 * 1 0
 * 1 0 1
 * 1 0 1 0
 * 1 0 1 0 1
 * 1 0 1 0 1 0
 *
 * @param {number} n - The number of rows in the binary triangle.
 * @returns {void} This function does not return a value.
 */
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let bit = 1;
    for (j = 0; j < i + 1; j++) {
      row = row + bit + " ";
      bit = Number(!bit);
    }
    console.log(row);
  }
}

pattern(6);
