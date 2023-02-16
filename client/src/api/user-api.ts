import { instance } from './api'
import { TUserData } from '../types/types'

export const userApi = {
    getById(userId: number): Promise<any> {
        return instance.get(`books/${userId}`)
    },
    get() {
        return instance.get<TUserData>(`users`).then(res => res.data)
    },
    create(body: TUserData): Promise<any> {
        return instance.post(`users`, body)
    }
}