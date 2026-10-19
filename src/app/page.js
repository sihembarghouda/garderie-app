
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />

        <section id="contact" className="py-5 text-center">
          <div className="container">
            <h2 className="fw-bold">Une question ? 💌</h2>

            <p className="text-secondary mt-3">
              Contactez-nous pour préparer l'accueil de votre enfant.
            </p>

            <a
              href="mailto:contact@petitmonde.tn"
              className="btn btn-garderie"
            >
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
