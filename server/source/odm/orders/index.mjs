import mongoose from "mongoose"

const OrderSchema = mongoose.Schema({
    status: String,
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

const orders = mongoose.model('Order', OrderSchema)

export { orders }