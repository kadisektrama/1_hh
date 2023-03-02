import express from "express";
import { registration, authentication } from "./hadlers.mjs"

const routes = express.Router()

routes.post('/authenticate', authentication)
routes.post('/register', registration)

export { routes as auth }