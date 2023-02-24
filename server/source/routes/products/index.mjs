// Core
import express from 'express'

// Tools
import { get, getByProductId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', get)
routes.get('/:productId', getByProductId)

export { routes as products }