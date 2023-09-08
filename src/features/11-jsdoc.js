// @ts-check

// If, for any reason, you'd rather not use a .ts file, you don't have to miss out on TypeScript.
// You can simply add //@ts-check at the top of your file and declare your types using JSDoc.

/**
 * An array of numbers
 * @typedef {Array<number>} Numbers
 */

/**
 * Calculates the mean of an array of numbers.
 * @param {Numbers} numbers
 * @returns {number}
 * @example
 * mean([1, 2, 3, 4, 5]); // returns 3
 */
export function mean(numbers) {
  const sum = numbers.reduce((sum, value) => sum + value, 0);
  const count = numbers.length;
  return sum / count;
}

mean([1, 2, 3, 4]);

/**
 * Calculates the average of all numbers passed of numbers.
 * @deprecated Use {@link mean} instead
 * @param {Numbers} numbers
 * @returns {number} Returns the average of argument `numbers`
 * @example
 * average(1, 2, 3, 4, 5); // Returns 3
 */
export function average(...numbers) {
  const sum = numbers.reduce((sum, value) => sum + value, 0);
  const count = numbers.length;
  return sum / count;
}

average(1, 2, 3, 4);
