import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { AppStateType } from '../../../redux/redux-store'
import Bicycle from './bicycle'
import { common } from '../../../redux/reducers/bicycle-reducer'
import { guest as guestOrders } from '../../../redux/reducers/order-reducer'

const { getBicycle } = common
const { createOrder } = guestOrders

type TMapStateProps = ReturnType<typeof mapStateToProps>

export type TMapDispatchToProps = {
    getBicycle: (bicycleId: string) => void,
    createOrder: (bicycleId: string) => void,
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

    const createOrder = (bicycleId: string) => {
        Promise.all([props.createOrder(bicycleId)])
            .then(() => document.location = document.location.origin)
    }

    return <Bicycle
        isLoaded={isLoaded}
        bicycle={props.bicycle}
        createOrder={createOrder}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        bicycle: state.bicycle.bicycle,
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getBicycle, createOrder })
)(BicycleContainer)