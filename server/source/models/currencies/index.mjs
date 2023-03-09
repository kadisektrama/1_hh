import { currencies } from "../../odm/index.mjs"

export class Currencies {
    constructor(data) {
        this.data = data
    }

    async create(body) {
        const data = await currencies.create(body)

        return data
    }

    async get() {
        const data = await currencies.find()

        return data
    }

    async getById() {
        const data = await currencies.findById(this.data)

        return data
    }

    async update(body) {
        const data = await currencies.findByIdAndUpdate(this.data, body)

        return data
    }

    async delete() {
        const data = await currencies.findByIdAndDelete(this.data)

        return data
    }
}