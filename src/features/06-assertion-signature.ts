// Create examples types
interface Session {
  id: string;
}

function getSession(): Session | null {
  return {
    id: '1b3d5f',
  };
}

// This function throws an error if the argument does not contain
// field 'startDate' which implies it's of type Employee.
function assertSession(session: Session | null): asserts session is Session {
  if (session === null || session === undefined) {
    throw new Error('Session is required');
  }
}

// Example type
const maybeSession = getSession();

assertSession(maybeSession);

// Check type after assertion, it's of type Employee
maybeSession;
