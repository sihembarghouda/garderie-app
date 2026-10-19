
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Informations générales de la garderie
const garderie = {
  nom: "Petit Monde",
  slogan: "Grandir avec le sourire",
  description:
    "Une garderie chaleureuse et sécurisée pour accompagner les enfants dans leur développement.",
  adresse: "Monastir, Tunisie",
  telephone: "+216 00 000 000",
  email: "contact@petitmonde.tn",
  horaires: "Du lundi au vendredi, de 7h30 à 17h30",
};

// Liste des services
const services = [
  {
    id: 1,
    nom: "Éveil et créativité",
    description:
      "Des activités artistiques et ludiques pour développer l'imagination.",
    icon: "🎨",
  },
  {
    id: 2,
    nom: "Apprentissage",
    description:
      "Des jeux éducatifs pour découvrir les lettres, les chiffres et les couleurs.",
    icon: "📚",
  },
  {
    id: 3,
    nom: "Repas équilibrés",
    description:
      "Des repas adaptés aux enfants pour favoriser leur bien-être.",
    icon: "🍎",
  },
];

// Liste des activités
const activites = [
  {
    id: 1,
    nom: "Peinture et dessin",
    description: "Développer la créativité à travers les couleurs.",
    age: "2 à 5 ans",
  },
  {
    id: 2,
    nom: "Comptines et musique",
    description: "Découvrir les sons, les rythmes et les chansons.",
    age: "1 à 5 ans",
  },
  {
    id: 3,
    nom: "Jeux en plein air",
    description: "Bouger, jouer et apprendre avec les autres enfants.",
    age: "2 à 5 ans",
  },
];

// Route de bienvenue
app.get("/", (req, res) => {
  res.json({
    message: "Bienvenue sur l'API de la garderie Petit Monde",
    endpoints: [
      "/api/garderie",
      "/api/services",
      "/api/activites",
    ],
  });
});

// GET /api/garderie
app.get("/api/garderie", (req, res) => {
  res.json(garderie);
});

// GET /api/services
app.get("/api/services", (req, res) => {
  res.json(services);
});

// GET /api/activites
app.get("/api/activites", (req, res) => {
  res.json(activites);
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Backend démarré sur http://localhost:${PORT}`);
});
