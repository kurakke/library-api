import { PrismaClient } from "@prisma/client";
import { seedBooks } from "./bookSeed";
import { seedBookTag } from "./bookTagSeed";
import { seedTags } from "./tagSeed";

const prisma = new PrismaClient();

const seed = async () => {
    await seedBooks();
    await seedTags();
    // await seedBookTag();
}

seed()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });