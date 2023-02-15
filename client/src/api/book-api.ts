import { instance } from './api'
import { TBook, TBookData } from '../types/types'

export const bookApi = {
    getById(bookId: number) {
        return instance.get(`books/${bookId}`)
    },
    get() {
        return instance.get<TBookData>('books').then(res => res.data)
    },
    create(body: TBook) {
        return instance.post('books', body)
    },
}