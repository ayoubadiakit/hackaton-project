import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // contient Navbar/Footer
        children: [
            { path: '', element: <Dashboard /> }, // affiché dans <Outlet />
            { path: 'categories', element: <Product /> },
            { path: '*', element: <PageNotFound /> }, // affiché dans <Outlet />
        ],
    },
])