// A interfacing matching some config.
interface StyleConfig {
  colors?: Record<string, string>;
  fontFamily?: string;
}

// We create a config with type of StyleConfig
const configOne: StyleConfig = {
  colors: {
    white: '#fff',
    black: '#0000',
  },
  fontFamily: 'Poppins',
};

configOne.colors;

// Instead of assigning the type, we can make sure our variable satisfies that type without
// having a strict type.
const configTwo = {
  colors: {
    white: '#fff',
    black: '#0000',
  },
  fontFamily: 'Poppins',
} satisfies StyleConfig;

configTwo.colors.black;

// We can even use `as const` from the previous example to get exact values in our type.
const configThree = {
  colors: {
    white: '#fff',
    black: '#0000',
  },
  fontFamily: 'Poppins',
} as const satisfies StyleConfig;

configThree.colors.black;
