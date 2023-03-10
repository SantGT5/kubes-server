import { Router } from 'express';
import type { Router as RouterType } from 'express';
import { bookValidator } from './Validator.js';

import { HttpGetAllBooks } from './books.controller.js';

const booksRouter: RouterType = Router();

booksRouter.post('/', bookValidator, HttpGetAllBooks);

export { booksRouter };
