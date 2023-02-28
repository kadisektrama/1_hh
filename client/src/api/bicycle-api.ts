import { instance } from './api'
import { TBicycle } from '../types/types'

export const bicycleApi = {
    get() {
        return instance.get('/bicycles').then(res => res.data)
    },
    getById(bicycleId: string) {
        return instance.get(`/bicycles/${bicycleId}`).then(res => res.data)
    },
    create(body: TBicycle) {
        return instance.post('/bicycles', body)
    },
    update(bicycleId: string, body: TBicycle) {
        return instance.put(`/bicycles/${bicycleId}`, body)
    },
    delete(bicycleId: string) {
        return instance.delete(`/bicycles/${bicycleId}`)
    }
}