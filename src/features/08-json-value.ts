/**
 * The `JSONValue` type represents any valid JSON data,
 * including primitive types, arrays, and nested objects.
 */

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [x: string]: JSONValue }
  | JSONValue[];
