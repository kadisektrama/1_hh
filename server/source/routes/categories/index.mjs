// Core
import express from 'express'

// Tools
import { getCategories, createCategory, getByCategoryId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getCategories)
routes.post('/', createCategory)
routes.get('/:categoryId', getByCategoryId)

export { routes as categories }