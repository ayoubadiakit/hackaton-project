import { Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.js';
import Loading from './components/Loading.tsx';
import Footer from './components/Footer.tsx';

export default function Layout() {
    return (
        <div>
            <Loading />
            <NavigationBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}