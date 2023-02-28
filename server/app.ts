import express from 'express';
import type { Express } from 'express';

import { api } from './routers/api.js';

const app: Express = express();

app.use(express.json());

app.use('/v1', api);

export { app };
