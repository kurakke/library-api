import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (req: Request, res: Response) => {
    try {
        const { userId, name, mail, studentNumber } = req.body;
        const user = await prisma.user.create({
            data: {
                id: userId,
                name: name,
                mail: mail,
                role: 'user',
                studentNumber: studentNumber
            }
        })
        return res.send(user);
    } catch (e) {
        if (e instanceof Error) {
            return res.status(500).send({ error: e.message });
        }
    }
}
