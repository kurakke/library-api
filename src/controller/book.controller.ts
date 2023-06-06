import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
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

export const serch = async (req: Request, res: Response) => {
    try {
        const { size = '99', page = '1', serchWord } = req.body;
        const query = {
            take: Number(size),
            skip: Number(size) * Math.max(Number(page) - 1, 0),
            where: { title: { contains: serchWord } }
        } satisfies Prisma.BookFindManyArgs

        const [list, count] = await prisma.$transaction([
            prisma.book.findMany(query),
            prisma.book.count({
                where: {
                    title: { contains: serchWord }
                }
            }),
        ])

        res.send(
            {
                list,
                size: Number(size),
                page: Number(page),
                total: count,
                isReached: query.skip + list.length >= count
            })
    } catch (e) {
        console.error(e);
    }
}