import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

// Layouts
import BasicLayout from './components/basic/Layout/layout'

// Basic
import Products from './components/basic/Products/productsContainer'
import Users from './components/basic/users/usersConteiner'
import Categories from './components/basic/categories/categoriesContainer'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<BasicLayout />}>
                <Route path="/" element={<Products />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:userId" element={<Users />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/login" element={<div>login</div>} />
                <Route path="/favourites" element={<div>favourites</div>} />
                <Route path="/routes" element={<div>routes</div>} />
                <Route path="/box" element={<div>box</div>} />
            </Route>
            <Route path='/admin'>

            </Route>

        </Route>
    )
)

const routerContainer = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default routerContainer