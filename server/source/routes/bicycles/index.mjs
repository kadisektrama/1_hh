// Core
import express from 'express'

// Tools
import { getBicycles, createBicycle, getByBicycleId, updateByBicycleId, deleteByBicycleId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getBicycles)
routes.post('/', createBicycle)
routes.get('/:bicycleId', getByBicycleId)
routes.put('/:bicycleId', updateByBicycleId)
routes.delete('/:bicycleId', deleteByBicycleId)

export { routes as bicycles }