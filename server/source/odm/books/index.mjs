import mongoose from 'mongoose'
import { products } from '../products/index.mjs'

const books = products.discriminator(
    'Book',
    new mongoose.Schema({ author: String })
)

export { books }