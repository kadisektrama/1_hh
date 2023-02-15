import React from 'react'

import { Card } from 'antd'

import { TBook } from '../../../../../types/types'

const { Meta } = Card

const card: React.FC<TBook> = (props) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
        >
            <Meta title={props.title} description={props.description} />
        </Card>
    )
}

export default card