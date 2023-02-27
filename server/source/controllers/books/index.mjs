import { Books as BooksModel } from '../../models/index.mjs'

class Books {
    constructor(data) {
        this.models = {
            books: new BooksModel(data)
        }
    }

    async update(body) {
        const data = this.models.books.update(body)

        return data
    }

    async delete() {
        const data = this.models.books.delete()

        return data
    }

    async get() {
        const data = await this.models.books.get()

        return data
    }

    async getById() {
        const data = await this.models.books.getById()

        return data
    }

    async create(body) {
        const data = await this.models.books.create(body)

        return data
    }
}

export { Books }