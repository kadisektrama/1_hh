import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

import BasicLayout from './components/basic/Layout/layout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<BasicLayout />}>
            <Route path="/" element={<div>products</div>} />
            {/* ... etc. */}
        </Route>
    )
)

const routerContainer = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default routerContainer