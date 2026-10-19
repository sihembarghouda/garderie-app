
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
      "Des jeux éducatifs pour découvrir les lettres, les chiffres et les couleurs.",
    style: "service-blue",
  },
  {
    icon: "🍎",
    title: "Repas équilibrés",
    description:
      "Des repas adaptés aux enfants pour favoriser leur croissance et leur bien-être.",
    style: "service-yellow",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-uppercase fw-bold text-secondary">
            Ce que nous proposons
          </span>

          <h2 className="section-title mt-2">Nos services 🌈</h2>

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

                  <h3 className="h4 fw-bold mb-3">{service.title}</h3>

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
  );
}
