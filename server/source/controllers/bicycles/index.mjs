import { Bicycles as BicyclesModel } from '../../models/index.mjs'

class Bicycles {
    constructor(data) {
        this.models = {
            bicycles: new BicyclesModel(data)
        }
    }

    async update(body) {
        const data = this.models.bicycles.update(body)

        return data
    }

    async delete() {
        const data = this.models.bicycles.delete()

        return data
    }

    async get() {
        const data = await this.models.bicycles.get()

        return data
    }

    async getById() {
        const data = await this.models.bicycles.getById()

        return data
    }

    async create(body) {
        const data = await this.models.bicycles.create(body)

        return data
    }
}

export { Bicycles }