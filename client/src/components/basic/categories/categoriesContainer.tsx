import { connect } from 'react-redux'
import { compose } from 'redux'
import React, { useState, useEffect } from 'react'

import { AppStateType } from '../../../redux/redux-store'
import Categories from './categories'
import { TCategoryData } from '../../../types/types'
import { getCategories } from '../../../redux/reducers/category-reducer'

type TMapProps = {
    categories: TCategoryData
}

export type TDispatchProps = {
    getCategories: () => void
}

const CategoriesContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        Promise.all([props.getCategories()])
            .then(() => setIsLoaded(true))
    }, [])

    return <Categories
        isLoaded={isLoaded}
        categories={props.categories}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        categories: state.category.categories
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getCategories })
)(CategoriesContainer)