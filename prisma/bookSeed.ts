import { Prisma, PrismaClient, Book } from "@prisma/client";

const prisma = new PrismaClient()
const books:Book[] = [
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf1",
        name: "book1",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf2",
        name: "book2",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf3",
        name: "book3",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf4",
        name: "book4",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf5",
        name: "book5",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf6",
        name: "book6",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
]
export const seedBooks = async () => {
    await prisma.book.createMany({
        data: books
    })
}