import express from 'express';
import type { Express } from 'express';

import cors from 'cors';

import { api } from './routers/api.js';

const app: Express = express();

app.use(
    cors({
        origin: 'http://localhost:5173',
    })
);

app.use(express.json());

app.use('/v1', api);

export { app };
