import express, { Request, Response } from 'express';
import userRouter from './routes/user.route';
import  bookRouter  from './routes/book.route'
const app = express();
const port = 3000;

 
app.use('/books', bookRouter)
app.use('/user', userRouter)
app.get('/', (req: Request, res: Response) => {
    res.send('HelloNode');
});

app.listen(port, () => console.log(`Example App Listening On Port ${port}!`));
