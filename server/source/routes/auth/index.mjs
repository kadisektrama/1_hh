import express from "express";
import { authentication } from "../../utils/index.mjs";



const routes = express.Router()

routes.get('/login', [authentication], (req, res) => {
    res.status(200).json({ message: 'Токен получен' })
})

export { routes as auth }