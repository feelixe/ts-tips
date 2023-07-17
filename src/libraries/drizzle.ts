/**
 * Drizzle is a great alternative to Prisma, it's has several benefits.
 * - No code generation.
 * - Runs on the Edge.
 * - Better performance
 */
import { drizzle } from 'drizzle-orm/node-postgres';
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { type InferModel } from 'drizzle-orm';
import { Pool } from 'pg';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  role: text('role', { enum: ['user', 'admin'] })
    .default('user')
    .notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type User = InferModel<typeof users>;

const pool = new Pool({
  connectionString: 'postgres://user:password@host:port/db',
});

const db = drizzle(pool);

await db.insert(users).values({ fullName: 'Felix', role: 'user' });
