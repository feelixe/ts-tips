import consola from "consola"

// A type representing a http request.
type Request = {
  url: string;
  method: "GET" | "POST"
}

// Create a descriptor type for a method that accepts a request.
type RequestMethod = TypedPropertyDescriptor<(request: Request) => void>

// Then we create our decorator.
function log(target: any, propertyName: string, descriptor: RequestMethod) {
  // We save the orignal value of our descriptor.
  let method = descriptor.value!;

  // Now we change the behaviour of the descriptor 
  descriptor.value = function (req: Request) {
    // We log the request and then call the orignal method.
    consola.info(`${req.method} request to ${req.url}`)
    return method.apply(this, [req]);
  };
}


// Applying the decorators
class Client {
  @log
  makeRequest(req: Request) {
    console.log(`request to ${req.url}`);
  }
  
}

const client = new Client();
client.makeRequest({ url: "https://axakon.se", method: "GET" });
