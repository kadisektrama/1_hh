import express from 'express';

import { get, post, getByUserId } from './handlers.mjs';

//Utils
import { limiter, validator } from "../../utils/index.mjs"

//Schemas
import { createUser } from "../../schemas/index.mjs";

const routes = express.Router();

routes.get('/', [limiter(2, 10 * 1000)], get)
routes.post('/', [validator(createUser)], post)
routes.get('/:userId', getByUserId)

export { routes as users }