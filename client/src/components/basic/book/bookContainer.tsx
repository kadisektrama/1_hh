import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { AppStateType } from '../../../redux/redux-store'
import Book from './book'
import { common } from '../../../redux/reducers/book-reducer'

const { getBook } = common

type TMapStateProps = ReturnType<typeof mapStateToProps>

export type TMapDispatchToProps = {
    getBook: (bookId: string) => void
}

type TUseParams = {
    bookId: string
}

const BookContainer: React.FC<TMapStateProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const { bookId } = useParams<TUseParams>()

    useEffect(() => {
        Promise.all([props.getBook(bookId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return <Book
        isLoaded={isLoaded}
        book={props.book}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        book: state.book.book,
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getBook })
)(BookContainer)