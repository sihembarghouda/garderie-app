
# Garderie Petit Monde

## 1. Présentation du projet

**Petit Monde** est une application web destinée à une garderie d'enfants.
Elle permet de présenter la garderie, ses services et les activités proposées
aux enfants.

Le projet utilise une architecture séparant le frontend et le backend.
Le frontend affiche les informations à l'utilisateur, tandis que le backend
fournit les données à travers une API REST.

## 2. Technologies utilisées

### Frontend
- Next.js
- React
- JavaScript
- Bootstrap 5
- CSS

### Backend
- Node.js
- Express.js
- CORS
- API REST au format JSON

### Outils
- Visual Studio Code
- Git
- GitHub
- PowerShell

## 3. Structure du projet

```text
garderie-app/
├── backend/
│   ├── package.json
│   └── server.js
├── public/
│   └── images/
├── src/
│   └── app/
│       ├── layout.js
│       ├── page.js
│       └── globals.css
├── package.json
├── package-lock.json
└── README.md
```

Le dossier `backend/` contient le serveur Express et ses routes API.

Le dossier `src/app/` contient les pages, la mise en page et les styles
du frontend Next.js.

Le dossier `public/images/` est destiné aux images utilisées par le site.

## 4. Prérequis

Avant d'installer le projet, il faut disposer de :

- Node.js et npm
- Git
- Visual Studio Code (recommandé)

## 5. Installation

### Cloner le dépôt

```bash
git clone URL_DU_DEPOT_GITHUB
cd garderie-app
```

Remplacer `URL_DU_DEPOT_GITHUB` par l'URL réelle du dépôt GitHub.

### Installer les dépendances du frontend

À la racine du projet :

```bash
npm install
```

### Installer les dépendances du backend

```bash
cd backend
npm install
```

## 6. Exécution de l'application

### Démarrer le backend

Dans un terminal :

```bash
cd backend
npm start
```

Le serveur Express écoute sur :

http://localhost:3001

### Démarrer le frontend

Dans un deuxième terminal :

```bash
cd C:\Users\sihem\garderie-app
npm run dev
```

Ouvrir ensuite :

http://localhost:3000

Si Next.js indique un autre port, utiliser l'adresse affichée dans le terminal.

Les deux serveurs doivent fonctionner simultanément.

## 7. Documentation de l'API

L'API REST utilise le port `3001` et renvoie des données au format JSON.

### Route d'accueil

- Méthode : GET
- URL : `http://localhost:3001/`
- Description : vérifie que l'API fonctionne.

### Informations de la garderie

- Méthode : GET
- URL : `http://localhost:3001/api/garderie`
- Description : renvoie le nom, le slogan et l'adresse de la garderie.

### Liste des services

- Méthode : GET
- URL : `http://localhost:3001/api/services`
- Description : renvoie la liste des services proposés.

### Liste des activités

- Méthode : GET
- URL : `http://localhost:3001/api/activites`
- Description : renvoie les activités et les tranches d'âge correspondantes.

Toutes les routes documentées ci-dessus utilisent la méthode HTTP GET.
Elles ne nécessitent aucun paramètre pour être appelées.

## 8. Tester l'API

Dans PowerShell, exécuter :

```powershell
curl.exe http://localhost:3001/
curl.exe http://localhost:3001/api/garderie
curl.exe http://localhost:3001/api/services
curl.exe http://localhost:3001/api/activites
```

Les réponses doivent contenir les données JSON attendues.

## 9. Gestion des branches Git

Les branches de fonctionnalités et de documentation permettent de travailler
séparément avant d'intégrer les changements dans `main`.

Exemple :

```bash
git branch
git switch main
git pull origin main
```

## 10. Auteur

Projet réalisé dans le cadre d'un travail pratique de développement web.

Application : Garderie Petit Monde.
