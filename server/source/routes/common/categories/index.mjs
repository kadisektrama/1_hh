// Core
import express from 'express'

// Tools
import { getCategories } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getCategories)

export { routes as categories }