import { BaseThunkType, InferActionsTypes } from '../redux-store'
import { TUser, TUserData, TUserDataSingle } from '../../types/types'
import { userApi } from '../../api/admin/user-api'
import { appApi } from '../../api/app-api'

const initialState = {
    users: {
        data: [] as TUser[]
    },
    user: {} as TUserDataSingle
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
        case 'APP/GET_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getUsers: (users: TUserData) => ({ type: 'APP/GET_USERS', payload: users } as const),
    getUser: (user: TUserDataSingle) => ({ type: 'APP/GET_USER', payload: user } as const)
}

export const getUsers = (): ThunkType => async (dispatch) => {
    const users = await userApi.get()
    dispatch(actions.getUsers(users))
}

export const getUser = (userId: string): ThunkType => async (dispatch) => {
    const user = await userApi.getById(userId)
    dispatch(actions.getUser(user))
}

export const identify = (): ThunkType => async (dispatch) => {
    const user = await appApi.identify()
    dispatch(actions.getUser(user))
}

export const createUser = (body: TUser): ThunkType => async(dispatch) => {
    await userApi.create(body)
}

export const updateUser = (userId: string, body: TUser): ThunkType => async (dispatch) => {
    const users = await userApi.update(userId, body)
    dispatch(actions.getUsers(users))
}

export const deleteUser = (userId: string): ThunkType => async (dispatch) => {
    await userApi.delete(userId)
    const users = await userApi.get()
    dispatch(actions.getUsers(users))
}

export default userReducer