import SwiperImages from '../components/SwiperImages';

import ProductSection from '../components/ProductSection.tsx';
import FeaturSection from '../components/FeaturSection.tsx';
import ClientSatisfait from '../components/ClientSatisfait.tsx';
import Investisseur from '../components/Investisseur';
import SectionStatistique from './../components/SectionStatistique';

export default function Dashboard() {
    return (
        <div>
            <div className="container-fluid py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <SectionStatistique />
                        <SwiperImages />
                    </div>
                </div>
            </div>
            <FeaturSection />
            <ProductSection />
            <Investisseur />
            <ClientSatisfait />
        </div>
    );
}
