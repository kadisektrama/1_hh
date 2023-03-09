// Core
import express from 'express'

// Tools
import { getOrders } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getOrders)

export { routes as orders }