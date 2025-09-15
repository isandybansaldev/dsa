/**
 * Prints a right-aligned triangle pattern of asterisks (`*`) to the console.
 * Each row contains increasing asterisks aligned to the right using spaces.
 *
 * Example for n = 5:
 *                 *
 *             *   *
 *         *   *   *
 *     *   *   *   *
 * *   *   *   *   *
 *
 * @param {number} n - The number of rows in the triangle pattern.
 * @returns {void} This function does not return a value.
 */
function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j < n - (i + 1); j++) {
      row = row + " ";
    }
    for (k = 0; k < i + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

/**
 * Prints a right-aligned triangle pattern of asterisks (`*`) to the console.
 * Each row contains increasing asterisks aligned to the right using spaces.
 *
 * Example for n = 5:
 *                 *
 *             *   *
 *         *   *   *
 *     *   *   *   *
 * *   *   *   *   *
 *
 * @param {number} n - The number of rows in the triangle pattern.
 * @returns {void} This function does not return a value.
 */
function patternAlternative(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j < n - (i + 1)) {
        row = row + " ";
      } else {
        row = row + "*";
      }
    }
    console.log(row);
  }
}

pattern(5);
patternAlternative(5);
