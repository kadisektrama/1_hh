// Core
import express from 'express'

// Tools
import { get } from './handlers.mjs'

const routes = express.Router()

routes.get('/', get)

export { routes as products }