import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (req: Request, res: Response) => {
    try {
        const { id, name, email, studentNumber } = req.body;
        const user: User = await prisma.user.create({
            data: {
                id: id,
                name: name,
                mail: email,
                role: 'user',
                studentNumber: Number(studentNumber)
            }
        })
        res.json(user);
        return user;
    } catch (e) {
        if (e instanceof Error) {
            res.status(500).send({ error: e.message });
        }
    }
}

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

export const update = async (res: Response, req: Request) => {
    try {
        const { id, name, email, studentNumber } = req.body;
        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data:{
                name: name,
                mail: email,
                studentNumber: Number(studentNumber),
            }
        })
        res.json(user);
        return user;
    } catch (e) {
        if (e instanceof Error) {
            return res.status(500).send({ error: e.message });
        }
        return res.status(500).send({ error: String(e) });
    }
}