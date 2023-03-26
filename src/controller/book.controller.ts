import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const  get = async () => {
    const books = await prisma.book.findMany();
    return books;
}