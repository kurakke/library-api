import { PrismaClient, Tag } from "@prisma/client";

const prisma = new PrismaClient;

const tags: Tag[] = [
    {
        id: "db3b56a9-948f-07b7-133b-4d246354edd1",
        tag: "history",
    },
    {
        id: "db3b56a9-948f-07b7-133b-4d246354edd2",
        tag: "javascript",
    },
    {
        id: "db3b56a9-948f-07b7-133b-4d246354edd3",
        tag: "typescript",
    },
    {
        id: "db3b56a9-948f-07b7-133b-4d246354edd4",
        tag: "rails",
    },
    {
        id: "db3b56a9-948f-07b7-133b-4d246354edd5",
        tag: "ruby",
    }
]

export const seedTags = async () => {
    await prisma.tag.createMany({
        data: tags
    })
}