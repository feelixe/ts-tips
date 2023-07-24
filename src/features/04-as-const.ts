// Here we define a constant 'greeting' which is an object with a property 'message'
// containing the string 'hello'.
// TypeScript infers the type of 'greeting' as { message: string }, meaning
// we could change the value of 'message' later, but only to another string.
const message = { text: 'hello' };

// In this case, we define 'immutableGreeting' in a similar way, but use 'as const' to
// create a read-only (immutable) object.
// TypeScript now infers the type of 'immutableGreeting' as { readonly message: "hello" }.
// This means we cannot change the value of 'message' nor can we change its type.
// It will always be the string 'hello'.
const immutableMessage = { text: 'hello' } as const;
