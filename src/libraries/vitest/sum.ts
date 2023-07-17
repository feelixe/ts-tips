import z from 'zod';

const parametersSchema = z.array(z.number()).min(1);

export default function sum(...args: z.infer<typeof parametersSchema>) {
  const parsedArguments = parametersSchema.parse(args);
  return parsedArguments.reduce((s, el) => s + el, 0);
}
