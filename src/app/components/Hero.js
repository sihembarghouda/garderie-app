
export default function Hero() {
  return (
    <section id="accueil" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge rounded-pill text-bg-light px-3 py-2 mb-3">
              💗 Bienvenue chez nous !
            </span>

            <h1 className="hero-title mb-4">
              Un petit monde pour de grandes découvertes !
            </h1>

            <p className="fs-5 text-secondary mb-4">
              Chez Petit Monde, chaque enfant grandit, apprend
              et s'épanouit dans un environnement chaleureux,
              sécurisé et rempli de joie.
            </p>

            <a href="#services" className="btn btn-garderie btn-lg">
              Découvrir nos services →
            </a>

            <p className="mt-4 mb-0 text-secondary">
              ❤️ Grandir ensemble, tout simplement.
            </p>
          </div>

          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80"
              alt="Enfant souriant"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
