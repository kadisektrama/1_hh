import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import Registration from './registration'

export type TMapDispatchToProps = {
    register: (body: any) => void
}

const BookContainer: React.FC<TMapDispatchToProps> = (props) => {
    return <Registration
        register={props.register}
    />
}

export default compose<React.ComponentType>(
    connect(null, null)
)(BookContainer)