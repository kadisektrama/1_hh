import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TBook, TBookData } from '../../types/types'
import { bookApi } from '../../api/book-api'

const initialState = {
    books: {
        data: [] as TBook[]
    },
    book: null,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const bookReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'PRODUCT/GET_BOOKS':
            return {
                ...state,
                books: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getProducts: (books: TBookData) => ({ type: 'PRODUCT/GET_BOOKS', payload: books } as const)
}

export const getBooks = (): ThunkType => async (dispatch) => {
    const products = await bookApi.get()
    dispatch(actions.getProducts(products))
}

export default bookReducer