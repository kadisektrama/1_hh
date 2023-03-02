// Core
import express from 'express'

// Tools
import { createRole, getById } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getById)
routes.post('/', createRole)

export { routes as roles }