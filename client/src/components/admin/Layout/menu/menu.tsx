import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

const App: React.FC = () => {
    const location = useLocation()

    return (
        <>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[location.pathname.split('/')[2]]}
                items={[
                    {
                        key: 'categories',
                        icon: <UploadOutlined />,
                        label: <Link to={'/admin/categories'}>Categories</Link>,
                    },
                    {
                        key: 'users',
                        icon: <UserOutlined />,
                        label: <Link to={'/admin/users'}>Users</Link>,
                    },
                    {
                        key: 'books',
                        icon: <VideoCameraOutlined />,
                        label: <Link to={'/admin/books'}>Books</Link>,
                    },
                ]}
            />
        </>
    )
}

export default App