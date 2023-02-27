import express from 'express';

import { getUsers, createUser, getByUserId } from './handlers.mjs'

// Utils
import { limiter, validator } from '../../utils/index.mjs'

// Schemas
import { createUserSchema } from '../../schemas/index.mjs'

const routes = express.Router();

routes.get('/', [limiter(2, 10 * 1000)], getUsers)
routes.post('/', [validator(createUserSchema)], createUser)
routes.get('/:userId', getByUserId)

export { routes as users }