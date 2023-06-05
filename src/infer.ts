type VehicleKind = 'car' | 'bike';

interface Vehicle<TKind extends VehicleKind> {
  kind: TKind;
}

// An example function that returns function.
function createVehicle<T extends VehicleKind>(kind: T) {
  const vehicle: Vehicle<T> = {
    kind,
  };
  return vehicle;
}

// Let's call the function and create a vehicle.
const greeting = createVehicle('car');
//     ^?

// Let's say we want a that the is the inner value of the Vehicle, i.e. "car".
// We create a generic type that accepts a Vehicle and returns the inner value.
type InferVehicleKind<T extends Vehicle<any>> = T extends Vehicle<infer V>
  ? V
  : never;

type Kind = InferVehicleKind<typeof greeting>;
//    ^?

// Built-in types
// There are many helpful types that use infer, like ReturnType and Awaited.
const promise = Promise.resolve('hello');
//    ^?

type PromiseValue = Awaited<typeof promise>;
//    ^?

const myFunction = () => 'hello';

type MyFunctionReturnType = ReturnType<typeof myFunction>;
//    ^?
