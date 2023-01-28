// Core
import express from 'express'

// Tools
import { get, post } from './handlers.mjs'
import { getByBookId } from './hash/index.mjs'

const routes = express.Router()

routes.get('/', get)
routes.post('/', post)
routes.get('/:bookId', getByBookId)

export { routes as books }