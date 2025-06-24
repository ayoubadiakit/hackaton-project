import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

export default function ProductCard({ product, styles }: { product: Product, styles: string }) {
    let detailText = product.description;
    return (
        <div className={styles}>
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                    <img src={product.image} className="img-fluid w-100 rounded-top" alt={product.name} style={{ width: '130px', height: '210px' }} />
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>
                    {product.category}
                </div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{product.name}</h4>
                    <p>
                        {detailText.length > 50 ? (
                            <>
                                {detailText.slice(0, 50)}...
                                <Link to={`/product/${product.id}`}>
                                    <p className="text-blue-600">voir plus</p>
                                </Link>
                            </>
                        ) : (
                            detailText
                        )}
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">{product.price}</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                            <i className="fa fa-shopping-bag me-2 text-primary"></i> Ajouter au panier
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}