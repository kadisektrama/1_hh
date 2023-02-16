// Core
import express from 'express'

// Tools
import { get, post, getByCategoryId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', get)
routes.post('/', post)
routes.get('/:currencyId', getByCategoryId)

export { routes as categories }