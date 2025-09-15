/**
 * Prints a reverse number triangle pattern to the console.
 * Starts from 1 to `n` in the first row, then decreases by one number each row.
 *
 * Example for n = 5:
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 *
 * @param {number} n - The number of elements in the first row (and total rows).
 * @returns {void} This function does not return a value.
 */
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + (j + 1) + " ";
    }
    console.log(row);
  }
}

pattern(5);
