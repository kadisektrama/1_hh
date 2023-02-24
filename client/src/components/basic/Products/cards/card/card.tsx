import React from 'react'

import { Card } from 'antd'
import { Typography } from 'antd'

import { TProduct } from '../../../../../types/types'

const { Title, Paragraph } = Typography

const card: React.FC<TProduct> = (props) => {
    return (
        <Card
            style={{ width: '250px' }}
            className='card_cell'
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
        >
            <Title className='text-inline' level={4}>{props.title}</Title>
            <Paragraph>{props.description}</Paragraph>
        </Card>
    )
}

export default card