import lodash from 'lodash'

import { instance } from './api'
import { TOrder, TOrderData } from '../../types/types'

export const orderApi = {
    get() {
        return instance.get<TOrderData>('orders').then(res => res.data)
    },
    create(body: TOrder) {
        return instance.post('orders', body)
    },
}