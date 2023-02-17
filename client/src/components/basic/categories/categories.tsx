import React from 'react'

import SimpleLoader from '../../common/loader'
import { TCategoryData } from '../../../types/types'
import Cards from './cards/cards'

type TMapProps = {
    isLoaded: boolean,
    categories: TCategoryData
}

const Categories: React.FC<TMapProps> = (props) => {
    return (
        <div>
            {props.isLoaded ? <Cards categories={props.categories} /> : <SimpleLoader />}
        </div>
    )
}

export default Categories