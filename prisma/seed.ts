import { PrismaClient } from "@prisma/client";
import { seedBooks } from "./seeds/bookSeed";
import { seedBookTag } from "./seeds/bookTagSeed";
import { seedTags } from "./seeds/tagSeed";

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