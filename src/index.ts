import express, { Request, Response } from 'express';

const app = express();
const port = 3000;
const bookRouter = require('./routes/book.route');
const userRouter = require('./routes/user.route');

app.use('/books', bookRouter);
app.use('/users', userRouter);
app.get('/', (req: Request, res: Response) => {
    res.send('HelloNode');
});

app.listen(port, () => console.log(`Example App Listening On Port ${port}!`));
