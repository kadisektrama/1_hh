import { Products } from '../../controllers/index.mjs'

export const get = async (req, res) => {
    try {
        const products = new Products(req.body)
        const data = await products.get()
        console.log(data)
        return res.status(200).json({ data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const getByProductId = async (req, res) => {
    try {
        const products = new Products(req.params.productId)
        const data = await products.getById()

        return res.status(200).json({ data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}