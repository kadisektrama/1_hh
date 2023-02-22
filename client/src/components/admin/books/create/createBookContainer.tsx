import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CreateBook from './createBook'
import { TBook } from '../../../../types/types'
import { createBook } from '../../../../redux/reducers/book-reducer'

type TDispatchProps = {
    createBook: (body: TBook) => void
}

const CreateBookContainer: React.FC<TDispatchProps> = (props) => {
    const navigate = useNavigate()
    const createBook = async (body: TBook) => {
        Promise.all([props.createBook(body)])
            .then(() => navigate('/admin/books'))
    }

    return (
        <CreateBook
            createBook={(body: TBook) => createBook(body)}
        />
    )
}

export default compose(
    connect(null, {createBook})
)(CreateBookContainer)

