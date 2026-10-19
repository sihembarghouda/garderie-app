"use client";

import { useState } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const services = [
    {
      icon: "🎨",
      title: "Éveil et créativité",
      description:
        "Des activités artistiques et ludiques pour développer l'imagination et la créativité des enfants.",
      style: "service-pink",
    },
    {
      icon: "📚",
      title: "Apprentissage",
      description:
        "Des jeux éducatifs pour découvrir les lettres, les chiffres, les couleurs et le monde qui nous entoure.",
      style: "service-blue",
    },
    {
      icon: "🍎",
      title: "Repas équilibrés",
      description:
        "Des repas adaptés aux enfants pour favoriser leur croissance et leur bien-être au quotidien.",
      style: "service-yellow",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fs-4" href="#">
            🧸 Petit Monde
          </a>

          <button
          onClick={() => setMenuOpen(!menuOpen)}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
           aria-expanded={menuOpen}
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarMenu"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#accueil">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Nos services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
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

      <main>
        {/* HERO */}
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
                  alt="Enfant souriant dans un environnement lumineux"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="text-uppercase fw-bold text-secondary">
                Ce que nous proposons
              </span>

              <h2 className="section-title mt-2">
                Nos services 🌈
              </h2>

              <p className="text-secondary">
                Tout pour accompagner votre enfant au quotidien.
              </p>
            </div>

            <div className="row g-4">
              {services.map((service) => (
                <div className="col-md-6 col-lg-4" key={service.title}>
                  <div className={`card service-card ${service.style}`}>
                    <div className="card-body text-center">
                      <div className="service-icon mb-3">
                        {service.icon}
                      </div>

                      <h3 className="h4 fw-bold mb-3">
                        {service.title}
                      </h3>

                      <p className="text-secondary mb-0">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-5 text-center">
          <div className="container">
            <h2 className="fw-bold">Une question ? 💌</h2>

            <p className="text-secondary mt-3">
              Contactez-nous pour découvrir notre garderie et
              préparer l'accueil de votre enfant.
            </p>

            <a href="mailto:contact@petitmonde.tn" className="btn btn-garderie">
              Nous contacter
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Petit Monde — Grandir avec le sourire 💗
          </p>
        </div>
      </footer>
    </>
  );
}