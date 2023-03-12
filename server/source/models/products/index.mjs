import lodash from 'lodash'

import { products } from '../../odm/index.mjs'

export class Products {
    constructor(data) {
        this.data = data
    }

    async get() {
        let strQuery = lodash.pick(this.data, ['price', 'rating', 'reviews_count'])
        strQuery = JSON.stringify(strQuery)
        strQuery = strQuery.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`)
        strQuery = JSON.parse(strQuery)

        const page = this.data.page ? (this.data.page - 1) * this.data.size || 3 : 0
        const limit = this.data.size || 3
        
        const data = await products.find(strQuery)
            .populate('currency')
            .limit(limit)
            .skip(page)

        return data
    }
}