import React, { useState, useEffect, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Update from './update'
import { TUser, TUserDataSingle } from '../../../../types/types'
import { AppStateType } from '../../../../redux/redux-store'
import { updateUser, getUser } from '../../../../redux/reducers/user-reducer'

type TDispatchProps = {
    getUser: (userId: string) => void,
    updateUser: (userId: string, body: TUser) => void
}

type TMapProps = {
    isLoaded: boolean,
    user: TUserDataSingle
}

type TUseParams = {
    userId: string
}

const CreateBookContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const navigate = useNavigate()
    const { userId } = useParams<TUseParams>()

    const updateUser = async (userId: string, body: TUser) => {
        await props.updateUser(userId, body)
        navigate('/admin/users')
    }

    useEffect(() => {
        Promise.all([props.getUser(userId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <>
            {isLoaded && (
                <Update
                    userId={userId!}
                    updateUser={(userId: string, body: TUser) => updateUser(userId, body)}
                    isLoaded={isLoaded}
                    user={props.user}
                />
            )}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        user: state.user.user,
    })
}

export default compose<ComponentType>(
    connect(mapStateToProps, { getUser, updateUser })
)(CreateBookContainer)

