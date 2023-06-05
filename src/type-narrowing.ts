// Define an interface for a successful result.
// In this case, loading is false, there is no error, and data can be any type.
interface SuccessResult {
  loading: false;
  error: null;
  data: any;
}

// Define an interface for an error result.
// In this case, loading is false, an error is present, and there is no data.
interface ErrorResult {
  loading: false;
  error: Error;
  data: null;
}

// Define an interface for a loading result.
// In this case, loading is true, there is no error, and there is no data.
interface LoadingResult {
  loading: true;
  error: null;
  data: null;
}

// Define a type that can be either a success, error, or loading result.
type Result = SuccessResult | ErrorResult | LoadingResult;

// Define a function that simulates getting data. For now, it just returns a loading result.
function getData(): Result {
  return {
    loading: true,
    error: null,
    data: null,
  };
}

// Call the getData function and store the result.
const result = getData();
//     ^?

// If there is an error or if the result is still loading, throw an error.
// Since execution will stop it's an error or loading, we know for sure that
// data will be defined after this if statement.
if (result.error != null || result.loading) {
  throw new Error('Loading or Error');
}

// Typescript can narrow down our result to a successful one.
result;
// ^?
