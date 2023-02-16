// Core
import express from 'express'

// Tools
import { get, post, getByCurrencyId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', get)
routes.post('/', post)
routes.get('/:bookId', getByCurrencyId)

export { routes as currencies }