import mongoose from 'mongoose'
import { products } from '../products/index.mjs'

const bicycles = products.discriminator(
    'bicycles',
    new mongoose.Schema({
        color: String,
        speeds_count: Number,
        pedals: {
            type: String,
            enum: ['shock-resistant']
        },
        brakes: String,
        shock_absorber: Boolean,
        wheel: Number,
        frame_size: Number,
        rider_height: Number,
    })
)

export { bicycles }
