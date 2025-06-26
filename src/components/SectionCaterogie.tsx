import img1 from '../assets/img/featur-1.jpg';
import img2 from '../assets/img/featur-2.jpg';
import img3 from '../assets/img/featur-3.jpg';
import type { Category } from '../types/Category';

export default function CategoriesSection({ onCategoryClick, onActive, categories }: { onCategoryClick: (id: number) => void, onActive: number, categories: Category[] }) {
    return (
        <div className="col-lg-3">
            <div className="row g-4">
                <div className="col-lg-12">
                    <div className="mb-3">
                        <h4>Categories</h4>
                        <ul className="list-unstyled fruite-categorie">
                            {categories.map((cat: Category) => (
                                <li key={cat.id}>
                                    <div className="d-flex justify-content-between fruite-name">
                                        <a
                                            onClick={() => onCategoryClick(cat.id)}
                                            className={`btn rounded-pill text-primary ${onActive === cat.id ? "bg-secondary" : ""}`}
                                        >
                                            <i className="fas fa-apple-alt me-2"></i>{cat.label}
                                        </a>
                                        <span>(3)</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <h4 className="mb-3">Futurs produits</h4>
                    <div className="d-flex align-items-center justify-content-start">
                        <div className="rounded me-4" style={{ width: '100px', height: '100px' }}>
                            <img src={img1} className="img-fluid rounded" alt="" />
                        </div>
                        <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="d-flex mb-2">
                                <h5 className="fw-bold me-2">2.99 $</h5>
                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start">
                        <div className="rounded me-4" style={{ width: '100px', height: '100px' }}>
                            <img src={img2} className="img-fluid rounded" alt="" />
                        </div>
                        <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="d-flex mb-2">
                                <h5 className="fw-bold me-2">2.99 $</h5>
                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start">
                        <div className="rounded me-4" style={{ width: '100px', height: '100px' }}>
                            <img src={img3} className="img-fluid rounded" alt="" />
                        </div>
                        <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="d-flex mb-2">
                                <h5 className="fw-bold me-2">2.99 $</h5>
                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-4">
                        <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}