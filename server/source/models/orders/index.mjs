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

    async getByGuestId() {
        const data = await orders.find({ user_id: this.data })
            .populate({
                path: 'product_id',
                populate: {
                    path: 'currency'
                },
            })
            .populate({ path: 'user_id' })

        return data
    }

    async getByHostId() {
        const data = await orders.find()
            .populate({
                path: 'product_id',
                match: { user_id: { $eq: this.data } },
                populate: {
                    path: 'currency'
                },
            })
            .populate({ path: 'user_id' })

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