import { BaseThunkType, InferActionsTypes } from '../redux-store'
import { TCategory, TCategoryData } from '../../types/types'
import { categoryApi } from '../../api/category-api'

const initialState = {
    categories: {
        data: [] as TCategory[]
    },
    category: null,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const categoryReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getCategories: (categories: TCategoryData) => ({ type: 'APP/GET_CATEGORIES', payload: categories } as const)
}

export const getCategories = (): ThunkType => async (dispatch) => {
    const categories = await categoryApi.get()
    console.log(categories)
    dispatch(actions.getCategories(categories))
}


export default categoryReducer