import React from 'react'

import Cards from './cards/cards'
import { TProductData} from '../../../types/types'
import SimpleLoader from '../../common/loader'

type MapPropsType = {
    isLoaded: boolean,
    products: TProductData,
}

const Products: React.FC<MapPropsType> = (props) => {
    return (
        <div className='recommendation_container'>
            {props.isLoaded ? <Cards {...props} /> : <SimpleLoader />}
        </div>
    )
}

export default Products