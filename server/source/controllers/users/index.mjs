import { Users as UsersModel } from "../../models/index.mjs"

export class Users {
    constructor(data) {
        this.models = {
            users: new UsersModel(data)
        }
    }

    async create() {
        const data = this.models.users.create()

        return data
    }

    async get() {
        const data = this.models.users.get()

        return data
    }

    async getById() {
        const data = this.models.users.getById()

        return data
    }
}