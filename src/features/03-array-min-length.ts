// Define a Country interface, which consists of a single 'name' property of string type.
interface Country {
  name: string;
}

// Define a Countries type, which is a tuple that must have at least two Country elements and could have more.
// Here, [Country, Country, ...Country[]] indicates that it should start with two Country elements,
// and the rest (...Country[]) could be any number of Country elements, including zero.
type Countries = [Country, Country, ...Country[]];

// This will pass as we have provided at least two Country elements, which complies with the 'Countries' type.
const countries: Countries = [{ name: 'Sweden' }, { name: 'Finland' }];
