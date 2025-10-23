# 🌴 Roadbook Californie 2026

> Une Progressive Web App interactive pour planifier et vivre un roadtrip de 16 jours en Californie, de San Francisco à San Diego.

[![PWA](https://img.shields.io/badge/PWA-Ready-success)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Démo](#-démo)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Structure du projet](#-structure-du-projet)
- [Développement](#-développement)
- [Technologies](#-technologies)
- [Documentation](#-documentation)
- [Contribuer](#-contribuer)
- [Licence](#-licence)

---

## 🎯 À propos

Ce roadbook interactif documente un voyage familial de **16 jours en Californie** (21 février - 8 mars 2026), couvrant **1500 km** le long de la mythique Pacific Coast Highway (Highway 1 et US-101).

L'application offre une expérience immersive de planification et de découverte du voyage grâce à :
- Un **Story Mode** inspiré d'Instagram pour naviguer visuellement entre les activités
- Un **Explorer Mode** (Carnet d'Explorateur) pour découvrir les lieux avec des illustrations
- Une **carte interactive** avec l'itinéraire complet et les points d'intérêt

### Caractéristiques du voyage

| 🗓️ Durée | 🏙️ Étapes | 🚗 Distance | 💰 Budget |
|-----------|-----------|-------------|-----------|
| 16 jours | 5 villes | 1500 km | 10 154 € |
| 21 fév - 8 mars | SF • Monterey • SB • LA • SD | Highway 1 & US-101 | Pour 3 personnes |

---

## ✨ Fonctionnalités

### 🎬 Story Mode
Naviguez entre les activités du roadtrip comme dans les Stories Instagram :
- **Navigation immersive** : Swipe, clic, ou clavier
- **Barre de progression** interactive
- **Images en plein écran** avec informations détaillées
- **Points forts** et actions pour chaque lieu
- Support **mobile et desktop**

📖 [Documentation complète du Story Mode](STORY_MODE.md)

### 🎒 Explorer Mode (Carnet d'Explorateur)
Découvrez les lieux avec une interface visuelle illustrée :
- **Illustrations personnalisées** pour chaque lieu
- **Navigation par cartes** avec système de déblocage
- **Informations détaillées** : coût, durée, horaires
- **Design ludique** inspiré des carnets de voyage

### 🗺️ Carte Interactive
- **Carte Leaflet** avec OpenStreetMap
- **Itinéraire complet** tracé sur la carte
- **Marqueurs personnalisés** pour chaque étape
- **Polylines colorées** pour les différentes routes
- **Géolocalisation** : Bouton "Ma position"
- **Popups détaillées** pour chaque lieu

### 📱 Progressive Web App (PWA)
- **Installation** sur mobile et desktop
- **Fonctionne hors ligne** (service worker)
- **Icône personnalisée** sur l'écran d'accueil
- **Mode plein écran** (standalone)
- **Responsive design** parfait sur tous les écrans

---

## 🚀 Démo

Visitez l'application en ligne : **[Roadbook Californie 2026](https://votre-username.github.io/roadbook-californie-2026/)**

> Remplacez `votre-username` par votre nom d'utilisateur GitHub une fois GitHub Pages activé.

---

## 💻 Installation

### Prérequis

Aucun prérequis ! Le projet utilise uniquement **HTML, CSS et JavaScript vanilla**.

### Cloner le dépôt

```bash
git clone https://github.com/votre-username/roadbook-californie-2026.git
cd roadbook-californie-2026
```

### Option 1 : Ouvrir directement

Double-cliquez sur `index.html` pour ouvrir dans votre navigateur.

### Option 2 : Serveur local (recommandé)

**Avec Python :**
```bash
python -m http.server 8000
```

**Avec Node.js :**
```bash
npx http-server
```

**Avec PHP :**
```bash
php -S localhost:8000
```

Puis ouvrez [http://localhost:8000](http://localhost:8000)

---

## 🎮 Utilisation

### Démarrer l'application

1. **Ouvrez** `index.html` dans votre navigateur
2. **Explorez** les trois modes :
   - Cliquez sur **"Vivre le voyage"** pour le Story Mode
   - Cliquez sur **"Carnet d'Explorateur"** pour l'Explorer Mode
   - Consultez la **carte interactive** et l'itinéraire détaillé

### Navigation

**Story Mode :**
- 👆 **Mobile** : Swipe gauche/droite
- 🖱️ **Desktop** : Clic ou flèches ← →
- ⌨️ **Clavier** : Espace (suivant), Échap (fermer)

**Explorer Mode :**
- Cliquez sur les cartes illustrées pour découvrir les lieux
- Naviguez avec les flèches ou fermez avec ✕

**Carte :**
- Cliquez sur les marqueurs pour voir les détails
- Utilisez le bouton de géolocalisation (en bas à droite)

---

## 📁 Structure du projet

```
roadbook-californie-2026/
├── index.html              # Page principale
├── manifest.json           # Configuration PWA
├── service-worker.js       # Service worker pour le mode hors ligne
│
├── css/
│   └── style.css          # Styles de l'application
│
├── js/
│   ├── app.js             # Point d'entrée principal
│   ├── data.js            # Données du roadtrip
│   ├── explorer-data.js   # Données pour l'Explorer Mode
│   ├── explorer-mode.js   # Logique du Carnet d'Explorateur
│   ├── story-mode.js      # Logique du Story Mode
│   └── map.js             # Initialisation et gestion de la carte
│
├── images/
│   ├── places/            # Images des lieux
│   └── explorer/          # Illustrations pour l'Explorer Mode
│
├── California 2026.kml    # Fichier KML de l'itinéraire
├── routes_polylines.js    # Données des polylines pour la carte
├── placeDetails_manquants.js  # Données supplémentaires
│
├── parse_kml.py           # Script Python pour parser le KML
├── kml-converter.html     # Outil de conversion KML
│
├── README.md              # Ce fichier
├── STORY_MODE.md          # Documentation du Story Mode
└── TREE.md                # Vue d'ensemble de la structure (auto-généré)
```

---

## 🛠️ Développement

### Modifier les données

Toutes les données du voyage sont dans **`js/data.js`** :
- Itinéraire jour par jour
- Descriptions des lieux
- Coordonnées GPS
- Liens vers sites web
- Coûts et horaires

**Exemple :**
```javascript
const tripData = {
  days: [
    {
      date: "21 février 2026",
      title: "Jour 1",
      city: "San Francisco",
      activities: [
        {
          time: "10:00",
          duration: "3h",
          name: "Golden Gate Bridge",
          cost: "Gratuit",
          // ...
        }
      ]
    }
  ]
};
```

### Personnaliser le design

Les styles sont dans **`css/style.css`** :
- Variables CSS pour les couleurs
- Sections séparées pour chaque mode
- Media queries pour le responsive

**Changer les couleurs principales :**
```css
:root {
  --primary-color: #0077BE;
  --secondary-color: #FF6B35;
  --accent-color: #F7931E;
}
```

### Ajouter des images

Placez vos images dans :
- `images/places/` pour les lieux (Story Mode et carte)
- `images/explorer/` pour les illustrations (Explorer Mode)

### Travailler avec le KML

Le fichier **`California 2026.kml`** contient l'itinéraire exporté depuis Google Maps.

**Parser le KML en JavaScript :**
```bash
python parse_kml.py
```

**Ou utilisez l'outil web :**
Ouvrez `kml-converter.html` dans votre navigateur.

---

## 🧰 Technologies

| Technologie | Utilisation |
|-------------|-------------|
| **HTML5** | Structure sémantique |
| **CSS3** | Design moderne et responsive |
| **JavaScript (Vanilla)** | Logique applicative (aucun framework) |
| **Leaflet.js** | Cartographie interactive |
| **OpenStreetMap** | Tuiles de carte |
| **PWA** | Service Worker et manifest |
| **KML** | Format de données géographiques |

---

## 📚 Documentation

- **[STORY_MODE.md](STORY_MODE.md)** : Guide complet du Story Mode
- **[TREE.md](TREE.md)** : Vue d'ensemble de la structure du projet (auto-généré)

### Ressources externes

- [Leaflet Documentation](https://leafletjs.com/)
- [PWA Guide](https://web.dev/progressive-web-apps/)
- [OpenStreetMap](https://www.openstreetmap.org/)

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment participer :

1. **Fork** le projet
2. **Créez** une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. **Commitez** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrez** une Pull Request

### Idées d'améliorations

- [ ] Autoplay pour le Story Mode
- [ ] Partage de stories individuelles
- [ ] Mode sombre
- [ ] Export PDF du roadbook
- [ ] Intégration avec Google Calendar
- [ ] Notifications pour les activités
- [ ] Traduction en anglais
- [ ] Mode comparaison budget vs réel

---

## 🐛 Problèmes connus

### Les images ne s'affichent pas
- Vérifiez que vous utilisez un serveur local (pas en ouvrant directement le fichier)
- Certaines images nécessitent HTTPS (utilisez GitHub Pages)

### La carte ne se charge pas
- Vérifiez votre connexion internet (OpenStreetMap requiert une connexion)
- Ouvrez la console (F12) pour voir les erreurs

### Le mode hors ligne ne fonctionne pas
- Le service worker nécessite HTTPS (ou localhost)
- Rechargez la page après la première visite

---

## 📧 Contact

**Projet :** [roadbook-californie-2026](https://github.com/votre-username/roadbook-californie-2026)

**Issues :** [Signaler un problème](https://github.com/votre-username/roadbook-californie-2026/issues)

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

---

## 🙏 Remerciements

- **Leaflet.js** pour la bibliothèque de cartographie
- **OpenStreetMap** pour les données cartographiques
- **Unsplash** pour les images de qualité
- La communauté GitHub pour l'inspiration

---

<div align="center">

**Bon voyage en Californie ! 🌊🌴☀️**

*Fait avec ❤️ pour un roadtrip inoubliable*

</div>
