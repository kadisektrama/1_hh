// Core
import express from 'express'

// Tools
import { getOrders, updateByOrderId, deleteByOrderId, createOrder, getByOrderId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getOrders)
routes.post('/', createOrder)
routes.get('/:orderId', getByOrderId)
routes.put('/:orderId', updateByOrderId)
routes.delete('/:orderId', deleteByOrderId)

export { routes as orders }