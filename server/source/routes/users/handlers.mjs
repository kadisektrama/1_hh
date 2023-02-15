import { Users } from "../../controllers/users/index.mjs"

export const get = async (req, res) => {
    try {
        const user = new Users()
        const data = await user.get()

        return res.status(200).json({ data: data })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}

export const post = async (req, res) => {
    try {
        const user = new Users(req.body)
        const data = await user.create()

        return res.status(201).json({ data: data })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }
}

export const getByUserId = async (req, res) => {
    try {
        const user = new Users(req.params.userId)
        const data = await user.getById()

        res.status(200).json({ data: data })
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}