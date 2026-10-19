
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fs-4" href="#accueil">
          🧸 Garderie App
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-label="Ouvrir le menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#accueil">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Nos services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-garderie" href="#contact">
                Inscrire mon enfant
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
