import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const signIn = (req: Request, res: Response) => {
    return 'signin'
}

export const signUp = async (req: Request, res: Response) => {
    return 'signup'
}
