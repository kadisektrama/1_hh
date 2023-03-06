import { Users } from "../../../controllers/index.mjs"

export const getUsers = async (req, res) => {
    try {
        const user = new Users()
        const data = await user.get()

        return res.status(200).json({ data: data })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}