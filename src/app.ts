import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());
app.set('port', process.env.PORT || 3000);

export default app;

