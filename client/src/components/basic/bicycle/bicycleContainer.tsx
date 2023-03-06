import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { AppStateType } from '../../../redux/redux-store'
import Bicycle from './bicycle'
import { common } from '../../../redux/reducers/bicycle-reducer'

const { getBicycle } = common

type TMapStateProps = ReturnType<typeof mapStateToProps>

export type TMapDispatchToProps = {
    getBicycle: (bicycleId: string) => void
}

type TUseParams = {
    bicycleId: string
}

const BicycleContainer: React.FC<TMapStateProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const { bicycleId } = useParams<TUseParams>()

    useEffect(() => {
        Promise.all([props.getBicycle(bicycleId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return <Bicycle
        isLoaded={isLoaded}
        bicycle={props.bicycle}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        bicycle: state.bicycle.bicycle,
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getBicycle })
)(BicycleContainer)