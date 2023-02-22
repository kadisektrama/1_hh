// Core
import express from 'express'

// Tools
import { get, create, getByBookId, updateByBookId, deleteByBookId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', get)
routes.post('/', create)
routes.get('/:bookId', getByBookId)
routes.put('/:bookId', updateByBookId)
routes.delete('/:bookId', deleteByBookId)

export { routes as books }