import mongoose from "mongoose"

const OrderSchema = mongoose.Schema({
    status: String,
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
})

const orders = mongoose.model('orders', OrderSchema)

export { orders }