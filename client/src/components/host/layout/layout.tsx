import React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

// Tools
import Header from './header/header'
import Footer from './footer/footer'
import './layout.scss'

const layout = () => {
    return (
        <Layout style={{ display: "flex" }}>
            <header className='header-flex'>
                <Header />
            </header>
            <main className='main-flex'>
                <div className='content'>
                    <Outlet />
                </div>
            </main>
            <footer className='footer-flex'>
                <Footer />
            </footer>
        </Layout>
    )
}

export default layout