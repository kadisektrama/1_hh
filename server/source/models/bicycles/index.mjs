import { bicycles } from '../../odm/index.mjs'

export class Bicycles {
    constructor(data) {
        this.data = data
    }

    async update() {
        const { id, ...rest } = this.data
        const data = await bicycles.findByIdAndUpdate(id, rest)

        return data
    }

    async delete() {
        const data = await bicycles.findByIdAndDelete(this.data)

        return data
    }

    async create() {
        const data = await bicycles.create(this.data)

        return data
    }

    async get() {
        const data = await bicycles.find()

        return data
    }

    async getById() {
        const data = await bicycles.findById(this.data)

        return data
    }
}