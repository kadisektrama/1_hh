import { Books } from '../../../controllers/index.mjs'

export const getByBookId = async (req, res) => {
    try {
        const book = new Books(req.params.bookId)
        const data = await book.getById()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}