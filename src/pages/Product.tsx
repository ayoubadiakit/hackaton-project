import CategoriesSection from '../components/SectionCaterogie';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types/Product';
import { useEffect, useState } from 'react';
import PageHeaderStart from '../components/PageHeaderStart';
import { productService } from '../services/ProductService';
import { CategoryService } from '../services/CategoryService';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence } from "motion/react"

export default function Product() {
    const { data: products } = useQuery({ queryKey: ['products'], queryFn: productService.getAllProduct })
    const { data: categories } = useQuery({ queryKey: ['categories'], queryFn: CategoryService.getAllCategory })
    const [activeTab, setActiveTab] = useState<number>(1);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

    useEffect(() => {
        if (products) {
            setFilteredProducts(products)
        }
    }, [products])

    const onClickCategory = (id: number) => {
        setActiveTab(id)
        const selected = categories?.find(c => c.id === id)
        if (!selected?.category) {
            // Si aucun nom de catégorie n’est défini, afficher tous les produits
            setFilteredProducts(products || [])
        } else {
            const filtered = products?.filter(
                p => p.category.toLowerCase() === selected.category?.toLowerCase()
            )
            setFilteredProducts(filtered || [])
        }
    }

    const onQuerySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;

        const filtered = products?.filter(
            p => p.name.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredProducts(filtered || [])
    }

    return (
        <>
            <PageHeaderStart currentPage="Categories" />
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <h1 className="mb-4">Tous les produits </h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-xl-3">
                                    <div className="input-group w-100 mx-auto d-flex">
                                        <input
                                            type="text"
                                            className="form-control p-3"
                                            placeholder="Rechercher"
                                            name='search'
                                            onChange={(e) => onQuerySearch(e)}
                                        />
                                        <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                    </div>
                                </div>
                                <div className="col-6"></div>
                                <div className="col-xl-3">
                                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                        <label htmlFor="fruits">Trier par:</label>
                                        <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                                            <option value="volvo">Nothing</option>
                                            <option value="saab">Popularity</option>
                                            <option value="opel">Organic</option>
                                            <option value="audi">Fantastic</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-5">
                                <CategoriesSection
                                    onCategoryClick={onClickCategory}
                                    onActive={activeTab}
                                    categories={categories || []}
                                    products={products || []}
                                />
                                <div className="col-lg-9">
                                    <div className="row g-4 justify-content-center">
                                        {filteredProducts?.map((product) => (
                                            <AnimatePresence>
                                                <ProductCard
                                                    key={product.id}
                                                    product={product}
                                                    styles='col-md-6 col-lg-6 col-xl-4'
                                                />
                                            </AnimatePresence>
                                        ))}

                                        <div className="col-12">
                                            <div className="pagination d-flex justify-content-center mt-5">
                                                <a href="#" className="rounded">&laquo;</a>
                                                <a href="#" className="active rounded">1</a>
                                                <a href="#" className="rounded">2</a>
                                                <a href="#" className="rounded">3</a>
                                                <a href="#" className="rounded">4</a>
                                                <a href="#" className="rounded">5</a>
                                                <a href="#" className="rounded">6</a>
                                                <a href="#" className="rounded">&raquo;</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
