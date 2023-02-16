import React from 'react'
import { TUserData } from '../../../types/types'
import Cards from './cards/cards'

type TMapProps = {
    isLoaded: boolean,
    users: TUserData
}

const Users: React.FC<TMapProps> = (props) => {
    return (
        <Cards users={props.users} />
    )
}

export default Users