// Core
import express from 'express'

// Tools
import { getBooks, createBook, getByBookId, updateByBookId, deleteByBookId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', getBooks)
routes.post('/', createBook)
routes.get('/:bookId', getByBookId)
routes.put('/:bookId', updateByBookId)
routes.delete('/:bookId', deleteByBookId)

export { routes as books }