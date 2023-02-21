import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

// Layouts
import BasicLayout from './components/basic/Layout/layout'
import AdminLayout from './components/admin/Layout/layout'

// Basic
import Products from './components/basic/Products/productsContainer'
import Users from './components/basic/users/usersConteiner'
import Categories from './components/basic/categories/categoriesContainer'

// Admin
import AdminBooks from './components/admin/books/booksContainer'
import AdminCreateBook from './components/admin/books/create/createBookContainer'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<BasicLayout />}>
                <Route path="/" element={<Products />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:userId" element={<Users />} /> TODO
                <Route path="/categories" element={<Categories />} />
                <Route path="/login" element={<div>login</div>} /> TODO
                <Route path="/favourites" element={<div>favourites</div>} /> TODO
                <Route path="/routes" element={<div>routes</div>} /> TODO
                <Route path="/box" element={<div>box</div>} /> TODO
            </Route>
            <Route path='/admin' element={<AdminLayout />}>
                <Route path='categories' element={<div>categories</div>} />
                <Route path='users' element={<div>users</div>} />
                <Route path='books' element={<AdminBooks />} />
                <Route path='books/create' element={<AdminCreateBook />} />
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