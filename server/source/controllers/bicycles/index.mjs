import { Bicycles as BicyclesModel } from '../../models/index.mjs'

class Bicycles {
    constructor(data) {
        this.models = {
            bicycles: new BicyclesModel(data)
        }
    }

    async update() {
        const data = this.models.bicycles.update()

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

    async create() {
        const data = await this.models.bicycles.create()

        return data
    }
}

export { Bicycles }