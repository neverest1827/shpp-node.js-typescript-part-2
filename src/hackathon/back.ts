import express, {Express, Request, Response} from "express";
import {fileURLToPath} from "url";
import path from "path";

const app: Express = express();
const port: number = 3000
const filename: string = fileURLToPath(import.meta.url);
const dirname: string = path.dirname(filename);

app.use(express.static(path.join(dirname, '../../public')));
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(dirname, '../../public', 'index.html'))
})

enum Button {
    Plus = 'Plus',
    Minus = 'Minus'
}

type TypeClick = {
    [key: string]: number
}

let countClick: TypeClick = {
    [Button.Plus]: 0,
    [Button.Minus]: 0
}

app.get('/plus', (req: Request, res: Response) => {
    res.send({"count": ++countClick[Button.Plus]})
})

app.get('/minus', (req: Request, res: Response) => {
    res.send({"count": ++countClick[Button.Minus]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


