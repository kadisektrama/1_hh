import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Login from './login'

const LoginContainer: React.FC = () => {
    return (
        <Login
            login={() => console.log('zxc')}
        />
    )
}

export default compose<React.ComponentType>(
    connect(null, null)
)(LoginContainer)