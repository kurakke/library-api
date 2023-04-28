import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";
import { initializeApp } from "firebase-admin";
import { getAuth, getIdToken } from "@firebase/auth";
import admin from "firebase-admin";

const prisma = new PrismaClient();

export const logIn = async (req: Request, res: Response) => {
    const { token, mail } = req.body;
}

export const tokenInspection = (req: Request, res: Response) => {
    const { token } = req.body;
    admin.auth().verifyIdToken(token)
        .then((decodedToken: { uid: string }) => {
            res.send(decodedToken.uid)
        })
        .catch((error: Error) => {
            console.log('Error verifying token:', error);
            res.send(error);
        });
}
