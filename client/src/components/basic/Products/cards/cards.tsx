import React from 'react'

import { TBookData } from '../../../../types/types'
import Card from './card/card'

type PropsType = {
    products: TBookData,
}

const cards: React.FC<PropsType> = (props) => {
    return (
        <>
            {props.products.data.map(product => <Card key={product._id} {...product} />)}
        </>
    )
}

export default cards