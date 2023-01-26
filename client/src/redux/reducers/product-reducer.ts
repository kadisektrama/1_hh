import { InferActionsTypes } from '../redux-store'

const initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appProduct = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'APP/SET_INITIALIZED'} as const)
}

export default appProduct