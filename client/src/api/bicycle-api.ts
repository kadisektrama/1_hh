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
        return instance.post('/bicycles').then(res => res.data)
    },
    update(bicycleId: string, body: any) {
        return instance.put('/bicycles').then(res => res.data)
    },
    delete(bicycleId: string) {
        return instance.delete('/bicycles').then(res => res.data)
    }
}