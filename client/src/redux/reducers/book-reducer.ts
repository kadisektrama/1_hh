import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TBook, TBookData } from '../../types/types'
import { bookApi } from '../../api/book-api'

const initialState = {
    books: {
        data: [] as TBook[]
    },
    book: {
        data: [] as TBook[]
    },
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const bookReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'BOOK/GET_BOOKS':
            return {
                ...state,
                books: action.payload
            }
        case 'BOOK/GET_BOOK':
            return {
                ...state,
                book: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getBooks: (books: TBookData) => ({ type: 'BOOK/GET_BOOKS', payload: books } as const),
    getBook: (book: TBookData) => ({ type: 'BOOK/GET_BOOK', payload: book } as const)
}

export const getBooks = (): ThunkType => async (dispatch) => {
    const books = await bookApi.get()
    dispatch(actions.getBooks(books))
}

export const getBook = (bookId: string): ThunkType => async (dispatch) => {
    const book = await bookApi.getById(bookId)
    dispatch(actions.getBook(book))
}

export const createBook = (body: TBook): ThunkType => async () => {
    await bookApi.create(body)
}

export const updateBook = (bookId: string, body: TBook): ThunkType => async () => {
    await bookApi.update(bookId, body)
}

export const deleteBook = (bookId: string): ThunkType => async (dispatch) => {
    await bookApi.delete(bookId)
    const books = await bookApi.get()
    dispatch(actions.getBooks(books))
}

export default bookReducer