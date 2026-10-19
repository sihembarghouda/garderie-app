
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const garderie = {
  nom: "Petit Monde",
  slogan: "Grandir avec le sourire",
  adresse: "Monastir, Tunisie",
};

const services = [
  {
    id: 1,
    nom: "Éveil et créativité",
    description: "Des activités artistiques et ludiques.",
  },
  {
    id: 2,
    nom: "Apprentissage",
    description: "Des jeux éducatifs pour apprendre.",
  },
  {
    id: 3,
    nom: "Repas équilibrés",
    description: "Des repas adaptés aux enfants.",
  },
];

const activites = [
  {
    id: 1,
    nom: "Peinture et dessin",
    age: "2 à 5 ans",
  },
  {
    id: 2,
    nom: "Comptines et musique",
    age: "1 à 5 ans",
  },
  {
    id: 3,
    nom: "Jeux en plein air",
    age: "2 à 5 ans",
  },
];

app.get("/", (req, res) => {
  res.json({ message: "API Garderie opérationnelle" });
});

app.get("/api/garderie", (req, res) => {
  res.json(garderie);
});

app.get("/api/services", (req, res) => {
  res.json(services);
});

app.get("/api/activites", (req, res) => {
  res.json(activites);
});

app.listen(PORT, () => {
  console.log(`Backend démarré sur http://localhost:${PORT}`);
});
