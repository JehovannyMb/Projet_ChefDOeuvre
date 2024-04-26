import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... c'est ici où sont écrites les requêtes des différents clients

/**
 * La formule ci-dessous permet de créer un utilisateur qui insère un ouvrage intitulé 'Droit constitutionnel congolais' dans notre table user et l'on peut voir tous le tableau des utilisateurs en tapant npx prisma studio
 */

  const user = await prisma.user.create({
    data: {
      name: 'Jehovanny',
      email: 'mbengajehovanny2@gmail.com',
      posts: {
        create: {
            title: 'Droit constitutionnel congolais',
        }
      }
    },
  })
  console.log(user)


  const deleteUser = await prisma.user.delete({
    where: {
      email: 'mbengajehovanny2@gmail.com',
    },
  })
  
  /**
   * La formule ci-dessous permet de voir dans notre terminal tous les utilisateurs en tapant le code npx ts-node scripts.ts 
   */
  const users = await prisma.user.findMany({
    include: {
        posts: true,
    }}
  )
  console.log(users)
  
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