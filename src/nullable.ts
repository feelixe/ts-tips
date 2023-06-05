// Define a generic type named Nullable. This is a mapped type where every property of the input type T is made nullable.
// In other words, every property value can be its original type or null.
// This is distinct from the Partial type provided by TypeScript, which makes each property optional, but not explicitly nullable.
type Nullable<T extends Record<string, any>> = {
  [P in keyof T]: T[P] | null;
};

// Declare an example interface for an Animal that includes a name and age.
interface Animal {
  name: string;
  age: number;
}

// Apply our Nullable mapped type to the Animal interface. The result is a new type, NullableAnimal,
// where each property of Animal is now also nullable.
// Therefore, both name and age properties can hold their respective types or null.
type NullableAnimal = Nullable<Animal>;
