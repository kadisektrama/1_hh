import { Roles as RolesModel } from "../../models/index.mjs"

export class Roles {
    constructor(data) {
        this.models = {
            roles: new RolesModel(data)
        }
    }

    async get() {
        const data = this.models.roles.get()

        return data
    }

    async getById() {
        const data = this.models.roles.getById()

        return data
    }

    async getByName() {
        const data = this.models.roles.getByName()

        return data
    }

    async create(body) {
        const data = this.models.roles.create(body)

        return data
    }

    async update(body) {
        const data = this.models.roles.update(body)

        return data
    }

    async delete() {
        const data = this.models.roles.delete()

        return data
    }
}