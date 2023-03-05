import { instance } from './api'

export const appApi = {
    identify() {
        return instance.get('/identify')
    }
}