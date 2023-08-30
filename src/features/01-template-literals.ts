// Template literals in TypeScript allow for type-safe string interpolation.
// This powerful feature lets you embed types within string patterns.

type Protocol = 'http' | 'https';

type Url = `${Protocol}://${string}`;

// Initialize a constant 'url' of type 'Url' with a 'https' URL as its value.
const url: Url = 'http://axakon.se';

// Another example with union types.

type Sites = 'axakon.se' | 'bybrick.se';

export type SubscriptionLabel = `${Protocol}://${Sites}`;
