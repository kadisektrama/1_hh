import mongoose from 'mongoose'
import dg from 'debug'

mongoose.set('strictQuery', false);
//mongoose.set('bufferCommands', false);
const debug = dg('express:db')

const mongooseOptions = {
    promiseLibrary: global.Promise,
    //poolSize: 50,
    keepAlive: true,
    connectTimeoutMS: 5000,
    //reconnectTries: Number.MAX_SAFE_INTEGER,
    //reconnectInterval: 5000,
    useNewUrlParser: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
}

const connection = mongoose.connect(
    'mongodb+srv://uladzislau:YJ5-tcC-x7w-Yij@cluster1.4tdzwhz.mongodb.net/test',
    mongooseOptions
)

connection
    .then(() => {
        debug(`DB test has been connecting`)
    })
    .catch((error) => {
        debug(`DB test has failed wit error ${error}`)
    })
