import { bicycles } from '../../odm/index.mjs'

export class Bicycles {
    constructor(data) {
        this.data = data
    }

    async update(body) {
        console.log(body)
        const data = await bicycles.findByIdAndUpdate(this.data, body)

        return data
    }

    async delete() {
        const data = await bicycles.findByIdAndDelete(this.data)

        return data
    }

    async create(body) {
        const data = await bicycles.create(body)

        return data
    }

    async get() {
        const data = await bicycles.find().populate('currency')

        return data
    }

    async getById() {
        const data = await bicycles.findById(this.data).populate('currency')

        return data
    }
}