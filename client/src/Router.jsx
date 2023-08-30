import { createBrowserRouter } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/pages/Home";
import Main from "./components";
import Profile from "./components/auth/Profile";
import Cart from "./components/pages/Cart";
import Dashboard from "./components/Admin/Dashboard";
import Admin from "./components/Admin";
import AdminProducts from "./components/Admin/AdminProducts";
import Customer from "./components/Admin/Customer";
import AdminOrder from "./components/Admin/AdminOrder";
import Transaction from "./components/Admin/Transaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/admin",
    element: <Admin />,

    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/products",
        element: <AdminProducts />,
      },
      {
        path: "/admin/customers",
        element: <Customer />,
      },
      {
        path: "/admin/orders",
        element: <AdminOrder />,
      },
      {
        path: "/admin/transaction",
        element: <Transaction />,
      },
    ],
  },
]);

export default router;
