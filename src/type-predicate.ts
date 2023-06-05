/**
 * TypeScript's Type Predicates are a special kind of return value for a function that
 * allows you to specify a type-checking condition. This can be especially useful for
 * user-defined type guards, which are functions that perform runtime checks that
 * guarantee a certain type.
 */

// This function checks if 'arg' is a string and narrows down its type accordingly.
// The return type is set as 'arg is string', a type predicate, informing TypeScript that
// 'arg' is a string if the function returns true.
const isString = (arg: any): arg is string => {
  return typeof arg === 'string';
};

let stringOrNumber: string | number = '';

// To avoid TypeScript inferring this as an 'Employee', use the following condition.
if (Math.random() > 0.5) {
  stringOrNumber = 1;
}

// Here, 'stringOrNumber' can be either string or number.
stringOrNumber;
// ^?

if (isString(stringOrNumber)) {
  // In this scope, TypeScript infers 'stringOrNumber' as a string due to the type guard.
  stringOrNumber;
  // ^?
}

// Use-case example:
// Type predicates are very useful when filtering an array.

// In this example, we filter without a type predicate.
const elements = [1, 2, 3, null];

// Typescript can't not infer that our array not only contains non-null values.
const filteredElements = elements.filter((el) => el !== null);
//     ^?

// Let's create a generic type predicate to filter out null values.
function isNotNull<T>(arg: T): arg is Exclude<T, null> {
  return arg !== null;
}

// Filtering with the type predicate, typescript can infer the result is an array of numbers.
const predicateFilteredElements = elements.filter(isNotNull);
//     ^?
