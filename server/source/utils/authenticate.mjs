import jwt from "jsonwebtoken";

export const authentication = async (req, res, next) => {
    const users = [{name: 'Vlad', password: 'password'}]

    const { authorization } = req.headers;

    console.log(authorization); // Basic VmxhZDpwYXNzd29yZA==

    if (!authorization) {
        res.status(401).json({ message: 'Your credentials are not valid!' })
    }

    const [type, token] = authorization.split(' ');
    const [login, password] = Buffer.from(token, 'base64')
        .toString()
        .split(':')

    const user = users.find(u => u.name === login)

    if (!user) {
        res.status(401).json({ message: 'Your credentials are not valid!' })
    }

    if (user.password === password) {
        const token = await jwt.sign(req.body, 'password')
        res.setHeader('X-TOKEN', token);

        return next();
    }

    res.status(401).json({ message: 'Your credentials are not valid!' })
}