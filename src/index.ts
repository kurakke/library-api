import express, { Request, Response } from 'express';
import userRouter from './routes/user.route';
import bookRouter from './routes/book.route';

const app = express();
const port = 8080;
const cors = require('cors');

const allowedOrigins = [
    'http://localhost:3000',
    'https://library-web-develop.vercel.app/',
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));
app.use(express.json());

app.use('/books', bookRouter);
app.use('/user', userRouter);
app.get('/', (req: Request, res: Response) => {
    res.send('HelloNode');
});

app.listen(port, () => console.log(`Example App Listening On Port ${port}!`));
