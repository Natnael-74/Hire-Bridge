import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const newUser = await prisma.user.findMany({
    where: {
      email: "john@example.com",
      password: "password",
    },
  });

  await prisma.user.deleteMany({
    where: {
      name: {
        endsWith: "@example.com",
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });

export default prisma;
