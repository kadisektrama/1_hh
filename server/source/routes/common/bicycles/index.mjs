// Core
import express from 'express'

// Tools
import { getByBicycleId } from './handlers.mjs'

const routes = express.Router()

routes.get('/:bicycleId', getByBicycleId)

export { routes as bicycles }