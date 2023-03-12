import React, { useState, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Layout, theme } from 'antd'

import Menu from './menu/menu'
import './layout.scss'
import SimpleLoader from '../../common/loader'

const { Header, Sider, Content } = Layout

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    {collapsed ? (
                        <MenuUnfoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)} />
                    ) : (
                        <MenuFoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)} />
                    )}
                    {/*{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}*/}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Suspense fallback={<SimpleLoader />}>
                        <Outlet />
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    )
}

export default App