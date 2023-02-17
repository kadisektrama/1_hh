import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Products from './products'

const ProductsContainer: React.FC = () => {
    return <Products />
}

export default compose<React.ComponentType> (
    connect(null ,null)
)(ProductsContainer)

