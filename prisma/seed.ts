import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.task.createMany({
    data: [
      { title: "Estudar Prisma" },
      { title: "Criar API Node" },
      { title: "Aprender TypeScript" },
      { title: "Fazer deploy" },
      { title: "Estudar SQL" },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e); 
    await prisma.$disconnect();
    process.exit(1);
  });