import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.projects.createMany({
    data: [
      { name: 'ScooperHero', userID: 1 },
      { name: 'Dragon Battle', userID: 2 },
    ],
  })
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
}).finally(() => prisma.$disconnect())