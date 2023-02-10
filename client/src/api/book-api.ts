import { instance } from "./api";

export const bookApi = {
    getByHash(bookId: number) {
        return instance.get(`books/${bookId}`)
    },
    getAll() {
        return instance.get(`books`)
    },
    create(body: Object) {
        return instance.post(`books`, {})
    },
}