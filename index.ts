import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3000;
const prisma = new PrismaClient();
app.get('/', (req: Request, res: Response) => {
    res.send('HelloNode');
})

app.get('/user', async(req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    console.log(users);
    
    return res.json(users);
})

app.listen(port, () => console.log('Example App Listening On Port ${port}!'));