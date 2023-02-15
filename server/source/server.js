import express from "express"
import bodyParser from "body-parser"
import helmet from "helmet"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

//Routes
import * as routes from "./routes/index.mjs"

//Middlewares
import { authorization } from "./utils/index.mjs"

//Logger
import { logger, errorLogger, notFoundLogger, validationLogger } from "./utils/index.mjs";

export const app = express();


app.use(helmet.frameguard())
app.use(helmet.hidePoweredBy())
app.use(bodyParser.json({ limit: '10kb' }))

app.use('/auth', routes.auth)
app.use('/books', routes.books)
app.use('/users', routes.users)
app.use('/classes', [authorization], routes.classes)
app.use('/lessons', [authorization], routes.lessons)
app.get('/test', (req, res) => {
    res.status(200).json({ data: [] })
})

//errors
app.get('/error', (req, res) => {
    /*const promise = Promise.reject(new Error('Promise reject'))
    promise.name = '/users';
    promise.statusCode = 418;*/
    throw new Error('Unhandled error!')

    res.sendStatus(200);
})

if (process.env.NODE_ENV !== 'test') {
    app.use((error, req, res, next) => {
        const { name, message, statusCode } = error;
        const errorName = `${name}: ${message}`;

        switch (name) {
            case 'NotFountError':
                notFoundLogger.error(errorName);
                break;

            case 'ValidationError':
                validationLogger.error(errorName);
                break;

            default:
                logger.error(errorName);
                break;
        }

        const status = statusCode ? statusCode : 500;
        res.status(status).json({ message: message })
    })
}

//For async
process.on('unhandledRejection', async (error, promise) => {
    try {
        await promise
        promise.handled = true;
    } catch ({ message }) {
        console.log(message)
    }
})

//For sync
process.on("uncaughtException", (err) => {
    console.log(err.message)
})

//For reasync
process.on('rejectionHandled', promise => {
    console.log(`Is promise ${promise.name} with code ${promise.statusCode}`)
})