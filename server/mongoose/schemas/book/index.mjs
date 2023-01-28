import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    currency: { type: 'string', enum: ['origin', 'best-seller'] },
    short_description: String,
    reviewsCount: Number,
    rating: Number,
})

const Book = mongoose.model('books', bookSchema)

const book = new Book({
    name: 'The sorrows of satan',
    price: 100,
    currency: 'USD',
    short_description: 'Original',
    reviewsCount: 10,
    rating: 9,
})

try {
    const data = await book.save()
    
    console.log(data)
} catch (error) {
    console.log(error)
}


