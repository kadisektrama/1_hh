import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TCurrency, TCurrencyData, TCurrencyDataSingle } from '../../types/types'
import { currencyApi } from '../../api/currency-api'

const initialState = {
    currencies: {
        data: [] as TCurrency[]
    },
    currency: {} as TCurrencyDataSingle,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const bicycleReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'BICYCLE/GET_BICYCLES':
            return {
                ...state,
                currencies: action.payload
            }
        case 'BICYCLE/GET_BICYCLE':
            return {
                ...state,
                currency: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getCurrencies: (currencies: TCurrencyData) => ({ type: 'BICYCLE/GET_BICYCLES', payload: currencies } as const),
    getCurrency: (currency: TCurrencyDataSingle) => ({ type: 'BICYCLE/GET_BICYCLE', payload: currency } as const)
}

export const getCurrencies = (): ThunkType => async (dispatch) => {
    const currencies = await currencyApi.get()
    dispatch(actions.getCurrencies(currencies))
}

export const getCurrency = (currencyId: string): ThunkType => async (dispatch) => {
    const currency = await currencyApi.getById(currencyId)
    dispatch(actions.getCurrency(currency))
}

export const createCurrency = (body: TCurrency): ThunkType => async () => {
    await currencyApi.create(body)
}

export const updateCurrency = (currencyId: string, body: TCurrency): ThunkType => async () => {
    await currencyApi.update(currencyId, body)
}

export const deleteCurrency = (currencyId: string): ThunkType => async (dispatch) => {
    await currencyApi.delete(currencyId)
    const currencies = await currencyApi.get()
    dispatch(actions.getCurrencies(currencies))
}

export default bicycleReducer