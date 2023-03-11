import { products } from '../../odm/index.mjs'

export class Products {
    constructor(data) {
        this.data = data
    }

    async get() {
        const data = await products.find(this.data).populate('currency')

        return data
    }
}