import { decodeAccessToken } from "../../utils/accessToken.mjs";
import { Roles } from "../../controllers/index.mjs"

export const guestMiddleware = async (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            res.status(401).json({ message: 'Неправильный токен' })
        }

        const decodedData = decodeAccessToken(token)

        const roles = new Roles(decodedData.roles)
        const role = await roles.getById()

        if (!(role.name === 'host' || role.name === 'admin' || role.name === 'guest')) {
            res.status(401).json({ message: 'Неправильный токен' })
        }

        req.data = {
            userId: decodedData.id
        }

        next()
    } catch (e) {
        res.status(401).json({ message: 'Неправильный токен' })
    }
}