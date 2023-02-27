import React, { useState, useEffect, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Update from './update'
import { TBook, TBookDataSingle } from '../../../../types/types'
import { AppStateType } from '../../../../redux/redux-store'
import { updateBook, getBook } from '../../../../redux/reducers/book-reducer'

type TDispatchProps = {
    getBook: (bookId: string) => void,
    updateBook: (bookId: string, body: TBook) => void
}

type TMapProps = {
    isLoaded: boolean,
    book: TBookDataSingle
}

type TUseParams = {
    bookId: string
}

const CreateBookContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const navigate = useNavigate()
    const { bookId } = useParams<TUseParams>()

    const updateBook = async (bookId: string, body: TBook) => {
        await props.updateBook(bookId, body)
        navigate('/admin/books')
    }

    useEffect(() => {
        Promise.all([props.getBook(bookId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <>
            {isLoaded && (
                <Update
                    bookId={bookId!}
                    updateBook={(bookId: string, body: TBook) => updateBook(bookId, body)}
                    isLoaded={isLoaded}
                    book={props.book}
                />
            )}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        book: state.book.book,
    })
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getBook, updateBook})
)(CreateBookContainer)

