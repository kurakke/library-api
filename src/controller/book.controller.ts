import { Request, Response } from 'express';
import { PrismaClient, BorrowingHistory } from "@prisma/client";

const prisma = new PrismaClient();

export const get = async (req: Request, res: Response) => {
    const books = await prisma.book.findMany();
    res.send(books)
}

export const create = async (req: Request, res: Response): Promise<BorrowingHistory> => {
    const { bookId, userId, returnDay, borrowingStatus } = req.body;
    const bookHistory = await prisma.borrowingHistory.create({
        data: {
            bookId,
            userId,
            returnDay,
            borrowingStatus,
        }
    })
    res.send(bookHistory)
    return bookHistory;
}

export const update = async (req: Request, res: Response): Promise<BorrowingHistory> => {
    const { borrowingHistoryId, returnDay, borrowingStatus, returnedDay } = req.body;
    const bookHistory = await prisma.borrowingHistory.update({
        where: {
            id: borrowingHistoryId 
        },
        data: {
            returnDay: returnDay,
            borrowingStatus: borrowingStatus,
            returnedDay: returnedDay,
        },
    })
    res.send(bookHistory)
    return bookHistory;
}