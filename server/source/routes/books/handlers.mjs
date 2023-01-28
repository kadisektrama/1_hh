export const get = (req, res) => {
    try {
        return res.status(200).json({ data: [] })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}
export const post = (req, res) => {
    try {
        return res.sendStatus(201)
    } catch ({ message }) {
        res.status(400).json({message})
    }
}