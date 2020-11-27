import express from 'express';
const app = express();
import routes from './routes';
import cors from 'cors';

app.use(cors());

app.use('/', routes);

app.listen(8000, () => {
    console.log('index');
});