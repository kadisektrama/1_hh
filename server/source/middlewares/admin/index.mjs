import { decodeAccessToken } from "../../utils/accessToken.mjs";

export const adminMiddleware = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            res.status(401).json({ message: 'Неправильный токен' })
        }

        const decodedData = decodeAccessToken(token)
        console.log(decodedData, token)
        if (decodedData.roles !== 'admin') {
            res.status(401).json({ message: 'Неправильный токен' })
        }

        next()
    } catch (e) {
        res.status(401).json({ message: 'Неправильный токен' })
    }
}