import { books } from '../../odm/index.mjs'

export class Books {
    constructor(data) {
        this.data = data
    }

    async create(body) {
        const data = await books.create(body)

        return data
    }

    async get() {
        const data = await books.find().populate('currency')

        return data
    }

    async getById() {
        const data = await books.findById(this.data).populate('currency')

        return data
    }

    async update(body) {
        const data = await books.findByIdAndUpdate(this.data, body)

        return data
    }

    async delete() {
        const data = await books.findByIdAndDelete(this.data)

        return data
    }
}