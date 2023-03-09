import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TOrderDataSingle, TOrder, TOrderData } from '../../types/types'
import { orderApi as hostOrderApi } from '../../api/host/order-api'
import { orderApi as guestOrderApi } from '../../api/guest/order-api'

const initialState = {
    roles: {
        data: [] as TOrder[]
    },
    role: {} as TOrderDataSingle,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const bookReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ORDER/GET_ORDERS':
            return {
                ...state,
                roles: action.payload
            }
        case 'ORDER/GET_ORDER':
            return {
                ...state,
                role: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getOrders: (orders: TOrderData) => ({ type: 'ORDER/GET_ORDERS', payload: orders } as const),
    getOrder: (order: TOrderDataSingle) => ({ type: 'ORDER/GET_ORDER', payload: order } as const)
}

export const host = {
    getOrders: (): ThunkType => async (dispatch) => {
        const orders = await hostOrderApi.get()
        dispatch(actions.getOrders(orders))
    }
}

export const guest = {
    getOrders: (): ThunkType => async (dispatch) => {
        const orders = await guestOrderApi.get()
        dispatch(actions.getOrders(orders))
    },
    createOrder: (body: TOrder): ThunkType => async () => {
        await guestOrderApi.create(body)
    }
}

export default bookReducer