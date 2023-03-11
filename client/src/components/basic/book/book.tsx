import React from 'react'

import { Button } from 'antd'

import { TBookDataSingle } from '../../../types/types'
import SimpleLoader from '../../common/loader'

type TMapStateProps = {
    isLoaded: boolean,
    book: TBookDataSingle
}

type TDispatchToProps = {
    createOrder: (bicycleId: string) => void
}

const book: React.FC<TMapStateProps & TDispatchToProps> = (props) => {
    return (
        <div>
            {props.isLoaded ? (
                <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <div>Title</div>
                        <div>{props.book.data.title}</div>
                        <div>Description</div>
                        <div>{props.book.data.description}</div>
                        <div>Price</div>
                        <div>{props.book.data.price}</div>
                        <div>Author</div>
                        <div>{props.book.data.author}</div>
                    </div>

                    <Button onClick={() => props.createOrder(props.book.data._id)}>Buy</Button>
                </>
            ) : (
                <SimpleLoader />
            )}
        </div>
    )
}

export default book