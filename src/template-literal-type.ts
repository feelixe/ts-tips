// Define a type 'Url' which represents a string template type.
// It restricts string to follow the pattern of either a 'https' or 'http' URL.
type Protocol = 'http' | 'https';

type Url = `${Protocol}://${string}`;

// Initialize a constant 'url' of type 'Url' with a 'https' URL as its value.
const url: Url = 'https://axakon.se';