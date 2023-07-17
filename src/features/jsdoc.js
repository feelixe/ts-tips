/**
 * If for whatever reason you don't want to use a .ts file, and there for
 * skip the transpilation step, you can still leverage the power of typescript
 * by adding //@ts-check to the top of the file and declare your types with
 * JSDoc instead.
 */

// @ts-check

/**
 * Returns the sum of an array of numbers
 * @param {number[]} numbers The numbers to sum up
 * @returns {number} the sum of numbers
 */
export function sum(numbers) {
  return numbers.reduce((s, n) => s + n, 0);
}
