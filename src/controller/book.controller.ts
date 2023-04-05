import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const get = async (req: Request, res: Response) => {
    const books = await prisma.book.findMany();
    res.send(books);
};

export const getDetail = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const book = await prisma.book.findUnique({
            where: {
                id,
            },
            include: {
                book_tags: {
                    select: {
                        tag: {
                            select: {
                                label: true,
                            },
                        },
                    },
                },
            },
        });

        if (!book) {
            return res.status(404).send({ error: 'book not found' });
        }

        return res.send(book);
    } catch (e: any) {
        return res.status(500).send({ error: e.message });
    }
};
