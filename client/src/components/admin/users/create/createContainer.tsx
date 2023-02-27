import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useNavigate } from 'react-router-dom'

import CreateUser from './create'
import { TUser } from '../../../../types/types'
import { createUser } from '../../../../redux/reducers/user-reducer'

type TMapDispatchToProps = {
    createUser: (body: TUser) => void
}

const CreateUserContainer: React.FC<TMapDispatchToProps> = (props) => {
    const navigate = useNavigate()
    const createUser = async (body: TUser) => {
        Promise.all([props.createUser(body)])
            .then(() => navigate('/admin/users'))
    }

    return (
        <CreateUser
            createUser={createUser}
        />
    )
}

export default compose<React.ComponentType>(
    connect(null, { createUser })
)(CreateUserContainer)