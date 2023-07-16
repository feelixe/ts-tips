// Create examples types
interface Session {
  id: string;
}


// This function throws an error if the argument does not contain
// field 'startDate' which implies it's of type Employee.
function assertSession(session: Session | null): asserts session is Session {
  if (session === null || session === undefined) {
    throw new Error('Not an employee!');
  }
}

function getSession(): Session | null {
  return {
    id: '1b3d5f',
  }
}

// Example type
let maybeSession = getSession();

// Check type before assertion, it's of type UnknownEmployee
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
maybeSession;
//  ^?

assertSession(maybeSession);

// Check type after assertion, it's of type Employee
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
maybeSession;
//  ^?
