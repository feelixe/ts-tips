import consola from 'consola';
import ky, { type Options, type KyResponse } from 'ky';

// Some example decorators
function logRequest(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<
    (url: string, options?: Options) => Promise<KyResponse>
  >,
) {
  // We save the original value of our descriptor.
  const method = descriptor.value!;

  // Now we change the value of the descriptor
  descriptor.value = async function (url: string, options?: Options) {
    // We log the request and then call the original method.
    consola.info(`Request to ${url}`);
    const res = await method.apply(this, [url, options]);
    consola.success(`Response from (${res.statusText} ${res.status}) ${url}`);
    return res;
  };
}

function logExecutionTime(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
) {
  const method = descriptor.value!;

  descriptor.value = async function (...args: any[]) {
    const startedAt = performance.now();
    const res = await method.apply(this, args);
    const completedAt = performance.now();
    const duration = completedAt - startedAt;
    consola.info(`Method '${propertyName}' took ${Math.floor(duration)} ms`);
    return res;
  };
}

function cache(cacheTimeInMs: number) {
  let cachedValue: any;
  let cachedValueExpiresAt: number;
  return function cacheInner(
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
  ) {
    const method = descriptor.value!;
    descriptor.value = async function (...args: any[]) {
      if (
        cachedValue !== undefined &&
        new Date().valueOf() < cachedValueExpiresAt
      ) {
        consola.success('Cache hit');
        return cachedValue;
      }
      consola.warn('Cache miss');
      const res = await method.apply(this, args);
      cachedValue = res;
      cachedValueExpiresAt = new Date().valueOf() + cacheTimeInMs;
      return res;
    };
  };
}

// Applying the decorators
class Client {
  public token?: string;

  @logExecutionTime
  @logRequest
  async get(url: string, options?: Options) {
    return await ky(url, { method: 'get', ...options });
  }

  @logExecutionTime
  @logRequest
  async post(url: string, options?: Options) {
    return await ky(url, { method: 'post', ...options });
  }

  @cache(500)
  async getJobs() {
    return await this.get('https://axakon.se/career');
  }
}

const client = new Client();

await client.getJobs();
await client.getJobs();
await client.getJobs();
