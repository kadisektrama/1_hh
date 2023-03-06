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