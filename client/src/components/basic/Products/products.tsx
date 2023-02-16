import React from 'react'

import Cards from './cards/cards'
import { TBookData } from '../../../types/types'
import SimpleLoader from '../../common/loader'

type MapPropsType = {
    isLoaded: boolean,
    products: TBookData,
}

const Products: React.FC<MapPropsType> = (props) => {
    return (
        <div>
            {props.isLoaded ? <Cards {...props} /> : <SimpleLoader />}
            <Cards {...props} />
        </div>
    )
}

export default Products