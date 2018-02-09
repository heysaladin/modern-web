import express from 'express';
import path from 'path';
import renderer from './helpers/renderer';

const app = express();

const port = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {

    res.send(renderer(req))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})