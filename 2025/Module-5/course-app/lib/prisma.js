import { PrismaClient } from '@prisma/client';
 
const globalPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    globalPrisma.prisma = prisma;
}

export default prisma;