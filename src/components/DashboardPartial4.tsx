export default function DashboardPartial4() {
    return (
        <div className="col-md-12 col-lg-7">
            <h4 className="mb-3 text-secondary">Aliments 100% naturel</h4>
            <h4 className="mb-3 display-3 text-primary">
                Aliments à base de légumes et de fruits naturel
            </h4>
            <div className="position-relative mx-auto">
                <input
                    className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                    type="number"
                    placeholder="Rechercher"
                />
                <button
                    type="submit"
                    className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                    style={{ top: 0, right: '25%' }}
                >
                    Valider
                </button>
            </div>
        </div>
    )
}