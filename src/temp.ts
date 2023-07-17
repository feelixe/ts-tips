import ky from 'ky';
import type { Options } from 'ky';
import { type z } from 'zod';

type KyParameters = Parameters<typeof ky>;

type OptionsWithSchema = Options & { schema?: z.ZodTypeAny };

type KyZodParameters = [url: KyParameters[0], options: OptionsWithSchema];

export default async function kyZod(...args: KyZodParameters) {
  const res = await ky(...args);
  const json = res.json();
  const data = args[1]?.schema != null ? args[1].schema.parse(json) : json;
  return {
    ...res,
    data,
  };
}
