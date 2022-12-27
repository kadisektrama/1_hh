//Cors
import express from "express";

//Handlers
import { get, post } from "./handlers.mjs";
import { getByLessonId } from "./hash/index.mjs";

const routes = express.Router();

routes.get('/', get);
routes.get('/', post);
routes.get('/:lessonId', getByLessonId);

export { routes as lessons };