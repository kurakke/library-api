import { Prisma, PrismaClient, Book } from "@prisma/client";

const prisma = new PrismaClient()
const books:Book[] = [
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf1",
        title: "book1",
        isbn: "jfjskdla",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf2",
        title: "book2",
        isbn: "fhdjsakl",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf3",
        title: "book3",
        isbn: "fhdjsakl",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf4",
        title: "book4",
        isbn: "fhdjsakl",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf5",
        title: "book5",
        isbn: "fhdjsakl",
        publication_year: 2022,
        owner: "kurakke",
        thumbnail_url: "url"
    },
    {
        id: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf6",
        title: "book6",
        isbn: "fhdjsakl",
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