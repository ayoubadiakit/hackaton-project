import { useEffect, useRef } from "react";

export default function NavigationBar() {
  const navRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const nav = navRef.current;
      if (!nav) return;
      const isMobile = window.innerWidth < 992;
      if (window.scrollY > 55) {
        (nav as HTMLElement).classList.add("shadow");
        if (!isMobile) {
          (nav as HTMLElement).style.top = "-55px";
        }
      } else {
        (nav as HTMLElement).classList.remove("shadow");
        if (!isMobile) {
          (nav as HTMLElement).style.top = "0";
        }
      }
      if (isMobile) {
        (nav as HTMLElement).style.top = "";
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Navbar start
    <div ref={navRef} className="container-fluid fixed-top">
      <div className="container topbar bg-primary d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small className="me-3">
              <i className="fas fa-map-marker-alt me-2 text-secondary"></i>{" "}
              <a href="#" className="text-white">
                Guinée, Conakry
              </a>
            </small>
            <small className="me-3">
              <i className="fas fa-envelope me-2 text-secondary"></i>
              <a href="#" className="text-white">
                agriconnect.guinea@gmail.com
              </a>
            </small>
          </div>
          <div className="top-link pe-2">
            <a href="#" className="text-white">
              <small className="text-white mx-2">Privacy Policy</small>/
            </a>
            <a href="#" className="text-white">
              <small className="text-white mx-2">Terms of Use</small>/
            </a>
            <a href="#" className="text-white">
              <small className="text-white ms-2">Sales and Refunds</small>
            </a>
          </div>
        </div>
      </div>
      <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
          <a href="#" className="navbar-brand">
            <h1 className="text-primary display-6">AGRICONNECT</h1>
          </a>
          <button
            title="Toggle navigation menu"
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-white"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              <a href="#" className="nav-item nav-link active mx-2">
                Acceuil
              </a>
              <a href="#" className="nav-item nav-link mx-2">
                Catégories
              </a>
              <a href="#" className="nav-item nav-link mx-2">
                A propos
              </a>
              <a href="#" className="nav-item nav-link mx-2">
                Contact
              </a>
            </div>
            <div className="d-flex m-3 me-0">
              <a href="#" className="position-relative me-4 my-auto">
                <i className="fa fa-shopping-bag fa-2x"></i>
                <span
                  className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                  style={{
                    top: "-5px",
                    left: "15px",
                    height: "20px",
                    minWidth: "20px",
                  }}
                >
                  3
                </span>
              </a>
              <a href="#" className="my-auto" title="User account">
                <i className="fas fa-user fa-2x"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    // Navbar End
  );
}
