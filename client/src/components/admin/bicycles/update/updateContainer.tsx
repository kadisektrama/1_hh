import React, { useState, useEffect, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Update from './update'
import { TBicycle, TBicycleDataSingle } from '../../../../types/types'
import { AppStateType } from '../../../../redux/redux-store'
import { updateBicycle, getBicycle } from '../../../../redux/reducers/bicycle-reducer'

type TDispatchProps = {
    getBicycle: (bicycleId: string) => void,
    updateBicycle: (bicycleId: string, body: TBicycle) => void
}

type TMapProps = {
    isLoaded: boolean,
    bicycle: TBicycleDataSingle
}

type TUseParams = {
    bicycleId: string
}

const CreateBookContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const navigate = useNavigate()
    const { bicycleId } = useParams<TUseParams>()

    const updateBicycle = async (bicycleId: string, body: TBicycle) => {
        await props.updateBicycle(bicycleId, body)
        navigate('/admin/bicycles')
    }

    useEffect(() => {
        Promise.all([props.getBicycle(bicycleId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <>
            {isLoaded && (
                <Update
                    bicycleId={bicycleId!}
                    updateBicycle={(bicycleId: string, body: TBicycle) => updateBicycle(bicycleId, body)}
                    isLoaded={isLoaded}
                    bicycle={props.bicycle}
                />
            )}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        bicycle: state.bicycle.bicycle,
    })
}

export default compose<ComponentType>(
    connect(mapStateToProps, { getBicycle, updateBicycle })
)(CreateBookContainer)

