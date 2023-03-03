import lodash from 'lodash'

import { instance } from '../api'
import { TUserData, TUser } from '../../types/types'

export const userApi = {
    getById(userId: string): Promise<any> {
        return instance.get(`users/${userId}`).then(res => res.data)
    },
    get() {
        return instance.get<TUserData>(`users`).then(res => res.data)
    },
    create(body: TUser): Promise<any> {
        return instance.post(`users`, body)
    },
    update(userId: string, body: TUser): Promise<any> {
        return instance.put(`users/${userId}`, lodash.omit(body, ['__t', '__v', '_id']))
    },
    delete(userId: string) {
        return instance.delete(`users/${userId}`)
    }
}