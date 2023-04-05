import { Request, Response } from 'express';
import { PrismaClient, LendRecord } from "@prisma/client";

const prisma = new PrismaClient();

export const get = async (req: Request, res: Response) => {
    const books = await prisma.book.findMany();
    res.send(books)
}

export const create = async (req: Request, res: Response): Promise<LendRecord> => {
    const { bookId, userId, returnedDate, created_at, deadline } = req.body;
    const bookHistory = await prisma.lendRecord.create({
        data: {
            bookId,
            userId,
            returnedDate,
            created_at,
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