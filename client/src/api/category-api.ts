import { instance } from './api'
import { TCategoryData, TCategory } from '../types/types'

export const categoryApi = {
    getById(categoryId: number): Promise<any> {
        return instance.get(`categories/${categoryId}`)
    },
    get() {
        return instance.get<TCategoryData>(`categories`).then(res => res.data)
    },
    create(body: TCategory): Promise<any> {
        return instance.post(`categories`, body)
    }
}