import { Request, Response } from 'express';
import { PrismaClient, LendRecord } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { normalizeQuery } from '../utils/express'

const prisma = new PrismaClient();

export const get = async (req: Request, res: Response) => {
    const { size = '99', page = '1' } = normalizeQuery(req.query);
    const query = {
        take: Number(size),
        skip: Number(size) * Math.max(Number(page) - 1, 0)
    } satisfies Prisma.BookFindManyArgs

    const [list, count] = await prisma.$transaction([
        prisma.book.findMany(query),
        prisma.book.count(),
    ])

    res.send(
        {
            list,
            size: Number(size),
            page: Number(page),
            total: count,
            isReached: query.skip + list.length >= count
        })
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
                    include: {
                        tag: true,
                    }
                },
                lendRecords: true,
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
                lendRecord: {
                    include: {
                        book: {
                            include: {
                                bookTags: {
                                    include: {
                                        tag: true,
                                    }
                                }
                            }
                        }
                    }
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

export const remove = async (req: Request, res: Response) => {
    const { lendRecordId } = req.body;
    const remove = await prisma.lendRecord.delete({
        where: {
            id: lendRecordId
        }
    })
    res.send(remove);
    return remove;
}