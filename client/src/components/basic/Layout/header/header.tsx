import React from 'react'
import { Link } from 'react-router-dom'
import cookie from 'cookie'

import type { MenuProps } from 'antd'
import { Layout, Button, Space, Avatar, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Header } = Layout

const cookies = cookie.parse(document.cookie)

const items: MenuProps['items'] = [
    {
        label: <Link to={'/favourites'}><Button type="text">favourites</Button></Link>,
        key: 'favourites',
    },
    {
        label: <Link to={'/orders'}><Button type="text">orders</Button></Link>,
        key: 'orders',
    },
    {
        label: <Link to={'/box'}><Button type="text">box</Button></Link>,
        key: 'box',
    },
    {
        type: 'divider',
    },
    {
        label: <Link to={'/'}><Button type="text">logout</Button></Link>,
        key: 'logout',
    },
]

const header = () => {
    return (
        <Header style={{ background: 'white' }}>
            <div style={{ display: 'flex', height: '64px' }}>
                <Link to={'/'}><span style={{ fontSize: '30px' }} >SLAANESh</span></Link>

                <div className='flex-justify-content-space-between' style={{ width: '100%', margin: 0 }}>
                    <Space size={10} style={{ marginLeft: '50px' }}>
                        <Link to={'/categories'}><Button type="text">catalog</Button></Link>
                        <span>search</span>
                    </Space>

                    <div>
                        {cookies.token ? (
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <Avatar style={{ cursor: 'pointer' }} icon={<UserOutlined />} />
                            </Dropdown>
                        ) : (
                            <Link to={'/auth/login'}>login</Link>
                        )}
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default header