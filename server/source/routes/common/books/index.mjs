// Core
import express from 'express'

// Tools
import { getByBookId } from './handlers.mjs'

const routes = express.Router()

routes.get('/:bookId', getByBookId)

export { routes as books }