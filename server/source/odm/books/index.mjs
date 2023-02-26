import mongoose from 'mongoose'
import { products } from '../products/index.mjs'

const books = products.discriminator(
    'books',
    new mongoose.Schema({ author: String })
)

export { books }