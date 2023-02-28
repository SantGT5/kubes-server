import { Router } from 'express';
import type { Router as RouterType } from 'express';

import { booksRouter } from './Books/books.router.js';

const api: RouterType = Router();

api.use('/books', booksRouter);

export { api };
