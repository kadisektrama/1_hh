import mongoose from 'mongoose'

const bicycleSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    currency: {
        type: Number,
        max: 1,
    },
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

const bicycles = mongoose.model('bicycle', bicycleSchema)

export { bicycles }