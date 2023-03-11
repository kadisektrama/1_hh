import { Orders } from '../../../controllers/index.mjs'

export const getOrders = async (req, res) => {
    try {
        const order = new Orders()
        const data = await order.get()

        return res.status(200).json({ data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const createOrder = async (req, res) => {
    try {
        const order = new Orders()
        const data = await order.create(req.body)

        return res.status(201).json({ data: data })
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

export const getByOrderId = async (req, res) => {
    try {
        const order = new Orders(req.params.orderId)
        const data = await order.getById()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}

export const updateByOrderId = async (req, res) => {
    try {
        const order = new Orders(req.params.orderId)
        await order.update(req.body)

        return res.sendStatus(204)
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}

export const deleteByOrderId = async (req, res) => {
    try {
        const order = new Orders(req.params.orderId)
        await order.delete()

        return res.sendStatus(202)
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}