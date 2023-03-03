import { BaseThunkType, InferActionsTypes } from '../redux-store'
import { TCategory, TCategoryData, TCategoryDataSingle } from '../../types/types'
import { categoryApi } from '../../api/admin/category-api'

const initialState = {
    categories: {
        data: [] as TCategory[]
    },
    category: {} as TCategoryDataSingle,
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
        case 'APP/GET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getCategories: (categories: TCategoryData) => ({ type: 'APP/GET_CATEGORIES', payload: categories } as const),
    getCategory: (category: TCategoryDataSingle) => ({ type: 'APP/GET_CATEGORY', payload: category } as const)
}

export const getCategories = (): ThunkType => async (dispatch) => {
    const categories = await categoryApi.get()
    dispatch(actions.getCategories(categories))
}

export const getCategory = (categoryId: string): ThunkType => async (dispatch) => {
    const category = await categoryApi.getById(categoryId)
    dispatch(actions.getCategory(category))
}

export const createCategory = (body: TCategory): ThunkType => async (dispatch) => {
    await categoryApi.create(body)
}

export const updateCategory = (categoryId: string, body: TCategory): ThunkType => async (dispatch) => {
    await categoryApi.update(categoryId, body)
}

export const deleteCategory = (categoryId: string): ThunkType => async (dispatch) => {
    await categoryApi.delete(categoryId)
    const categories = await categoryApi.get()
    dispatch(actions.getCategories(categories))
}

export default categoryReducer