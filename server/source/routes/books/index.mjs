// Core
import express from 'express'

// Tools
import { get, post, getByBookId } from './handlers.mjs'

const routes = express.Router()

routes.get('/', get)
routes.post('/', post)
routes.get('/:bookId', getByBookId)

export { routes as books }