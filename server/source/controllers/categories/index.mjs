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

    async create() {
        const data = this.models.categories.create()

        return data
    }
}