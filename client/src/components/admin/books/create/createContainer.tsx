import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Create from './create'
import { TBook } from '../../../../types/types'
import { admin } from '../../../../redux/reducers/book-reducer'

const { createBook } = admin

type TDispatchProps = {
    createBook: (body: TBook) => void
}

const CreateContainer: React.FC<TDispatchProps> = (props) => {
    const navigate = useNavigate()
    const createBook = async (body: TBook) => {
        Promise.all([props.createBook(body)])
            .then(() => navigate('/admin/books'))
    }

    return (
        <Create
            createBook={(body: TBook) => createBook(body)}
        />
    )
}

export default compose(
    connect(null, {createBook})
)(CreateContainer)

