import lodash from 'lodash'

import { Books as BooksModel } from '../../models/index.mjs'
import { Bicycles as BicyclesModel } from '../../models/index.mjs'

export class Products {
    constructor(data) {
        this.models = {
            books: new BooksModel(data),
            bicycles: new BicyclesModel(data)
        }
    }

    async get() {
        const books = this.models.books.get()
        const bicycles = this.models.bicycles.get()
        const data = Promise.all([books, bicycles])
            .then((res) => lodash.flatten(res))

        return data
    }

    async getById() {
        const books = this.models.books.getById()
        const bicycles = this.models.bicycles.getById()
        const data = Promise.all([books, bicycles])
            .then((res) => lodash.flatten(res))

        return data
    }
}