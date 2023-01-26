import React from 'react'
import { Outlet } from 'react-router-dom'

// Tools
import Header from './Header/header'
import Footer from './Footer/footer'
import { Layout } from 'antd'

const { Content } = Layout

const layout = () => {
    return (
        <Layout>
            <Header />
            <Content className='layout'>
                <div>zxc</div>
                <Outlet />
            </Content>
            <Footer />
        </Layout>
    )
}

export default layout