import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3000;
const bookRouter = require("./routes/book.route");

app.use('/books', bookRouter)
app.get('/', (req: Request, res: Response) => {
    res.send('HelloNode');
})


app.listen(port, () => console.log(`Example App Listening On Port ${port}!`));