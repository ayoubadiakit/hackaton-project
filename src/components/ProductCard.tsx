import type { Product } from "../models/Product";

export default function ProductCard({ product, styles }: { product: Product, styles:string }) {

    return (
        <div className={styles}>
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                    <img src={product.image} className="img-fluid w-100 rounded-top" alt={product.name} />
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>
                    {product.category}
                </div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{product.name}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">{product.price}</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                            <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}