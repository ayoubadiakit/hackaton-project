import SwiperImagesDashboard from '../components/SwiperImagesDashboard.tsx';

import ProductSection from '../components/ProductSection.tsx';
import DashboardPartial1 from '../components/DashboardPartial1.tsx';
import DashboardPartial3 from '../components/DashboardPartial3.tsx';
import DashboardPartial2 from '../components/DashboardPartial2.tsx';
import DashboardPartial4 from '../components/DashboardPartial4.tsx';

export default function Dashboard() {
    return (
        <div>
            <div className="container-fluid py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <DashboardPartial4 />
                        <SwiperImagesDashboard />
                    </div>
                </div>
            </div>
            <DashboardPartial1 />
            <ProductSection />
            <DashboardPartial2 />
            <DashboardPartial3 />
        </div>
    );
}
