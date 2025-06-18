import { Outlet } from 'react-router-dom';
import SectionNavigationBar from './components/SectionNavigationBar.js';
import SectionLoading from './components/SectionLoading.tsx';
import Footer from './components/Footer.tsx';

export default function Layout() {
    return (
        <div>
            <SectionLoading />
            <SectionNavigationBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}