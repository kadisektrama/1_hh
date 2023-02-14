import React from 'react'

import Cards from './cards/cards'

export type product = {
  id: number,
  title: string,
  description: string,
}

type PropsType = {
    products: product[],
    product: string | null,
}

const Products: React.FC<PropsType> = (props) => {
    console.log(props, process.env)

    return (
        <div>
            <Cards {...props} />
        </div>
    )
}

export default Products