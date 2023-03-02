import { roles } from "../../odm/index.mjs"

export class Roles {
    constructor(data) {
        this.data = data
    }

    async create(body) {
        const data = await roles.create(body)

        return data
    }

    async get() {
        const data = await roles.find()

        return data
    }

    async getById() {
        const data = await roles.findById(this.data)

        return data
    }

    async getByName() {
        const data = await roles.findOne({ name: this.data })

        return data
    }

    async update(body) {
        const data = await roles.findByIdAndUpdate(this.data, body)

        return data
    }

    async delete() {
        const data = await roles.findByIdAndDelete(this.data)

        return data
    }
}