import { Books as BooksModel } from '../../models/index.mjs'

class Books {
    constructor(data) {
        this.models = {
            books: new BooksModel(data)
        }
    }

    async get() {
        const data = await this.models.books.get()

        return data
    }

    async getById() {
        const data = await this.models.books.getById()

        return data
    }

    async create() {
        const data = await this.models.books.create()

        return data
    }
}

export { Books }