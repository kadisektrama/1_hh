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
import { adminMiddleware, userMiddleware } from "./middlewares/index.mjs";

export const app = express();

app.use(helmet.frameguard())
app.use(helmet.hidePoweredBy())
app.use(bodyParser.json({ limit: '10kb' }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/auth', routes.auth)

app.use('/', [userMiddleware], routes.common)

app.use('/products', routes.products)


app.use('/books', [adminMiddleware], routes.books)
app.use('/users', [adminMiddleware], routes.users)
app.use('/categories', [adminMiddleware], routes.categories)
app.use('/currencies', [adminMiddleware], routes.currencies)
app.use('/bicycles', [adminMiddleware], routes.bicycles)
app.use('/roles', [adminMiddleware], routes.roles)

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