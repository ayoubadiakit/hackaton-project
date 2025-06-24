import { useEffect, useRef } from "react";
import { NavLink } from "react-router";

export default function SectionNavigationBar() {
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
          <NavLink to="/" className="navbar-brand">
            <h1 className="text-primary display-6">AGRICONNECT</h1>
          </NavLink>
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
              <NavLink to={'/'} className="nav-item nav-link mx-2">Accueil</NavLink>
              <NavLink to={"/categories"} className="nav-item nav-link mx-2">Catégories</NavLink>
              <NavLink to={"/a-propos"} className="nav-item nav-link mx-2">À propos</NavLink>
              <NavLink to={"/contact"} className="nav-item nav-link mx-2">Contact</NavLink>
            </div>
            <div className="d-flex m-3 me-0">
              <NavLink to={'/card'} className="position-relative me-4 my-auto">
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
              </NavLink>
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
