import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";
import { initializeApp } from "firebase-admin";
import { getAuth, getIdToken } from "@firebase/auth";

const app = initializeApp();
const prisma = new PrismaClient();
const admin = require("firebase-admin");

const auth = getAuth()
const user = auth.currentUser
// const idToken = getIdToken(user, true)
export const logIn = async (req: Request, res: Response) => {
    const { token, mail } = req.body;
}