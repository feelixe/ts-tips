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
  let cachedValueExpiresAt: number = 0;
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
      consola.fail('Cache miss');
      const res = await method.apply(this, args);
      cachedValue = res;
      cachedValueExpiresAt = new Date().valueOf() + cacheTimeInMs;
      return res;
    };
  };
}

function retry(numberOfRetries: number) {
  return function retryInner(
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
  ) {
    const method = descriptor.value!;
    descriptor.value = async function (...args: any[]) {
      for (let retryCount = 1; retryCount <= numberOfRetries; retryCount++) {
        try {
          const res = await method.apply(this, args);
          return res;
        } catch (e) {
          consola.warn(`Retrying ${propertyName}`);
          if (retryCount === numberOfRetries) {
            throw e;
          }
        }
      }
    };
  };
}

// Applying the decorators
class Client {
  @logRequest
  async get(url: string, options?: Options) {
    return await ky(url, { method: 'get', ...options });
  }

  @cache(60000)
  @retry(3)
  async getJobs() {
    return await this.get('https://axakon.se/career');
  }
}

const client = new Client();

await client.getJobs();
await client.getJobs();
