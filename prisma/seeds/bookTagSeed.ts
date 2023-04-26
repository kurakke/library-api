import { PrismaClient, BookTag } from "@prisma/client";

const prisma = new PrismaClient;

const bookTag: BookTag[] = [
    {
        id: "615d3bd2-4bbf-350e-1896-a8441b8d8b90",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf1",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd1",
    },
    {
        id: "615d3bd2-4bbf-350e-1896-a8441b8d8b91",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf2",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd2",
    },
    {
        id: "615d3bd2-4bbf-350e-1896-a8441b8d8b92",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf3",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd3",
    },
    {
        id: "615d3bd2-4bbf-350e-1896-a8441b8d8b93",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf4",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd4",
    },
    {
        id: "615d3bd2-4bbf-350e-1896-a8441b8d8b94",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf5",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd5",
    },
    {
        id: "615d3bd2-4bbf-350e-1896-a8441b8d8b95",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf5",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd3",
    },
    {
        id: "615d3bd2-4bbf-350e-1896-a8441b8d8b96",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf5",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd51",
    },
    {
        id: "615d3bd2-4bbf-350e-1896-a8441b8d8b97",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf2",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd5",
    }
]

export const seedBookTag = async () => {
    await prisma.bookTag.createMany({
        data: bookTag
    })
}