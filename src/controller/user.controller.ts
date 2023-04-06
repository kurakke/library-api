import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const signIn = async (req: Request, res: Response) => {
    console.log("signIn");
}