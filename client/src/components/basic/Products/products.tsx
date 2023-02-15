import React from 'react'

import Cards from './cards/cards'
import { TBookData } from '../../../types/types'

type MapPropsType = {
    isLoaded: boolean,
    products: TBookData,
    product: string | null,
}

const Products: React.FC<MapPropsType> = (props) => {
    return (
        <div>
            <Cards {...props} />
        </div>
    )
}

export default Products