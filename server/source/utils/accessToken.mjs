import jwt from 'jsonwebtoken'

export const accessToken = (id, roles) => {
    const payload = {
        id: id,
        roles: roles
    }

    console.log('payload: ', payload)

    const token = jwt.sign(payload, process.env.NODE_JWT_SECRET_KEY, { expiresIn: '24h' })
    const decodedData = jwt.verify(token, process.env.NODE_JWT_SECRET_KEY)
    console.log('decoded data: ', decodedData)

    return token
}

export const decodeAccessToken = token => {
    return jwt.verify(token, process.env.NODE_JWT_SECRET_KEY)
}