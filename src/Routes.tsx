import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';
import DetailProduct from './pages/DetailProduct';
import Contact from './pages/Contact';
import Card from './pages/Card';
import Login from './pages/Login';
import Register from './pages/Register';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // contient Navbar/Footer
        children: [
            { path: '', element: <Dashboard /> }, // affiché dans <Outlet />
            { path: 'products', element: <Product /> },
            { path: 'product/:id', element: <DetailProduct /> },
            { path: 'contact', element: <Contact /> },
            { path: 'card', element: <Card /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: '*', element: <PageNotFound /> }, // affiché dans <Outlet />
        ],
    },
])