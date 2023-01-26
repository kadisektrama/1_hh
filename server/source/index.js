//Instruments
import { app } from './server.js';

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`Application was launched on port ${port}`)
})