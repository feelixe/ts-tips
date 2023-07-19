import consola from 'consola';
import ky, { type KyResponse } from 'ky';
import { type JSONValue } from './8-json-value.js';

// Example type representing a http requests.
interface HttpRequest {
  url: string;
  body?: JSONValue;
}

// Create a descriptor type for a method that accepts a request.
type RequestMethod = TypedPropertyDescriptor<
  (request: HttpRequest, ...args: any[]) => Promise<KyResponse>
>;

// Then we create our decorator.
function logRequest(
  target: any,
  propertyName: string,
  descriptor: RequestMethod,
) {
  // We save the original value of our descriptor.
  const method = descriptor.value;
  if (method === undefined) {
    throw new Error('method is not defined');
  }

  // Now we change the value of the descriptor
  descriptor.value = async function (req: HttpRequest, ...args: any[]) {
    // We log the request and then call the original method.
    consola.info(`Request to ${req.url}`);
    const res = await method.apply(this, [req, ...args]);
    consola.info(`Response from (${res.statusText} ${res.status}) ${req.url}`);
    return res;
  };
}

// Applying the decorators
class Client {
  @logRequest
  async get(req: HttpRequest) {
    return await ky(req.url, { method: 'get' });
  }

  @logRequest
  async post(req: HttpRequest) {
    return await ky(req.url, { method: 'post' });
  }
}

const client = new Client();

await client.get({
  url: 'https://axakon.se',
});
