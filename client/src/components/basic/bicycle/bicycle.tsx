import React from 'react'

import { Button } from 'antd'

import { TBicycleDataSingle } from '../../../types/types'
import SimpleLoader from '../../common/loader'

type TMapStateProps = {
    isLoaded: boolean,
    bicycle: TBicycleDataSingle,
}

type TDispatchToProps = {
    createOrder: (bicycleId: string) => void
}

const bicycle: React.FC<TMapStateProps & TDispatchToProps> = (props) => {
    return (
        <div>
            {props.isLoaded ? (
                <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <div>Title</div>
                        <div>{props.bicycle.data.title}</div>
                        <div>Description</div>
                        <div>{props.bicycle.data.description}</div>
                        <div>Price</div>
                        <div>{props.bicycle.data.price}</div>
                        <div>Color</div>
                        <div>{props.bicycle.data.color}</div>
                        <div>Speeds_count</div>
                        <div>{props.bicycle.data.speeds_count}</div>
                        <div>Pedals</div>
                        <div>{props.bicycle.data.pedals}</div>
                        <div>Brakes</div>
                        <div>{props.bicycle.data.brakes}</div>
                        <div>Shock_absorber</div>
                        <div>{props.bicycle.data.shock_absorber}</div>
                        <div>Wheel</div>
                        <div>{props.bicycle.data.wheel}</div>
                        <div>Frame_size</div>
                        <div>{props.bicycle.data.frame_size}</div>
                        <div>Rider_height</div>
                        <div>{props.bicycle.data.rider_height}</div>
                    </div>

                    <Button onClick={() => props.createOrder(props.bicycle.data._id)}>Buy</Button>
                </>
            ) : (
                <SimpleLoader />
            )}
        </div>
    )
}

export default bicycle