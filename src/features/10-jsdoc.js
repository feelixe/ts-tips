// @ts-check

// If, for any reason, you'd rather not use a .ts file, you don't have to miss out on TypeScript.
// You can simply add //@ts-check at the top of your file and declare your types using JSDoc.

/**
 * An array of numbers
 * @typedef {Array<number>} Numbers
 */

/**
 * Sums up an array of numbers.
 * @param {Numbers} numbers The numbers to sum up
 * @returns {number} sum of the numbers
 * @example
 * const arraySum = sum([1, 2, 3]); // arraySum = 6
 */
export function sum(numbers) {
  return numbers.reduce((s, n) => s + n, 0);
}

// Some extra tags that are useful.

/**
 * Sums up an array of numbers.
 * @param {Numbers} numbers The numbers to sum up
 * @returns {number} the sum of numbers
 * @deprecated use {@link sum} instead.
 * @example
 * const sum = sumNumbers(1, 2, 3); // sum = 6
 */
export function sumNumbers(...numbers) {
  return numbers.reduce((s, n) => s + n, 0);
}

sumNumbers(1, 2, 3);

/**
 * @todo Write the documentation.
 * @todo Implement this function.
 */
export function coerceSum() {}

/**
 * Check out the {@link https://example.com documentation} for more information.
 */
export function max() {}
