import { Bicycles } from '../../controllers/index.mjs'


export const getBicycles = async (req, res) => {
    try {
        const bicycle = new Bicycles(req.body)
        const data = await bicycle.get()

        return res.status(200).json({ data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const createBicycle = async (req, res) => {
    try {
        const bicycle = new Bicycles(req.body)
        await bicycle.create()

        return res.sendStatus(201)
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

export const getByBicycleId = async (req, res) => {
    try {
        const bicycle = new Bicycles(req.params.bicycleId)
        const data = await bicycle.getById()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}

export const updateByBicycleId = async (req, res) => {
    try {
        const bicycle = new Bicycles({ ...{id: req.params.bicycleId}, ...req.body })
        await bicycle.update()

        return res.sendStatus(204)
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}

export const deleteByBicycleId = async (req, res) => {
    try {
        const bicycle = new Bicycles(req.params.bicycleId)
        await bicycle.delete()

        return res.sendStatus(202)
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}