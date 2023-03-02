import { Users as UsersModel } from "../../models/index.mjs"

export class Users {
    constructor(data) {
        this.models = {
            users: new UsersModel(data)
        }
    }

    async get() {
        const data = this.models.users.get()

        return data
    }

    async getById() {
        const data = this.models.users.getById()

        return data
    }

    async getByUserName() {
        const data = this.models.users.getByUserName()

        return data
    }

    async create(body) {
        const data = this.models.users.create(body)

        return data
    }

    async update(body) {
        const data = this.models.users.update(body)

        return data
    }

    async delete() {
        const data = this.models.users.delete()

        return data
    }
}