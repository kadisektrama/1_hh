import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TBook, TBookData } from '../../types/types'
import { bookApi } from '../../api/book-api'

const initialState = {
    initialized: false,
    products: {
        data: [] as TBook[]
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
    getProducts: (products: TBookData) => ({ type: 'PRODUCT/GET_PRODUCTS', payload: products } as const)
}

export const getProducts = (): ThunkType => async (dispatch) => {
    const products = await bookApi.get()
    dispatch(actions.getProducts(products))
}

export default productReducer