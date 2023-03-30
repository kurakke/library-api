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