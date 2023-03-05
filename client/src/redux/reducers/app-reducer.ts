import { BaseThunkType, InferActionsTypes } from '../redux-store'
import { appApi } from '../../api/app-api'

const initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET_INITIALIZED':
            return {
                ...state,
                initialized: action.payload,
            }
        default:
            return state
    }
}

export const actions = {
    setInitialize: (isInitialized: boolean) => ({ type: 'APP/SET_INITIALIZED', payload: isInitialized } as const)
}


export const setInitialize = (isInitialize: boolean) => (dispatch: any) => {
    dispatch(actions.setInitialize(isInitialize))
}


export default appReducer