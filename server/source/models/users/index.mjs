import { users } from "../../odm/index.mjs"

export class Users {
    constructor(data) {
        this.data = data
    }

    async create(body) {
        const data = await users.create(body)

        return data
    }

    async get() {
        const data = await users.find().populate('role')

        return data
    }

    async getById() {
        const data = await users.findById(this.data).populate('role')

        return data
    }

    async getByUserName() {
        const data = await users.findOne({ user_name: this.data })

        return data
    }

    async update(body) {
        const data = await users.findByIdAndUpdate(this.data, body)

        return data
    }

    async delete() {
        const data = await users.findByIdAndDelete(this.data)

        return data
    }
}