import { decodeAccessToken } from "../../utils/accessToken.mjs";

export const userMiddleware = async (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            res.status(401).json({ message: 'Неправильный токен' })
        }

        const decodedData = decodeAccessToken(token)
        req.data = {
            id: decodedData.id
        }

        next()
    } catch (e) {
        res.status(401).json({ message: 'Неправильный токен' })
    }
}