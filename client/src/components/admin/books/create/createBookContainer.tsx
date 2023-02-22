import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { bookApi } from '../../../../api/book-api'
import CreateBook from './createBook'
import { TBook } from '../../../../types/types'

const CreateBookContainer: React.FC = (props) => {
    const navigate = useNavigate()
    const createBook = async (body: TBook) => {
        await bookApi.create(body)
        navigate('/admin/books')
    }

    return (
        <CreateBook
            createBook={(body: TBook) => createBook(body)}
        />
    )
}

export default compose(
    connect(null, null)
)(CreateBookContainer)

