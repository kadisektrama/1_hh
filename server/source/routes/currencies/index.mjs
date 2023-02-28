// Core
import express from 'express'

// Tools
import { getCurrencies, createCurrency, getByCurrencyId, updateByCurrencyId, deleteByCurrencyId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getCurrencies)
routes.post('/', createCurrency)
routes.get('/:currencyId', getByCurrencyId)
routes.put('/:currencyId', updateByCurrencyId)
routes.delete('/:currencyId', deleteByCurrencyId)

export { routes as currencies }