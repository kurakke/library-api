import express, { Request, Response } from 'express';
import bookRouter from './routes/book.route';
import { seedBookTag } from '../prisma/seeds/bookTagSeed';
const app = express();
const port = 3000;
app.use(express.json())
app.use('/books', bookRouter);
app.get('/', (req: Request, res: Response) => {
    res.send('HelloNode');
});

app.listen(port, () => console.log(`Example App Listening On Port ${port}!`));
