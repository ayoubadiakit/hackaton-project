import SwiperImages from '../components/SwiperImages';

import ProductSection from '../components/ProductSection.tsx';
import ProductPopulary from '../components/ProductPopulary.tsx';
import FeaturSection from '../components/FeaturSection.tsx';
import ClientSatisfait from '../components/ClientSatisfait.tsx';
import Investisseur from '../components/Investisseur';

export default function Dashboard() {
    return (
        // Hero Start
        <div>
            <div className="container-fluid py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-12 col-lg-7">
                            <h4 className="mb-3 text-secondary">Aliments 100% naturel</h4>
                            <h4 className="mb-3 display-3 text-primary">
                                Aliments à base de légumes et de fruits naturel
                            </h4>
                            <div className="position-relative mx-auto">
                                <input
                                    className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                                    type="number"
                                    placeholder="Search"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                                    style={{ top: 0, right: '25%' }}
                                >
                                    Submit Now
                                </button>
                            </div>
                        </div>
                        <SwiperImages />
                    </div>
                </div>
            </div>
            <FeaturSection />
            <ProductSection />
            <ProductPopulary />
            <Investisseur />
            <ClientSatisfait />
        </div>

        // Hero End
    );
}
