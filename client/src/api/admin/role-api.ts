import { instance } from '../common/api'

export const roleApi = {
    get() {
        return instance.get('/roles').then(res => res.data)
    }
}