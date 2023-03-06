import { instance } from '../common/api'
import { TProductData } from '../../types/types'

export const productApi = {
    get() {
        return instance.get<TProductData>('products').then(res => res.data)
    },
}