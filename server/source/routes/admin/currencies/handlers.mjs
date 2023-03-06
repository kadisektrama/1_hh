import {Books, Currencies} from '../../../controllers/index.mjs'

export const getCurrencies = async (req, res) => {
    try {
        const currency = new Currencies()
        const data = await currency.get()

        return res.status(200).json({ data: data })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}

export const createCurrency = async (req, res) => {
    try {
        const currency = new Currencies()
        const data = await currency.create(req.body)

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

export const updateByCurrencyId = async (req, res) => {
    try {
        const currency = new Currencies(req.params.currencyId)
        await currency.update(req.body)

        return res.sendStatus(204)
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}

export const deleteByCurrencyId = async (req, res) => {
    try {
        const currency = new Currencies(req.params.currencyId)
        await currency.delete()

        return res.sendStatus(202)
    } catch ({ message }) {
        return res.status(400).json({ message })
    }
}