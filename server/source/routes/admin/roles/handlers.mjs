import { Roles } from '../../../controllers/index.mjs'

export const get = async (req, res) => {
    try {
        const roles = new Roles()
        const data = await roles.get()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const getById = async (req, res) => {
    try {
        const roles = new Roles()
        const data = await roles.get()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const createRole = async (req, res) => {
    try {
        const role = new Roles()
        const data = await role.create(req.body)

        return res.status(201).json({ data: data })
    } catch ({ message }) {
        res.status(400).json({message})
    }
}