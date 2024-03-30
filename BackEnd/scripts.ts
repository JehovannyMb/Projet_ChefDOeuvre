import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... c'est ici où sont écrites les requêtes des différents clients

  /**
   * La formule ci-dessous permet de voir dans notre terminal tous les utilisateurs en tapant le code npx ts-node scripts.ts
   * 
   * const users = await prisma.user.findMany()
  console.log(users)
   * 
   */
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })