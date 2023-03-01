import type { Request, Response, NextFunction } from 'express';

function bookValidator(req: Request, res: Response, next: NextFunction) {
    const { query } = req.body;

    if (typeof query !== 'string') {
        return res.status(400).json({ ok: false, error: 'Bad Request' });
    }

    next();
}

export { bookValidator };
