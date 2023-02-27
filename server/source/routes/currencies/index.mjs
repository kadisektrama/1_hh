// Core
import express from 'express'

// Tools
import { getCurrencies, createCurrency, getByCurrencyId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getCurrencies)
routes.post('/', createCurrency)
routes.get('/:currencyId', getByCurrencyId)

export { routes as currencies }