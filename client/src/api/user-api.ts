import { instance } from './api'

export const userApi = {
    getById(userId: number): Promise<any> {
        return instance.get(`books/${userId}`)
    },
    get(): Promise<any> {
        return instance.get(`users`)
    },
    create(body: Object): Promise<any> {
        return instance.post(`users`, body)
    }
}