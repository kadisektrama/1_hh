// Tools
import { app } from './server.js';
import dg from 'debug';

// DB
import './db/index.mjs'

const debug = dg('express:server:main');
const port = process.env.port || 8080;

app.listen(port, () => {
    debug(`Application was launched on port ${port}`);
})