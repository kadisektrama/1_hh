//Cors
import express from "express";

//Handlers
import { get, post } from './handlers.mjs';
import { getByLessonId } from "../lessons/hash/index.mjs";

const routes = express.Router();

routes.get('/', get)
routes.post('/', post)
routes.get('/:classId', getByLessonId)

export { routes as classes };

