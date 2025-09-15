/**
 * Prints a square pattern of asterisks (`*`) to the console.
 * The pattern consists of `n` rows and `n` columns.
 *
 * Example for n = 4:
 * * * *
 * * * *
 * * * *
 * * * *
 *
 * @param {number} n - The number of rows and columns in the square pattern.
 * @returns {void} This function does not return anything.
 */
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*" + " ";
    }
    console.log(row);
  }
}

pattern(5);
