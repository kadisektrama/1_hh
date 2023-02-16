import { Categories } from '../../controllers/index.mjs'

export const get = async (req, res) => {
    try {
        const categories = new Categories(req.body)
        const data = await categories.get()

        return res.status(200).json({ data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const post = async (req, res) => {
    try {
        const categories = new Categories(req.body)
        const data = await categories.create()

        return res.status(201).json({ data: data })
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

export const getByCategoryId = async (req, res) => {
    try {
        const categories = new Categories(req.params.currencyId)
        const data = await categories.getById()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}