import { orders } from "../../odm/index.mjs"

export class Orders {
    constructor(data) {
        this.data = data
    }

    async create(body) {
        const data = await orders.create(body)

        return data
    }

    async get() {
        const data = await orders.find()

        return data
    }

    async getByUserId() {
        const data = await orders.find({ user_id: this.data })

        return data
    }

    async getById() {
        const data = await orders.findById(this.data)

        return data
    }

    async update(body) {
        const data = await orders.findByIdAndUpdate(this.data, body)

        return data
    }

    async delete() {
        const data = await orders.findByIdAndDelete(this.data)

        return data
    }
}