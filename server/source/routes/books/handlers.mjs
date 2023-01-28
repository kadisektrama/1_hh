import { Books } from '../../controllers/index.mjs'

export const get = (req, res) => {
    try {
        return res.status(200).json({ data: [] })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}
export const post = async (req, res) => {
    try {
        console.log(1)
        const book = new Books(req.body)
        console.log(2)
        const data = await book.create()
        console.log(data)
        return res.status(201).json({ data: data })
    } catch ({ message }) {
        res.status(400).json({message})
    }
}