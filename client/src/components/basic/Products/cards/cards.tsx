import React from 'react'

import { product } from '../products'
import Card from './card/card'

type PropsType = {
    products: product[],
}

const cards: React.FC<PropsType> = (props) => {
    return (
        <>
            {props.products.map(product => <Card key={product.id} {...product} />)}
        </>
    )
}

export default cards