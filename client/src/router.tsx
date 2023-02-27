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
import Bicycle from './components/basic/bicycle/bicycleContainer'
import Book from './components/basic/book/bookContainer'

// Admin
import AdminBooks from './components/admin/books/booksContainer'
import AdminCreateBook from './components/admin/books/create/createBookContainer'
import AdminUpdateBook from './components/admin/books/update/updateBookContainer'
import AdminViewBook from './components/admin/books/view/viewBookContainer'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<BasicLayout />}>
                <Route path="/" element={<Products />} />
                <Route path="/products" element={<Products />} />
                <Route path="/books/:bookId" element={<Book />} /> TODO
                <Route path="/bicycles/:bicycleId" element={<Bicycle />} /> TODO
                <Route path="/users" element={<Users />} />
                <Route path="/users/:userId" element={<Users />} /> TODO
                <Route path="/categories" element={<Categories />} />
                <Route path="/login" element={<div>login</div>} /> TODO
                <Route path="/favourites" element={<div>favourites</div>} /> TODO
                <Route path="/routes" element={<div>routes</div>} /> TODO
                <Route path="/box" element={<div>box</div>} /> TODO
            </Route>
            <Route path='/admin' element={<AdminLayout />}>
                <Route path='categories' element={<div>categories</div>} /> TODO
                <Route path='categories/create' element={<div>create category</div>} /> TODO
                <Route path='categories/:categoryId/update' element={<div>update category</div>} /> TODO

                <Route path='users' element={<div>users</div>} /> TODO
                <Route path='users/create' element={<div>create user</div>} /> TODO
                <Route path='users/:userId/update' element={<div>update user</div>} /> TODO
                <Route path='users/:userId/view' element={<div>view user</div>} /> TODO

                <Route path='books' element={<AdminBooks />} />
                <Route path='books/create' element={<AdminCreateBook />} />
                <Route path='books/:bookId/update' element={<AdminUpdateBook />} />
                <Route path='books/:bookId/view' element={<AdminViewBook />} />

                <Route path='bicycles' element={<div>bicycles</div>} /> TODO
                <Route path='bicycles/create' element={<div>create bicycle</div>} /> TODO
                <Route path='bicycles/:bicycleId/update' element={<div>update bicycle</div>} /> TODO
                <Route path='bicycles/:bicycleId/view' element={<div>view bicycle</div>} /> TODO

                <Route path='currencies' element={<div>currencies</div>} /> TODO
                <Route path='currencies/create' element={<div>create currency</div>} /> TODO
                <Route path='currencies/:currencyId/update' element={<div>update currency</div>} /> TODO
                <Route path='currencies/:currencyId/view' element={<div>view currency</div>} /> TODO
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