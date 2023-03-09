import { Orders } from '../../../controllers/index.mjs'

export const getOrders = async (req, res) => {
    try {
        const products = new Orders(req.data.userId)
        const data = await products.getByHostId()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}