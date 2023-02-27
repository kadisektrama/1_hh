import { Products as ProductsModel } from '../../models/index.mjs'

export class Products {
    constructor(data) {
        this.models = {
            products: new ProductsModel(data)
        }
    }

    async get() {
        const data = await this.models.products.get()

        return data
    }
}