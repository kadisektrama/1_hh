export const getByLessonId = (req, res) => {
    try {
        res.status(200).json({ data: [] })
    } catch ({message}) {
        res.status(400).json({message})
    }
}