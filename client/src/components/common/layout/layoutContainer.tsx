import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import cookie from 'cookie'

import Layout from './layout'
import { identify } from '../../../redux/reducers/user-reducer'

type TMapDispatchToProps = {
    identify: () => void
}

const LayoutContainer: React.FC<TMapDispatchToProps> = (props) => {
    useEffect(() => {
        Promise.all([props.identify()])
    }, [])

    return (
        <Layout />
    )
}

export default compose<React.ComponentType>(
    connect(null, { identify })
)(LayoutContainer)
