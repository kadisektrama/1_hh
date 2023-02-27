import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TBicycle, TBicycleData, TBicycleDataSingle } from '../../types/types'
import { bicycleApi } from '../../api/bicycle-api'

const initialState = {
    bicycles: {
        data: [] as TBicycle[]
    },
    bicycle: {} as TBicycleDataSingle,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const bicycleReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'BICYCLE/GET_BICYCLES':
            return {
                ...state,
                bicycles: action.payload
            }
        case 'BICYCLE/GET_BICYCLE':
            return {
                ...state,
                bicycle: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getBicycles: (bicycles: TBicycleData) => ({ type: 'BICYCLE/GET_BICYCLES', payload: bicycles } as const),
    getBicycle: (bicycle: TBicycleDataSingle) => ({ type: 'BICYCLE/GET_BICYCLE', payload: bicycle } as const)
}

export const getBicycles = (): ThunkType => async (dispatch) => {
    const bicycles = await bicycleApi.get()
    dispatch(actions.getBicycles(bicycles))
}

export const getBicycle = (bicycleId: string): ThunkType => async (dispatch) => {
    const bicycle = await bicycleApi.getById(bicycleId)
    dispatch(actions.getBicycle(bicycle))
}

export const createBicycle = (body: TBicycle): ThunkType => async () => {
    await bicycleApi.create(body)
}

export const updateBicycle = (bicycleId: string, body: TBicycle): ThunkType => async () => {
    await bicycleApi.update(bicycleId, body)
}

export const deleteBicycle = (bicycleId: string): ThunkType => async (dispatch) => {
    await bicycleApi.delete(bicycleId)
    const bicycles = await bicycleApi.get()
    dispatch(actions.getBicycles(bicycles))
}

export default bicycleReducer