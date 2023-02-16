import { Books } from '../../controllers/index.mjs'

export const get = async (req, res) => {
    try {
        const book = new Books(req.body)
        const data = await book.get()

        return res.status(200).json({ data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const post = async (req, res) => {
    try {
        const book = new Books(req.body)
        const data = await book.create()

        return res.status(201).json({ data: data })
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

export const getByBookId = async (req, res) => {
    try {
        const book = new Books(req.params.bookId)
        const data = await book.getById()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}