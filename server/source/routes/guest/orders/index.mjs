// Core
import express from 'express'

// Tools
import { createOrder, getOrders } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getOrders)
routes.post('/', createOrder)

export { routes as orders }