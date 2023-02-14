import { InferActionsTypes } from '../redux-store'

const initialState = {
    initialized: false,
    products: [
        {
            id: 1,
            title: 'The sorrows of Satan',
            description: 'interesting',
        },
        {
            id: 2,
            title: 'WARHAMMER 40K',
            description: 'war',
        }
    ],
    product: null,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const productReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'PRODUCT/SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'PRODUCT/SET_INITIALIZED'} as const)
}

export default productReducer