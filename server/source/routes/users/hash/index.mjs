export const getByUserId = (req, res) => {
    try {
        req.status(200).json({ data: [] })
    } catch (e) {
        req.status(400).json({ message: e.message })
    }
}