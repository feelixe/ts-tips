/**
 * T3-env is a great package for using type safe environment variables.
 * You specify you're schema with Zod and it handles the rest for you.
 * It's recommended to validate the schema in your build step.
 * How you do this will vary from framework to framework.
 */

import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    OPEN_AI_API_KEY: z.string().min(1),
  },
  runtimeEnv: process.env,
});

const db = process.env.DATABASE_URL;

const typeSafeDb = env.DATABASE_URL;
