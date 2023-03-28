import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const books: Prisma.BookCreateInput[] = [
    {
        name: "book1",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        name: "book2",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        name: "book3",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        name: "book4",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        name: "book5",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        name: "book6",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
]
export const seedBooks = () => {
    const bookData = books.map(async (item) => {
        await prisma.book.create({
            data: item
        })
    })
}