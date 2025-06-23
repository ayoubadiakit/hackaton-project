import { Link } from "react-router-dom";

export default function PageHeaderStart({ currentPage}: { currentPage: string}) {
    return (
        <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">{currentPage}</h1>
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><Link to={'/'}>Accueil</Link></li>
                <li className="breadcrumb-item active text-white">{currentPage}</li>
            </ol>
        </div>
    )
}