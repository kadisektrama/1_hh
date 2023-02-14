import { instance } from './api'
import axios from 'axios'

export const userApi = {
    getByHash(userId: number): Promise<any> {
        return instance.get(`books/${userId}`)
    },
    getAll(): Promise<any> {
        return instance.get(`users`)
    },
    create(body: Object): Promise<any> {
        return instance.post(`users`, body)
    }
}