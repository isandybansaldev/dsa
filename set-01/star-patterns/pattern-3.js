/**
 * Prints a number triangle pattern to the console.
 * Each row contains the row number repeated as many times as the row number itself.
 *
 * Example for n = 5:
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * 5 5 5 5 5
 *
 * @param {number} n - The number of rows in the number triangle.
 * @returns {void} This function does not return a value.
 */
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + (i + 1) + " ";
    }
    console.log(row);
  }
}

pattern(5);
