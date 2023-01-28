import { books } from '../../odm/index.mjs'

export class Books {
    constructor(data) {
        this.data = data
    }

    async create() {
        const data = await books.create(this.data)

        return data
    }
}