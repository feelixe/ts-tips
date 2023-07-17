import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const person = await prisma.person.create({
  data: { name: 'felix', role: 'admin' },
});

console.log(person);
