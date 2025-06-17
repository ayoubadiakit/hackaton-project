import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div className="container-fluid py-5 mt-5">
            <div className="container py-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-secondary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Non Trouvée</h1>
                        <p className="mb-4">Désolé, la page que vous recherchez n'existe pas sur notre site web ! Vous pouvez peut-être vous rendre sur notre page d'accueil ou utiliser la recherche.</p>
                        <Link to="/">
                            <button className="btn border-secondary rounded-pill py-3 px-5">Accueil</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
