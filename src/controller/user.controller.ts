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
