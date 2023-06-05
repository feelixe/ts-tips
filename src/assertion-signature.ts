// Create examples types
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

// This types represents some data that might be either of out example types.
type UnknownEmployee = Employee | Admin;

// This function throws an error if the argument does not contain
// field 'startDate' which implies it's of type Employee.
function assertEmployee(type: UnknownEmployee): asserts type is Employee {
  if ('startDate' in type) return;
  throw new Error('Not an employee!');
}

// Example type, assume it can be of either type Employee or Admin
let unknownEmployee: UnknownEmployee = {
  name: 'Raccoon',
  startDate: new Date(),
};

// Ignore this, it's just to make typescript not infer it's an Employee.
if (Math.random() > 0.5) {
  unknownEmployee = {
    name: 'Snake',
    privileges: [],
  };
}

// Check type before assertion, it's of type UnknownEmployee
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
unknownEmployee;
//  ^?

assertEmployee(unknownEmployee);

// Check type after assertion, it's of type Employee
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
unknownEmployee;
//  ^?
