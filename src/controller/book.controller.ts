import express, { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const get = async (req: Request, res: Response) => {
    const books = await prisma.book.findMany();
    res.send(books)
}