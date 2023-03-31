import { PrismaClient, BookTags } from "@prisma/client";

const prisma = new PrismaClient;

const bookTags: BookTags[] = [
    {
        id: "3d8b4f4f-3cf4-eaa9-ce38-051f640cec01",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf1",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd1",
    },
    {
        id: "3d8b4f4f-3cf4-eaa9-ce38-051f640cec02",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf2",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd2",
    },
    {
        id: "3d8b4f4f-3cf4-eaa9-ce38-051f640cec03",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf3",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd3",
    },
    {
        id: "3d8b4f4f-3cf4-eaa9-ce38-051f640cec04",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf4",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd4",
    },
    {
        id: "3d8b4f4f-3cf4-eaa9-ce38-051f640cec05",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf5",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd5",
    },
    {
        id: "3d8b4f4f-3cf4-eaa9-ce38-051f640cec06",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf5",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd3",
    },
    {
        id: "3d8b4f4f-3cf4-eaa9-ce38-051f640cec07",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf5",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd51",
    },
    {
        id: "3d8b4f4f-3cf4-eaa9-ce38-051f640cec08",
        bookId: "71774dfc-0c73-9fbd-ae5f-9f2b9bbc9bf2",
        tagId: "db3b56a9-948f-07b7-133b-4d246354edd5",
    }
]

export const seedBookTags = async () => {
    await prisma.bookTags.createMany({
        data: bookTags
    })
}