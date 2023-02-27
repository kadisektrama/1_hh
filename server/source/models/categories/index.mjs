import { categories } from "../../odm/index.mjs"

export class Categories {
    constructor(data) {
        this.data = data
    }

    async create(body) {
        const data = await categories.create(body)

        return data
    }

    async get() {
        const data = await categories.find()

        return data
    }

    async getById() {
        const data = await categories.findById(this.data)

        return data
    }
}