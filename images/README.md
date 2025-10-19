# Images du Roadbook

## Structure des dossiers

- `/places/` - Images des lieux d'activité (1200x400px recommandé)
- `/icons/` - Icônes de l'application (PWA)

## Nomenclature des fichiers

Les images des lieux doivent correspondre aux noms dans `data.js`, en remplaçant les espaces par des tirets et en minuscules :

Exemples :
- "Golden Gate Bridge" → `golden-gate-bridge.jpg`
- "Monterey Bay Aquarium" → `monterey-bay-aquarium.jpg`
- "Alcatraz Island" → `alcatraz-island.jpg`

## Format recommandé

- **Format** : JPG ou WebP
- **Dimensions** : 1200x400px (ratio 3:1)
- **Poids** : < 200KB par image (optimisé pour mobile)

## Comment ajouter une image

1. Téléchargez une image du lieu depuis Unsplash, Pexels ou vos propres photos
2. Redimensionnez-la à 1200x400px
3. Compressez-la (https://tinypng.com ou https://squoosh.app)
4. Nommez-la selon la convention ci-dessus
5. Placez-la dans `/images/places/`

## Image par défaut

Si aucune image n'est trouvée, l'application utilisera `default.jpg`
