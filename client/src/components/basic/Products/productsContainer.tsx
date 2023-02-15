import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/redux-store'
import Products from './products'
import { getProducts } from '../../../redux/reducers/product-reducer'

type MapPropsType = ReturnType<typeof mapStateToProps>

export type DispatchPropsType = {
    getProducts: () => void
}

const ProductsContainer: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        props.getProducts()
        setIsLoaded(true)
    }, [])

    return <Products
        isLoaded={isLoaded}
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
    connect(mapStateToProps, {getProducts})
)(ProductsContainer)