// Core
import express from 'express'

// Tools
import { createRole, getById, get } from './handlers.mjs'

const routes = express.Router()

routes.get('/', get)
routes.get('/:roleId', getById)
routes.post('/', createRole)

export { routes as roles }