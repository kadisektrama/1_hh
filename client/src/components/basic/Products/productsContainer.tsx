import Products from './products'
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/redux-store'

type MapPropsType = ReturnType<typeof mapStateToProps>

const ProductsContainer: React.FC<MapPropsType> = (props) => {
    return <Products
        products={props.products}
        product={props.product}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        products: state.product.products,
        product: state.product.product,
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, null)
)(ProductsContainer)