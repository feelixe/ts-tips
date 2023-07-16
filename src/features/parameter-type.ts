/**
 * Rather than creating complicated Parameter types directly in our function, we can break
 * it into smaller pieces and improve readability. This also give us the option to export the
 * parameters type.
 */

// Define the 'Client' interface with a 'name' property of type string
interface Client {
  version: string;
  name: string;
}

// Define the 'Options' interface with 'url' of type string and 'enabled' of type boolean
interface Options {
  url: string;
  enabled: boolean;
  path: string;
}

// Define the 'InitializeParameters' type as a tuple containing 'Client' and optionally 'Options'
type InitializeParameters = [client: Client, options?: Options];

// Define the 'Initialize' function that uses rest parameters (...args)
// and destructuring to handle an array of InitializeParameters type.
export function initialize(...args: InitializeParameters) {
  const [client, options] = args;
  console.log(client, options);
}

// Versus declaring in function.
export function secondInitialize(
  client: { name: string; version: string },
  options?: { url: string; enabled: true; path: string },
) {
  console.log(client, options);
}
