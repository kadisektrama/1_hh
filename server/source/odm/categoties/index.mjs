import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    db_name: {
        type: String,
        required: true,
    },
})

const categories = mongoose.model('categories', categorySchema)

export { categories }