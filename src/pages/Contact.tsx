import PageHeaderStart from "../components/PageHeaderStart";

export default function Contact() {
    return (
        <>
            <PageHeaderStart currentPage="Contact" />
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="p-5 bg-light rounded">
                        <div className="row g-4">

                            {/* Title */}
                            <div className="col-12">
                                <div className="text-center mx-auto" style={{ maxWidth: '700px' }}>
                                    <h1 className="text-primary">Contactez nous</h1>
                                    <p className="mb-4">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum deleniti dolorum recusandae necessitatibus delectus assumenda cupiditate minima, quidem cum laboriosam ullam esse ipsam. Quisquam rem hic tempore iusto, similique inventore?

                                    </p>
                                </div>
                            </div>

                            {/* Google Map */}
                            <div className="col-lg-12">
                                <div className="h-100 rounded">
                                    <iframe
                                        className="rounded w-100"
                                        title="Google Maps - Guinée"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12651981.080462437!2d-15.0453!3d9.9456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe3fba6320e315d9%3A0xa4c10fa67d269d8c!2sGuin%C3%A9e!5e0!3m2!1sfr!2sfr!4v1719170684163!5m2!1sfr!2sfr"
                                        height="400px"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="col-lg-7">
                                <form>
                                    <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
                                    <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
                                    <textarea className="w-100 form-control border-0 mb-4" rows={5} placeholder="Your Message"></textarea>
                                    <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary" type="submit">
                                        Submit
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div className="col-lg-5">
                                <div className="d-flex p-4 rounded mb-4 bg-white">
                                    <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                    <div>
                                        <h4>Adresse</h4>
                                        <p className="mb-2">Guinée, Conakry, Kissosso</p>
                                    </div>
                                </div>
                                <div className="d-flex p-4 rounded mb-4 bg-white">
                                    <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                    <div>
                                        <h4>Email</h4>
                                        <p className="mb-2">agriconnect.guinea@gmail.com</p>
                                    </div>
                                </div>
                                <div className="d-flex p-4 rounded bg-white">
                                    <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                    <div>
                                        <h4>Téléphone</h4>
                                        <p className="mb-2">(+224) 620 00 00 20</p>
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