import lodash from 'lodash'

import { instance } from '../api'
import { TBook, TBookData } from '../../types/types'

export const bookApi = {
    getById(bookId: string) {
        return instance.get(`books/${bookId}`).then(res => res.data)
    },
    get() {
        return instance.get<TBookData>('books').then(res => res.data)
    },
    create(body: TBook) {
        return instance.post('books', body)
    },
    update(bookId: string, body: TBook) {
        return instance.put(`books/${bookId}`, lodash.omit(body, ['__t', '__v', '_id']))
    },
    delete(bookId: string) {
        return instance.delete(`books/${bookId}`)
    },
}