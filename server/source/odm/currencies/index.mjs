import mongoose from 'mongoose'

const currencySchema = mongoose.Schema({
    name: String,
})

const currencies = mongoose.model('currencies', currencySchema)

export { currencies }