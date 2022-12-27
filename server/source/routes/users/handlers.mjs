export const get = (req, res) => {
    try {
        return res.status(200).json({ data: [] })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}

export const post = (req, res) => {
    try {
        return res.status(201).json({data: []})
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}