import { PrismaClient, Tag } from "@prisma/client";

const prisma = new PrismaClient;

const tags: Tag[] = [
    {
        id: "db3b56a9-948f-07b7-133b-4d246354edd1",
        label: "history",
    },
    {
        id: "db3b56a9-948f-07b7-133b-4d246354edd2",
        label: "javascript",
    },
    {
        id: "db3b56a9-948f-07b7-133b-4d246354edd3",
        label: "typescript",
    },
    {
        id: "db3b56a9-948f-07b7-133b-4d246354edd4",
        label: "rails",
    },
    {
        id: "db3b56a9-948f-07b7-133b-4d246354edd5",
        label: "ruby",
    }
]

export const seedTags = async () => {
    await prisma.tag.createMany({
        data: tags
    })
}