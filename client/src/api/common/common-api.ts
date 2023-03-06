import { instance } from './api'

export const commonApi = {
    identify() {
        return instance.get('/identify')
    }
}