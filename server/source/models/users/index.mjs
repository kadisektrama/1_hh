import { users } from "../../odm/index.mjs"

export class Users {
    constructor(data) {
        this.data = data
    }

    async create() {
        const data = await users.create(this.data)

        return data
    }

    async get() {
        const data = await users.find()

        return data
    }

    async getById() {
        const data = await users.findById(this.data)

        return data
    }
}