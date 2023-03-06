// Core
import express from 'express'

// Tools
import { getCategories, createCategory, getByCategoryId, updateByCategoryId, deleteByCategoryId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getCategories)
routes.post('/', createCategory)
routes.get('/:categoryId', getByCategoryId)
routes.put('/:categoryId', updateByCategoryId)
routes.delete('/:categoryId', deleteByCategoryId)

export { routes as categories }