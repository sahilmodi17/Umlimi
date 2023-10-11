import { createBrowserRouter } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/pages/Home'
import Main from './components'
import Profile from './components/auth/Profile'

import Dashboard from './components/Admin/Dashboard'
import Admin from './components/Admin'
import AdminProducts from './components/Admin/AdminProducts'
import Customer from './components/Admin/Customer'
import AdminOrder from './components/Admin/AdminOrder'
import Transaction from './components/Admin/Transaction'
import AddProduct from './components/Admin/AddProduct'
import Cart from './components/pages/shoppingCart/Cart'
import SingleProduct from './components/pages/shoppingCart/SingleProduct'
import SearchProduct from './components/pages/shoppingCart/SearchProduct'
import CategoryProduct from './components/pages/shoppingCart/CategoryProduct'
import Splash from './components/auth/Splash'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,


    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/singleProduct/:id',
        element: <SingleProduct />,
      },
      {
        path: '/searchProduct',
        element: <SearchProduct />,
      },
      {
        path: '/categoryProduct',
        element: <CategoryProduct />,
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Signup />,
  },
  {
    path: '/admin',
    element: <Admin />,

    children: [
      {
        path: '/admin/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/admin/products',
        element: <AdminProducts />,
      },
      {
        path: '/admin/customers',
        element: <Customer />,
      },
      {
        path: '/admin/orders',
        element: <AdminOrder />,
      },
      {
        path: '/admin/transaction',
        element: <Transaction />,
      },
      {
        path: '/admin/addproduct',
        element: <AddProduct />,
      },
    ],
  },
  {
    path: '/splash',
    element: <Splash />,
  }
])

export default router
