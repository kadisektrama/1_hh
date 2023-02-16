import { currencies } from "../../odm/index.mjs"

export class Currencies {
    constructor(data) {
        this.data = data
    }

    async create() {
        const data = await currencies.create(this.data)

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
}