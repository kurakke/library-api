import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (req: Request, res: Response) => {
    try {
        const { id, name, mail, studentNumber }: { id: string, name: string, mail: string, studentNumber: number } = req.body;
        const user = await prisma.user.create({
            data: {
                id: id,
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
