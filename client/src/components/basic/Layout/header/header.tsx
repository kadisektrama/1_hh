import React from 'react'
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd'

const { Header } = Layout

const header = () => {
    const navbarItems = [
        {
            key: 'catalog',
            label: <Link to={'/categories'}>catalog</Link>,
        },
        {
            key: 'search',
            label: 'search',
        },
        {
            key: 'login',
            label: <Link to={'/auth/login'}>login</Link>,
        },
        {
            key: 'favourites',
            label: <Link to={'/favourites'}>favourites</Link>,
        },
        {
            key: 'orders',
            label: <Link to={'/orders'}>orders</Link>,
        },
        {
            key: 'box',
            label: <Link to={'/box'}>box</Link>,
        }
    ]

    return (
        <Header>
            <div style={{ display: 'flex' }}>
                <Link to={'/'}>ЛОГО</Link>
                <Menu theme="dark" mode='horizontal' defaultSelectedKeys={['2']} items={navbarItems} />
            </div>
        </Header>
    )
}

export default header