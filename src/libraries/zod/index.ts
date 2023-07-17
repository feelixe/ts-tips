import { z } from 'zod';

/**
 * Zod is a runtime TypeScript validation library. It's used for building
 * strongly typed validation schemas. It validates data at runtime and gives
 * type information based on the validation schema.
 */

// Define a Zod schema to validate the structure of person objects.
const personSchema = z
  .object({
    // Name field must be a string.
    name: z.string().trim(),
    // Role can be one from a union of literals
    role: z.union([
      z.literal('front-end'),
      z.literal('back-end'),
      z.literal('full-stack'),
    ]),
    // YearsExperience field must be a number and at least 0.
    yearsExperience: z.number().min(0),
    // Email field must be a string and a valid email format.
    email: z.string().email().toLowerCase().endsWith('@axakon.se'),
  })
  .transform((person) => ({ ...person, senior: person.yearsExperience >= 5 }));

// Define an example user input object to demonstrate the validation process.
const userInput = {
  name: ' Sheep',
  role: 'front-end',
  yearsExperience: 7,
  email: 'Sheep@Axakon.se',
};

// Validate the user input using the Zod schema.
// The validation will fail because the age is less than the minimum age defined in the schema.
// 'person' is typed as Person
const person = personSchema.parse(userInput);

// To access the inferred type of a zod schema use z.infer
type Person = z.infer<typeof personSchema>;

console.log(person);
