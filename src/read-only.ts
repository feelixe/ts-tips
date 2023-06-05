// Create a generic Readonly type that accepts any object
// and makes all fields read-only.
type ReadOnly<T extends Record<string, any>> = {
  readonly [P in keyof T]: T[P];
};

// Example type
interface User {
  name: string;
  age: number;
}

// Create an instance of User wrapped in ReadOnly.
const john: ReadOnly<User> = {
  name: 'John',
  age: 30,
};

// This will cause an error since it's readonly.
john.age = 31;
