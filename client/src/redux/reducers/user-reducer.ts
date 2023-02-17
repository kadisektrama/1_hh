import { BaseThunkType, InferActionsTypes } from '../redux-store'
import { TUser, TUserData } from '../../types/types'
import { userApi } from '../../api/user-api'

const initialState = {
    users: {
        data: [] as TUser[]
    },
    user: null,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const userReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/GET_USERS':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getUsers: (users: TUserData) => ({ type: 'APP/GET_USERS', payload: users } as const)
}

export const getUsers = (): ThunkType => async (dispatch) => {
    const users = await userApi.get()
    dispatch(actions.getUsers(users))
}


export default userReducer