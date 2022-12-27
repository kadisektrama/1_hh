//Cors
import jwt from "jsonwebtoken";

export const authorization = async (req, res, next) => {
    const token = req.headers["x-token"];

    if (!token) {
        res.status(403).json({ message: 'Token is not valid!' })
    }

    try {
        const verify = await jwt.verify(token, 'password');

        console.log(verify);

        next();
    } catch ({ message }) {
        res.status(403).json({ message: 'Token is not valid!' })
    }
}