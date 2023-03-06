import express from 'express';

import { getUsers } from './handlers.mjs'

// Utils
import { limiter, validator } from '../../../utils/index.mjs'

// Schemas
import { createUserSchema } from '../../../schemas/index.mjs'

const routes = express.Router();

routes.get('/', [limiter(2, 10 * 1000)], getUsers)

export { routes as users }