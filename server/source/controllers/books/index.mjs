import { Books as BooksModel } from '../../models/index.mjs'

class Books {
    constructor(data) {
        this.models = {
            books: new BooksModel(data)
        }
    }

    async create() {
        const data = await this.models.books.create()

        return data
    }

    async getAll() {
        const data = await this.models.books.getAll()

        return data
    }

    async getByHash() {
        const data = await this.models.books.getByHash()

        return data
    }
}

export { Books }