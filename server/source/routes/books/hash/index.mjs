export const getByBookId = (req, res) => {
    try {
        return res.status(200).json({ data: [] })
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}