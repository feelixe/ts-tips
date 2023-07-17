/**
 * Prisma is an ORM with type safety.
 * It has an amazing developer experience.
 *
 * 1. pnpm install -D prisma
 * 2. pnpm exec prisma init --datasource-provider sqlite
 * 3. Create schema in schema.prisma
 * 4. pnpm exec prisma migrate dev --name init
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const person = await prisma.person.create({
  data: { name: 'felix', role: 'admin' },
});

console.log(person);
