import { books } from '../../odm/index.mjs'

export class Books {
    constructor(data) {
        this.data = data
    }

    async update() {
        const { id, ...rest } = this.data
        const data = await books.findByIdAndUpdate(id, rest)

        return data
    }

    async delete() {
        const data = await books.findByIdAndDelete(this.data)

        return data
    }

    async create() {
        const data = await books.create(this.data)

        return data
    }

    async get() {
        const data = await books.find()

        return data
    }

    async getById() {
        const data = await books.findById(this.data)

        return data
    }
}