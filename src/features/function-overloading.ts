import https from "https"

/**
 * Function overloading in TypeScript is a feature that allows you to have multiple
 * function type definitions for a function based on the number and types of the arguments.
 * In other words, you can have the same function behave differently based on different
 * input parameters.
 */

// Define the function's implementation. In function overloading,
// the core implementation function must compatible with all the
// declared overload variants.
function makeRequest(host: string, path: string): any;
function makeRequest(request: https.RequestOptions): any;
function makeRequest(a: string | https.RequestOptions, b?: string): any {
  let request: https.RequestOptions;
  if(typeof a === "string") {
    request = { host: a, path: b }
  } else {
    request = a;
  }
  return https.request(request)
}

// Checking the types, we get different implementations depending on the arguments we pass.

// Call the function with a single argument
makeRequest("axakon.se", "/jobs"); // Outputs: "John Doe"
// ^?

// Call the function with two arguments
makeRequest({ path: "/jobs", host: "axakon.se", defaultPort: 443 }); // Outputs: "John Doe"
// ^?
