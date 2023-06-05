/**
 * Function overloading in TypeScript is a feature that allows you to have multiple
 * function type definitions for a function based on the number and types of the arguments.
 * In other words, you can have the same function behave differently based on different
 * input parameters.
 */

// Define the function's implementation. In function overloading,
// the core implementation function must accommodate and be
// compatible with all declared overload variants.
function getFullName(fullName: string): string;
function getFullName(firstName: string, lastName: string): string;
function getFullName(a: string, b?: string): string {
  if (typeof b === 'string') {
    `${a} ${b}`;
  }
  return a;
}

// Checking the types, we get different implementations depending on the arguments we pass.

// Call the function with a single argument
getFullName('John Doe'); // Outputs: "John Doe"
// ^?

// Call the function with two arguments
getFullName('John', 'Doe'); // Outputs: "John Doe"
// ^?
