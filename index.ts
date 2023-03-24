import express, { Request, Response } from 'express';
const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
    res.send('HelloNode');
})

app.listen(port, () => console.log('Example App Listening On Port ${port}!'));