import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import type { Product } from '../types/Product';
import type { Category } from '../types/Category';
import { CategoryService } from '../services/CategoryService';
import { productService } from '../services/ProductService';

export default function ProductSection() {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const filteredProducts = () => {
        const selected = categories.find(c => c.id === activeTab);
        if (!selected || !selected.category) return products;
        return products.filter(p => p.category === selected.category);
    };

    useEffect(() => {
        CategoryService.getAllCategory().then(setCategories);
        productService.getAllProduct().then((res) => {
            setProducts(res); // initialisation
        });
    })

    return (
        <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <div className="tab-class text-center">
                    <div className="row g-4">
                        <div className="col-lg-3 text-start">
                            <h1>Tous les produits</h1>
                        </div>
                        <div className="col-lg-9 text-end">
                            <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                {categories
                                    .map((tab) => (
                                        <li key={tab.id} className="nav-item">
                                            <button
                                                className={`d-flex m-3 py-2 rounded-pill btn border border-secondary rounded-pill px-3 text-primary ${activeTab === tab.id ? "bg-secondary" : ""}`}
                                                onClick={() => setActiveTab(tab.id)}
                                            >
                                                <span className="text-dark" style={{ width: '110px' }}>{tab.label}</span>
                                            </button>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='tab-content'>
                    <div className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row g-4">
                                    {filteredProducts()
                                        .map((product) => (
                                            <ProductCard
                                                key={product.id}
                                                product={product}
                                                styles='col-md-6 col-lg-4 col-xl-3'
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}