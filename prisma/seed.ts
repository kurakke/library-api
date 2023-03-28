import { Prisma, PrismaClient } from "@prisma/client";
import { seedBooks } from "./bookSeed";

const prisma = new PrismaClient();

const seed = async () => {
    await seedBooks();
}

seed()  
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });