// Core
import bcrypt from 'bcrypt'

// Tools
import { Users, Roles } from "../../../controllers/index.mjs"
import { accessToken } from '../../../utils/accessToken.mjs'

export const authentication = async (req, res) => {
    try {
        const { user_name, password } = req.body
        const user = new Users(user_name)
        const candidate = await user.getByUserName()

        if (!candidate) {
            return res.status(403).json({ message: `Пользователя с именем ${user_name} не существует` })
        }

        const isValidate = bcrypt.compare(password, candidate.password)
        if (!isValidate) {
            return res.status(403).json({ message: `Неправильный пароль` })
        }

        const jwt = accessToken(candidate._id, candidate.role)

        return res.status(200).json({ token: jwt })
    } catch ({ message }) {
        return res.status(403).json(message)
    }
}

export const registration = async (req, res) => {
    try {
        const { user_name, password } = req.body
        const user = new Users(user_name)
        const candidate = await user.getByUserName()

        if (candidate) {
            return res.status(400).json({ message: `Пользователь с именем ${user_name} уже существует` })
        }

        const hashedPassword = bcrypt.hashSync(password, 6)
        const role = new Roles('guest')
        const roles = await role.getByName()

        await user.create({ ...req.body, password: hashedPassword, role: roles._id })
        return res.status(201).json({ message: 'Пользователь успешно создан' })
    } catch ({ message }) {
        return res.status(400).json(message)
    }
}