import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const get = async (req: Request, res: Response) => {
    const books = await prisma.book.findMany();
    res.send(books);
};

export const getDetail = async (req: Request, res: Response) => {
    const id = req.params.id;
    const book = await prisma.book.findUnique({
        where: {
            id: id,
        },
        include: {
            book_tags: {
                select: {
                    tag: {
                        select: {
                            tag: true,
                        },
                    },
                },
            },
        },
    });

    res.send(book);
};
