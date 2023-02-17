import { instance } from './api'
import { TUserData, TUser } from '../types/types'

export const userApi = {
    getById(userId: number): Promise<any> {
        return instance.get(`books/${userId}`)
    },
    get() {
        return instance.get<TUserData>(`users`).then(res => res.data)
    },
    create(body: TUser): Promise<any> {
        return instance.post(`users`, body)
    }
}