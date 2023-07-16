/**
 * Prisma and Drizzle are amazing ORMs for interfacing with your database in a typesafe manner.
 */
import { drizzle } from 'drizzle-orm/node-postgres';
import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';
import { Pool } from 'pg';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
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

db.insert(users).values({ fullName: "Felix"})