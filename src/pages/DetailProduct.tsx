import { useParams } from 'react-router-dom';
import { products } from '../datas/Data';
import type { Product } from '../models/Product';
import { useState, useEffect } from 'react';
import PageHeaderStart from '../components/PageHeaderStart';

export default function DetailProduct() {
    const { id } = useParams<{ id: string }>()
    const [product, setProduct] = useState<Product | null>()
    const [valOrder, setValOrder] = useState<number>(0)

    const handleSearch = () => {
        const product = products.find(p => p.id === (id ? parseInt(id) : null))
        if (!product) return null
        setProduct(product)
    }
    const incrementOrder = () => {
        setValOrder(valOrder + 1)
    }
    const decrementOrder = () => {
        if (valOrder > 0) {
            setValOrder(valOrder - 1)
        }
    }

    useEffect(() => {
        handleSearch()
    }, [id])


    return (
        <>
            <PageHeaderStart currentPage="Detail" />
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row g-4 mb-5">
                        <div className="col-lg-12 col-xl-10">
                            <div className="row g-5 align-items-start">
                                <div className="col-lg-6">
                                    <div className="border rounded">
                                        <a>
                                            <img
                                                src={product?.image}
                                                className="img-fluid rounded"
                                                alt="Image"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="fw-bold mb-3">{product?.name}</h4>
                                    <p className="mb-3">Category: {product?.category}</p>
                                    <h5 className="fw-bold mb-3">{product?.price}</h5>
                                    <div className="d-flex mb-4">
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p className="mb-4">{product?.description}</p>
                                    <div className="input-group mb-5" style={{ width: "100px" }}>
                                        <div className="input-group-btn">
                                            <button onClick={decrementOrder} className="btn btn-sm btn-minus rounded-circle bg-light border" title="Decrease quantity">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm text-center border-0"
                                            value={valOrder}
                                            aria-label="Product quantity"
                                            title="Product quantity"
                                            placeholder="Quantity"
                                        />
                                        <div className="input-group-btn">
                                            <button onClick={incrementOrder} className="btn btn-sm btn-plus rounded-circle bg-light border" title="Increase quantity">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                                <div className="col-lg-12">
                                    <nav>
                                        <div className="nav nav-tabs mb-3">
                                            <h5
                                                title="Buttom description"
                                                className="nav-link border-white border-bottom-0"
                                            >
                                                Description
                                            </h5>
                                        </div>
                                    </nav>
                                    <div className="tab-content mb-5">
                                        <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                            <p>{product?.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <form action="#">
                                    <h4 className="mb-5 fw-bold">Laisser un commentaire</h4>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input type="text" className="form-control border-0 me-4" placeholder="Votre identité *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="border-bottom rounded">
                                                <input type="email" className="form-control border-0" placeholder="Votre email *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="border-bottom rounded my-4">
                                                <textarea className="form-control border-0" cols={30} rows={8} placeholder="Votre commentaire *" spellCheck={false}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-flex justify-content-between py-3 mb-5">
                                                <div className="d-flex align-items-center">
                                                    <p className="mb-0 me-3">Veuillez évaluer :</p>
                                                    <div className="d-flex align-items-center" style={{ fontSize: "12px" }}>
                                                        <i className="fa fa-star text-muted"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <button className="btn border border-secondary text-primary rounded-pill px-4 py-3"> Envoyer</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
