import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

// Layouts
import Layout from './components/common/layout/layoutContainer'
import BasicLayout from './components/basic/Layout/layout'
import AdminLayout from './components/admin/Layout/layout'
import AuthLayout from './components/auth/layout/layout'
import HostLayout from './components/host/layout/layout'

// Basic
import Products from './components/basic/Products/productsContainer'
import Users from './components/basic/users/usersConteiner'
import Categories from './components/basic/categories/categoriesContainer'
import Bicycle from './components/basic/bicycle/bicycleContainer'
import Book from './components/basic/book/bookContainer'

// Admin
import AdminCategories from './components/admin/categories/categoriesContainer'
import AdminCreateCategory from './components/admin/categories/create/createContainer'
import AdminUpdateCategory from './components/admin/categories/update/updateContainer'
import AdminViewCategory from './components/admin/categories/view/viewContainer'

import AdminBooks from './components/admin/books/booksContainer'
import AdminCreateBook from './components/admin/books/create/createContainer'
import AdminUpdateBook from './components/admin/books/update/updateContainer'
import AdminViewBook from './components/admin/books/view/viewContainer'

import AdminProducts from './components/admin/products/productsContainer'

import AdminUsers from './components/admin/users/usersContainer'
import AdminCreateUser from './components/admin/users/create/createContainer'
import AdminUpdateUser from './components/admin/users/update/updateContainer'
import AdminViewUser from './components/admin/users/view/viewContainer'

import AdminCurrencies from './components/admin/currencies/currenciesContainer'
import AdminCreateCurrency from './components/admin/currencies/create/createContainer'
import AdminUpdateCurrency from './components/admin/currencies/update/updateContainer'
import AdminViewCurrency from './components/admin/currencies/view/viewContainer'

import AdminBicycles from './components/admin/bicycles/bicyclesContainer'
import AdminCreateBicycle from './components/admin/bicycles/create/createContainer'
import AdminUpdateBicycle from './components/admin/bicycles/update/updateContainer'
import AdminViewBicycle from './components/admin/bicycles/view/viewContainer'

// Auth
import Login from './components/auth/login/loginContainer'
import Registration from './components/auth/registration/registrationContainer'

// Host
import HostProducts from './components/host/products/productsContainer'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<BasicLayout />}>
                <Route path="/" element={<Products />} />
                <Route path="/products" element={<Products />} />
                <Route path="/books/:bookId" element={<Book />} />
                <Route path="/bicycles/:bicycleId" element={<Bicycle />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:userId" element={<Users />} /> TODO
                <Route path="/categories" element={<Categories />} />
                <Route path="/login" element={<Login />} />
                <Route path="/favourites" element={<div>favourites</div>} /> TODO
                <Route path="/routes" element={<div>routes</div>} /> TODO
                <Route path="/box" element={<div>box</div>} /> TODO
            </Route>
            <Route path='/admin' element={<AdminLayout />}>
                <Route path='categories' element={<AdminCategories />} />
                <Route path='categories/create' element={<AdminCreateCategory />} />
                <Route path='categories/:categoryId/update' element={<AdminUpdateCategory />} />
                <Route path='categories/:categoryId/view' element={<AdminViewCategory />} />

                <Route path='users' element={<AdminUsers />} />
                <Route path='users/create' element={<AdminCreateUser />} />
                <Route path='users/:userId/update' element={<AdminUpdateUser />} />
                <Route path='users/:userId/view' element={<AdminViewUser />} />

                <Route path='products' element={<AdminProducts />} />

                <Route path='books' element={<AdminBooks />} />
                <Route path='books/create' element={<AdminCreateBook />} />
                <Route path='books/:bookId/update' element={<AdminUpdateBook />} />
                <Route path='books/:bookId/view' element={<AdminViewBook />} />

                <Route path='bicycles' element={<AdminBicycles />} />
                <Route path='bicycles/create' element={<AdminCreateBicycle />} />
                <Route path='bicycles/:bicycleId/update' element={<AdminUpdateBicycle />} />
                <Route path='bicycles/:bicycleId/view' element={<AdminViewBicycle />} />

                <Route path='currencies' element={<AdminCurrencies />} />
                <Route path='currencies/create' element={<AdminCreateCurrency />} />
                <Route path='currencies/:currencyId/update' element={<AdminUpdateCurrency />} />
                <Route path='currencies/:currencyId/view' element={<AdminViewCurrency />} />
            </Route>
            <Route path={'/host'} element={<HostLayout />}>
                <Route index element={<HostProducts />} />
                <Route path='products' element={<HostProducts />} />
            </Route>
            <Route path='/auth' element={<AuthLayout />}>
                <Route path='login' element={<Login />} />
                <Route path='registration' element={<Registration />} />
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