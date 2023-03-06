import express from 'express'

import { identify } from './handlers.mjs'

const routes = express.Router()

routes.get('/identify', identify)

export { routes as identify }