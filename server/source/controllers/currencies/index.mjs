import { Currencies as CurrenciesModel } from '../../models/index.mjs'

export class Currencies {
    constructor(data) {
        this.models = {
            currencies: new CurrenciesModel(data)
        }
    }

    async get() {
        const data = this.models.currencies.get()

        return data
    }

    async getById() {
        const data = this.models.currencies.getById()

        return data
    }

    async create(body) {
        const data = this.models.currencies.create(body)

        return data
    }

    async update(body) {
        const data = this.models.currencies.update(body)

        return data
    }

    async delete() {
        const data = this.models.currencies.delete()

        return data
    }
}