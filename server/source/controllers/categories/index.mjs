import { Categories as CategoriesModel } from '../../models/index.mjs'

export class Categories {
    constructor(data) {
        this.models = {
            categories: new CategoriesModel(data)
        }
    }

    async get() {
        const data = this.models.categories.get()

        return data
    }

    async getById() {
        const data = this.models.categories.getById()

        return data
    }

    async create(body) {
        const data = this.models.categories.create(body)

        return data
    }

    async update(body) {
        const data = this.models.categories.update(body)

        return data
    }

    async delete() {
        const data = this.models.categories.delete()

        return data
    }
}