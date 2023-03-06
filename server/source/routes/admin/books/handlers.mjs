import { Books } from '../../../controllers/index.mjs'

export const getBooks = async (req, res) => {
    try {
        const book = new Books()
        const data = await book.get()

        return res.status(200).json({ data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const createBook = async (req, res) => {
    try {
        const book = new Books()
        const data = await book.create(req.body)

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

export const updateByBookId = async (req, res) => {
    try {
        const book = new Books(req.params.bookId)
        await book.update(req.body)

        return res.sendStatus(204)
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}

export const deleteByBookId = async (req, res) => {
    try {
        const book = new Books(req.params.bookId)
        await book.delete()

        return res.sendStatus(202)
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}