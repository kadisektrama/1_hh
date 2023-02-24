import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TProductData, TProduct } from '../../types/types'
import { productApi } from '../../api/product-api'

const initialState = {
    products: {
        data: [] as TProduct[]
    },
    product: null,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const productReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'PRODUCT/GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getProducts: (products: TProductData) => ({ type: 'PRODUCT/GET_PRODUCTS', payload: products } as const)
}

export const getProducts = (): ThunkType => async (dispatch) => {
    const products = await productApi.get()
    dispatch(actions.getProducts(products))
}

export default productReducer