import mongoose from "mongoose"

const OrderSchema = mongoose.Schema({
    status: String,
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
})

const orders = mongoose.model('orders', OrderSchema)

export { orders }