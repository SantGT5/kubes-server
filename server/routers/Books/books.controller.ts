import type { Request, Response } from 'express';

import { getBooksByQuery } from '../../api/GoogleAPI.js';

async function HttpGetAllBooks(req: Request, res: Response) {
    try {
        const { query } = req.body;

        const data = await getBooksByQuery(query);

        return res.status(200).json(data);
    } catch (err) {
        console.error(err);
    }
}

export { HttpGetAllBooks };
