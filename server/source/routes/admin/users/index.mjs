import express from 'express';

import { getUsers, createUser, getByUserId, updateByUserId, deleteByUserId } from './handlers.mjs'

// Utils
import { limiter, validator } from '../../../utils/index.mjs'

// Schemas
import { createUserSchema } from '../../../schemas/index.mjs'

const routes = express.Router();

routes.get('/', [limiter(5, 10 * 1000)], getUsers)
routes.post('/', [validator(createUserSchema)], createUser)
routes.get('/:userId', getByUserId)
routes.put('/:userId', [validator(createUserSchema)], updateByUserId)
routes.delete('/:userId', deleteByUserId)

export { routes as users }