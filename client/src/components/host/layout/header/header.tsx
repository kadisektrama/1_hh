import React from 'react'
import { Link } from 'react-router-dom'
import cookie from 'cookie'

import type { MenuProps } from 'antd'
import { Button, Avatar, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'

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
        label: <div onClick={() => {
            document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
            document.location.reload()
        }}>logout</div>,
        key: 'logout',
    },
]

const header = () => {
    return (
        <div style={{ display: 'flex', height: '64px', alignItems: 'center', margin: '0 30px 0 30px' }}>
            <Link to={'/'}><span style={{ fontSize: '30px' }} >SLAANESh</span></Link>

            <div className='flex-justify-content-flex-end' style={{ width: '100%', margin: 0 }}>
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
    )
}

export default header