import { Bicycles } from '../../../controllers/index.mjs'


export const getByBicycleId = async (req, res) => {
    try {
        const bicycle = new Bicycles(req.params.bicycleId)
        const data = await bicycle.getById()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}
