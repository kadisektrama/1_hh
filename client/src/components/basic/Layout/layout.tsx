import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

// Tools
import Header from './header/headerContainer'
import Footer from './footer/footer'
import './layout.scss'
import SimpleLoader from '../../common/loader'

const layout = () => {
    return (
        <Layout style={{ display: "flex" }}>
            <header className='header-flex'>
                <Header />
            </header>
            <main className='main-flex'>
                <div className='content'>
                    <Suspense fallback={<SimpleLoader />}>
                        <Outlet />
                    </Suspense>
                </div>
            </main>
            <footer className='footer-flex'>
                <Footer />
            </footer>
        </Layout>
    )
}

export default layout