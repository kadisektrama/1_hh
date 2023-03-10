import React from 'react'

import Cards from './cards/cards'
import Filters from './filters/filters'
import { TProductData} from '../../../types/types'
import SimpleLoader from '../../common/loader'

type MapPropsType = {
    isLoaded: boolean,
    products: TProductData,
}

const Products: React.FC<MapPropsType> = (props) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr' }}>
            <Filters />

            <div className='recommendation_container'>
                {props.isLoaded ? <Cards {...props} /> : <SimpleLoader />}
            </div>
        </div>
    )
}

export default Products