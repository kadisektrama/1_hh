import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    currency: {
        type: Number,
        max: 1,
    },
    reviews_count: Number,
    rating: Number,
})

const books = mongoose.model('book', bookSchema)

export { books }