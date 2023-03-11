import jwt from 'jsonwebtoken'

export const accessToken = (id, roles) => {
    const payload = {
        id: id,
        role: roles
    }

    const token = jwt.sign(payload, process.env.NODE_JWT_SECRET_KEY, { expiresIn: '24h' })

    return token
}

export const decodeAccessToken = token => {
    return jwt.verify(token, process.env.NODE_JWT_SECRET_KEY)
}