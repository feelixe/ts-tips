import { z } from 'zod';

/**
 * Zod is a runtime TypeScript validation library. It's used for building
 * strongly typed validation schemas. It validates data at runtime and gives
 * type information based on the validation schema.
 */

// Define a Zod schema to validate the structure of person objects.
const personSchema = z.object({
  // Name field must be a string.
  name: z.string(),
  // Age field must be a number and at least 18.
  age: z.number().min(18),
  // Email field must be a string and a valid email format.
  email: z.preprocess((rawData) => rawData, z.string().email()),
});

// Define an example user input object to demonstrate the validation process.
const userInput = {
  name: 'Sheep',
  age: 16,
  email: 'sheep@axakon.se',
};

// Validate the user input using the Zod schema.
// The validation will fail because the age is less than the minimum age defined in the schema.
// 'person' is typed as Person
const person = personSchema.parse(userInput);
//     ^?

// To access the inferred type of a zod schema use z.infer
type Person = z.infer<typeof personSchema>;
//     ^?
