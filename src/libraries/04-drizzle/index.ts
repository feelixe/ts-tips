/**
 * Drizzle is a great alternative to Prisma, it's has several benefits.
 * This example does not include migrations which is an important step.
 * - Only uses javascript.
 * - No code generation.
 * - Runs on the Edge.
 * - Better performance, does not ship with a binary.
 */

import { drizzle } from 'drizzle-orm/node-postgres';
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { type InferModel } from 'drizzle-orm';
import { Pool } from 'pg';

// Create a model.
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  role: text('role', { enum: ['user', 'admin'] })
    .default('user')
    .notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// This is how we infer the type of a model.
export type User = InferModel<typeof users>;

// Create a postgres connection we can use.
const pool = new Pool({
  connectionString: 'postgres://user:password@host:port/db',
});

// Create drizzle database client.
const db = drizzle(pool);

// Now can safely insert and query our database.
await db.insert(users).values({ fullName: 'Felix', role: 'user' });
