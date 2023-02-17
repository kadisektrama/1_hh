import { Currencies } from '../../controllers/index.mjs'

export const get = async (req, res) => {
    try {
        const currency = new Currencies(req.body)
        const data = await currency.get()

        return res.status(200).json({ data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const post = async (req, res) => {
    try {
        const currency = new Currencies(req.body)
        const data = await currency.create()

        return res.status(201).json({ data: data })
    } catch ({ message }) {
        res.status(400).json({message})
    }
}

export const getByCurrencyId = async (req, res) => {
    try {
        const currency = new Currencies(req.params.currencyId)
        const data = await currency.getById()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}