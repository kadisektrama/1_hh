import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Registration from './registration'

const RegistrationContainer: React.FC = () => {
    return (
        <Registration
            register={() => console.log('zxc')}
        />
    )
}

export default compose<React.ComponentType>(
    connect(null, null)
)(RegistrationContainer)