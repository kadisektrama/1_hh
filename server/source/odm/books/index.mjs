import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    currency: { type: 'string', enum: ['origin', 'best-seller'] },
    short_description: String,
    reviewsCount: Number,
    rating: Number,
})

const books = mongoose.model('books', bookSchema)

export { books }