import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Create from './create'
import { TBicycle } from '../../../../types/types'
import { createBicycle } from '../../../../redux/reducers/bicycle-reducer'

type TDispatchProps = {
    createBicycle: (body: TBicycle) => void
}

const CreateContainer: React.FC<TDispatchProps> = (props) => {
    const navigate = useNavigate()
    const createBicycle = async (body: TBicycle) => {
        Promise.all([props.createBicycle(body)])
            .then(() => navigate('/admin/bicycles'))
    }

    return (
        <Create
            createBicycle={(body: TBicycle) => createBicycle(body)}
        />
    )
}

export default compose(
    connect(null, { createBicycle })
)(CreateContainer)

