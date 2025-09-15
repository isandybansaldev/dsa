/**
 * Generates a triangle pattern of alternating 1s and 0s as a string.
 *
 * Example for n = 6:
 * 1
 * 0 1
 * 0 1 0
 * 1 0 1 0
 * 1 0 1 0 1
 * 0 1 0 1 0 1
 *
 * @param {number} n - The number of rows to generate.
 * @returns {void} This function does not return a value.
 */
function pattern(n) {
  let bit = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + bit + " ";
      bit = Number(!bit);
    }
    console.log(row);
  }
}

pattern(6);
