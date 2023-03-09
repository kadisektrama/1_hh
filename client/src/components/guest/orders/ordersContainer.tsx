import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/redux-store'
import Orders from './orders'

const OrdersContainer: React.FC = (props) => {
    return <Orders />
}

export default compose<React.ComponentType>(
    connect(null, null)
)(OrdersContainer)