import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Products from './books'
import { AppStateType } from '../../../redux/redux-store'
import { TBookData } from '../../../types/types'
import { getBooks } from '../../../redux/reducers/book-reducer'

type TMapProps = {
    books: TBookData
}

export type TDispatchProps = {
    getBooks: () => void
}

const BooksContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        Promise.all([props.getBooks()])
            .then(() => setIsLoaded(true))
    }, [])

    return <Products
        isLoaded={isLoaded}
        books={props.books}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        books: state.book.books,
    })
}

export default compose<React.ComponentType> (
    connect(mapStateToProps , {getBooks})
)(BooksContainer)

