import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
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

const products = mongoose.model('product', productSchema)

export { products }