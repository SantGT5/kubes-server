import { createServer } from 'http';
import type { Server, IncomingMessage, ServerResponse } from 'http';

import { app } from './app.js';

const PORT = 8000;

const server: Server<typeof IncomingMessage, typeof ServerResponse> =
    createServer(app);

function startServer() {
    server.listen(PORT, () => {
        console.log(`🚀 [server]: ready at http://localhost:${PORT}`);
    });
}

startServer();
