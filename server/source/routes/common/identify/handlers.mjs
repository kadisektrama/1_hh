import { Users } from "../../../controllers/index.mjs"

export const identify = async (req, res) => {
    try {
        const user = new Users(req.data.id)
        const data = await user.getById()

        return res.status(200).json({ data: data })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}