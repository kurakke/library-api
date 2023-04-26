import { Request, Response } from 'express';
import { PrismaClient, LendRecord } from '@prisma/client';

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
                bookTags: {
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
    } catch (e) {
        if (e instanceof Error) {
            return res.status(500).send({ error: e.message });
        }

        return res.status(500).send({ error: String(e) });
    }

};

export const getLendRecord = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                lendRecords: {
                    include: {
                        book: {
                            select: {
                                id: true,
                            },
                        },
                    },
                },
            },
        });
        if (!user) {
            return res.status(404).send({ error: 'book not found' });
        }
        return res.send(user);
    } catch (e) {
        if (e instanceof Error) {
            return res.status(500).send({ error: e.message });
        }
        return res.status(500).send({ error: String(e) });
    }
};

export const create = async (req: Request, res: Response): Promise<LendRecord> => {
    const { bookId, userId, returnedDate, createdAt, deadline } = req.body;
    const bookHistory = await prisma.lendRecord.create({
        data: {
            bookId,
            userId,
            returnedDate,
            createdAt,
            deadline,
        }
    })
    res.send(bookHistory)
    return bookHistory;
}

export const update = async (req: Request, res: Response): Promise<LendRecord> => {
    const { lendRecordId, returnedDate } = req.body;
    const bookHistory = await prisma.lendRecord.update({
        where: {
            id: lendRecordId
        },
        data: {
            returnedDate: returnedDate,
        },
    })
    res.send(bookHistory)
    return bookHistory;
}