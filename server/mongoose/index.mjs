import mongoose from 'mongoose'

const mongooseOptions = {
    promiseLibrary: global.Promise,
    poolSize: 50,
    keepalive: 30000,
    connectTimeoutMS: 5000,
    reconnectTries: Number.MAX_SAFE_INTEGER,
    reconnectInterval: 5000,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
}

const connection = mongoose.connect(
    'mongodb+srv://uladzislau:YJ5-tcC-x7w-Yij@cluster1.4tdzwhz.mongodb.net/test',
    mongooseOptions
)

export { connection as mongoose }