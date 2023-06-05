// Define a unique symbol 'brand' for creating branded generic types.
declare const brand: unique symbol;

// The 'Brand' type combines a base type 'T' with a unique 'brand' symbol to create distinct types.
type Brand<T, TBrand extends string> = T & {
  [brand]: TBrand;
};

// Define a sample 'Person' interface.
interface Person {
  name: string;
}

// A function that accepts 'Person' as an argument.
const acceptsPerson = (person: Person) => {
  return person;
};

// Declare a object that satisfies 'Person'type with an additional field 'password'.
const personOne = {
  name: 'Raccoon',
  password: 's3cureP4ssw0rd',
};

// 'acceptsPerson' accepts 'personOne', even though it has additional fields.
// In certain cases, this might be unwanted.
acceptsPerson(personOne);

// Define a 'BrandedPerson' type using the 'Brand' generic.
type BrandedPerson = Brand<Person, 'person'>;

// A new function that strictly accepts 'BrandedPerson' type.
const acceptsBrandedPerson = (person: BrandedPerson) => {
  return person;
};

// 'acceptsBrandedPerson' rejects 'personOne' as it's not a 'BrandedPerson'.
acceptsBrandedPerson(personOne);

// Create a 'BrandedPerson' object named 'brandedPerson'.
// We should be careful where'
const brandedPerson = {
  name: 'Snake',
} as BrandedPerson;

// 'acceptsBrandedPerson' now accepts 'brandedPerson' as it's of type 'BrandedPerson'.
acceptsBrandedPerson(brandedPerson);
