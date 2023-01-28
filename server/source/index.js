// Tools
import { app } from './server.js';
import dg from 'debug';

const debug = dg('express:server:main');
const port = process.env.port || 8080;

app.listen(port, () => {
    debug(`Application was launched on port ${port}`);
})