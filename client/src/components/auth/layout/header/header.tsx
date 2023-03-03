import React from 'react'
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd'

const { Header } = Layout

const header = () => {
    return (
        <Header>
            <div style={{ display: 'flex' }}>
                <Link to={'/'}>ЛОГО</Link>
            </div>
        </Header>
    )
}

export default header