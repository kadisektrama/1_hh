import { decodeAccessToken } from "../../utils/accessToken.mjs";
import { Roles } from "../../controllers/index.mjs"

export const adminMiddleware = async (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            res.status(401).json({ message: 'Неправильный токен' })
        }

        const decodedData = decodeAccessToken(token)

        const roles = new Roles(decodedData.role)
        const role = await roles.getById()

        if (role.name !== 'admin') {
            res.status(401).json({ message: 'Неправильный токен' })
        }

        next()
    } catch (e) {
        res.status(401).json({ message: 'Неправильный токен' })
    }
}