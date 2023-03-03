import React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

// Tools
import Header from './header/header'
import Footer from './footer/footer'
import './layout.scss'

const { Content } = Layout

const layout = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <div className='content align'>
                    <Outlet />
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default layout