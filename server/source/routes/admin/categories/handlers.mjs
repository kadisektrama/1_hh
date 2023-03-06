import { Categories } from '../../../controllers/index.mjs'

export const getCategories = async (req, res) => {
    try {
        const categories = new Categories()
        const data = await categories.get()

        return res.status(200).json({ data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const createCategory = async (req, res) => {
    try {
        const categories = new Categories()
        const data = await categories.create(req.body)

        return res.status(201).json({ data: data })
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

export const getByCategoryId = async (req, res) => {
    try {
        const categories = new Categories(req.params.categoryId)
        const data = await categories.getById()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}

export const updateByCategoryId = async (req, res) => {
    try {
        const category = new Categories(req.params.categoryId)
        await category.update(req.body)

        return res.sendStatus(204)
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

export const deleteByCategoryId = async (req, res) => {
    try {
        const category = new Categories(req.params.categoryId)
        await category.delete()

        return res.sendStatus(202)
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}