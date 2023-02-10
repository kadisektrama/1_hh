import { books } from '../../odm/index.mjs'

export class Books {
    constructor(data) {
        this.data = data
    }

    async create() {
        const data = await books.create(this.data)

        return data
    }

    async getAll() {
        const data = await books.find(this.data)

        return data
    }

    async getByHash() {
        const data = await books.findOne(this.data)

        return data
    }
}