import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'

import appReducer from './reducers/app-reducer'
import userReducer from './reducers/user-reducer'
import productReducer from './reducers/product-reducer'
import categoryReducer from './reducers/category-reducer'
import bookReducer from './reducers/book-reducer'

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    book: bookReducer,
})

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


export default  store