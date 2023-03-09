import { Products } from '../../../controllers/index.mjs'

export const get = async (req, res) => {
    try {
        const products = new Products({user_id: req.data.userId})
        const data = await products.get()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}