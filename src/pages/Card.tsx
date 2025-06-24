import { useState } from "react";
import PageHeaderStart from "../components/PageHeaderStart";
import { cards } from '../datas/Data';

export default function Card() {
    const [valOrder, setValOrder] = useState<number>(0)
    const [products, setProducts] = useState(cards);
    const incrementOrder = (id: number) => {
        setValOrder(
            products.find(p => p.id === id)?.id === id ?
                valOrder + 1 : 0
        );
    }
    const decrementOrder = () => {
        if (valOrder > 0) {
            setValOrder(valOrder - 1)
        }
    }
    return (
        <>
            <PageHeaderStart currentPage="Panier" />
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Image Produit</th>
                                    <th scope="col">Nom produit</th>
                                    <th scope="col">Prix Unitaire</th>
                                    <th scope="col">Quantité</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={product.image}
                                                    className="img-fluid me-5 rounded-circle"
                                                    style={{ width: 100, height: 90 }}
                                                    alt="product"
                                                />
                                            </div>
                                        </th>
                                        <td>
                                            <p className="mb-0 mt-4">
                                                {product.name}
                                            </p>
                                        </td>
                                        <td>
                                            <p className="mb-0 mt-4">{product.price}</p>
                                        </td>
                                        <td>
                                            <div className="input-group quantity mt-4" style={{ width: "100px" }}>
                                                <div className="input-group-btn">
                                                    <button onClick={decrementOrder} className="btn btn-sm btn-minus rounded-circle bg-light border" title="Bouton3">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input
                                                    title="Product quantity"
                                                    placeholder="Enter quantity"
                                                    value={valOrder}
                                                    type="text"
                                                    className="form-control form-control-sm text-center border-0"
                                                />
                                                <div className="input-group-btn">
                                                    <button onClick={() => incrementOrder(product.id)} className="btn btn-sm btn-plus rounded-circle bg-light border" title="Bouton2">
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="mb-0 mt-4">2.99 $</p>
                                        </td>
                                        <td>
                                            <button className="btn btn-md rounded-circle bg-light border mt-4" title="Bouton1">
                                                <i className="fa fa-times text-danger"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="row g-4 justify-content-end">
                        <div className="col-8"></div>
                        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                            <div className="bg-light rounded">
                                <div className="p-4">
                                    <h1 className="display-6 mb-4">
                                        Cart <span className="fw-normal">Total</span>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-4">
                                        <h5 className="mb-0 me-4">Subtotal:</h5>
                                        <p className="mb-0">$96.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0 me-4">Shipping</h5>
                                        <div>
                                            <p className="mb-0">Flat rate: $3.00</p>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-end">Shipping to Ukraine.</p>
                                </div>
                                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                                    <p className="mb-0 pe-4">$99.00</p>
                                </div>
                                <button
                                    className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                                    type="button"
                                >
                                    Proceed Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
