import { Orders as OrdersModel } from "../../models/index.mjs"

export class Orders {
    constructor(data) {
        this.models = {
            orders: new OrdersModel(data)
        }
    }

    async get() {
        const data = this.models.orders.get()

        return data
    }

    async getByGuestId() {
        const data = this.models.orders.getByGuestId()

        return data
    }

    async getByHostId() {
        const data = this.models.orders.getByHostId()

        return data
    }

    async getById() {
        const data = this.models.orders.getById()

        return data
    }

    async getByName() {
        const data = this.models.orders.getByName()

        return data
    }

    async create(body) {
        const data = this.models.orders.create(body)

        return data
    }

    async update(body) {
        const data = this.models.orders.update(body)

        return data
    }

    async delete() {
        const data = this.models.orders.delete()

        return data
    }
}