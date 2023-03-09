import { Orders } from '../../../controllers/index.mjs'
import { statuses } from "../../../utils/statuses.mjs";

export const createOrder = async (req, res) => {
    try {
        const body = {
            user_id: req.data.userId,
            product_id: req.body.product_id,
            status: statuses[0],
        }

        const products = new Orders()
        const data = await products.create(body)

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const getOrders = async (req, res) => {
    try {
        const products = new Orders(req.data.userId)
        const data = await products.getByGuestId()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}