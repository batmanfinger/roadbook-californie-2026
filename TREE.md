# Arborescence du dépôt

Source: Git commit 1a094b27481142b75236a004bb2c16e894d909af

roadbook-californie-2026/
├─ .github/workflows/update-tree.yml 
├─ California 2026.kml — Export KML (trajets/points) source pour itinéraires/POI.
├─ README.md — Présentation, installation, usage du projet.
├─ STORY_MODE.md — Spécifications et contenu du mode “story” (gamification).
├─ TREE.md 
├─ css/style.css — Styles globaux (mobile-first, variables, BEM, thèmes).
├─ images/README.md — Consignes images (crédits, formats).
├─ index.html 
├─ js/app.js — Point d’entrée: état global, init UI, événements, navigation interne.
├─ js/data.js — Données d’itinéraire (jours, activités) consommées par l’app.
├─ js/explorer-data.js — Données du “Carnet de l’explorateur” (contenus, items).
├─ js/explorer-mode.js — Logique du mode explorateur (interactions, progression).
├─ js/map.js — Carte Leaflet: marqueurs, couches, polylignes, interactions.
├─ js/story-mode.js — UI du mode story (narration type stories, transitions).
├─ kml-converter.html — Outil client pour prévisualiser/convertir le KML.
├─ manifest.json — Manifest PWA (nom, icônes, couleurs, scope).
├─ parse_kml.py — Script Python: parse le KML pour générer des données JS.
├─ placeDetails_additions.txt — Backlog éditorial: ajouts à injecter dans placeDetails.
├─ placeDetails_manquants.js — Gabarits/manquants pour placeDetails (à compléter).
├─ routes_polylines.js — Données polylignes (itinéraires) consommées par Leaflet.
├─ service-worker.js — Service Worker (cache offline, stratégie de maj).
├─ images/
│  └─ places/
│     │  ├─ 17-mile-drive.jpg
│     │  ├─ alcatraz-island.jpg
│     │  ├─ arrive-cdg.jpg
│     │  ├─ arrive-sfo.jpg
│     │  ├─ baker-beach.jpg
│     │  ├─ balade-fishermans-wharf.jpg
│     │  ├─ balboa-park.jpg
│     │  ├─ big-creek-cove-vista-point.jpg
│     │  ├─ big-sur---bixby-bridge.jpg
│     │  ├─ california-academy-of-sciences.jpg
│     │  ├─ cannery-row.jpg
│     │  ├─ carmel-beach.jpg
│     │  ├─ carmel-by-the-sea.jpg
│     │  ├─ coronado-island.jpg
│     │  ├─ default.svg
│     │  ├─ el-matador-state-beach.jpg
│     │  ├─ exploratorium.jpg
│     │  ├─ final-la-jolla-cove-walk.jpg
│     │  ├─ getty-villa-malibu.jpg
│     │  ├─ golden-gate-bridge.jpg
│     │  ├─ griffith-observatory.jpg
│     │  ├─ installation-htel.jpg
│     │  ├─ la-brea-tar-pits--museum.jpg
│     │  ├─ la-jolla-cove.jpg
│     │  ├─ mcway-falls.jpg
│     │  ├─ mission-santa-barbara.jpg
│     │  ├─ monterey-bay-aquarium.jpg
│     │  ├─ muir-woods-national-monument.jpg
│     │  ├─ pier-39.jpg
│     │  ├─ point-lobos-state-reserve.jpg
│     │  ├─ point-sur-lighthouse.jpg
│     │  ├─ san-diego-zoo-safari-park.jpg
│     │  ├─ santa-barbara-beach.jpg
│     │  ├─ santa-barbara-zoo.jpg
│     │  ├─ santa-monica-pier.jpg
│     │  ├─ sausalito.jpg
│     │  ├─ stearns-wharf.jpg
│     │  ├─ venice-beach-boardwalk.jpg
