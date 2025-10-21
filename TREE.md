# Arborescence du dépôt

Source: API GitHub (commit sha 0591c07c1094e545c639b77f9cd15f48a5025bdc, truncated: false)

roadbook-californie-2026/
├─ California 2026.kml                     — Export KML (trajets/points) servant de source pour itinéraires/POI.
├─ README.md                               — Présentation, installation, usage du projet.
├─ STORY_MODE.md                           — Spécifications et contenu du mode “story” (gamification).
├─ css/
│  └─ style.css                            — Styles globaux (mobile-first, variables, BEM, thèmes).
├─ images/
│  ├─ README.md                            — Consignes images (crédits, formats).
│  └─ places/                              — Dossier des visuels des lieux (aucun commentaire fichier par fichier).
│     ├─ 17-mile-drive.jpg
│     ├─ alcatraz-island.jpg
│     ├─ arrive-cdg.jpg
│     ├─ arrive-sfo.jpg
│     ├─ baker-beach.jpg
│     ├─ balade-fishermans-wharf.jpg
│     ├─ balboa-park.jpg
│     ├─ big-creek-cove-vista-point.jpg
│     ├─ big-sur---bixby-bridge.jpg
│     ├─ california-academy-of-sciences.jpg
│     ├─ cannery-row.jpg
│     ├─ carmel-beach.jpg
│     ├─ carmel-by-the-sea.jpg
│     ├─ coronado-island.jpg
│     ├─ default.svg
│     ├─ el-matador-state-beach.jpg
│     ├─ exploratorium.jpg
│     ├─ final-la-jolla-cove-walk.jpg
│     ├─ getty-villa-malibu.jpg
│     ├─ golden-gate-bridge.jpg
│     ├─ griffith-observatory.jpg
│     ├─ installation-htel.jpg
│     ├─ la-brea-tar-pits--museum.jpg
│     ├─ la-jolla-cove.jpg
│     ├─ mcway-falls.jpg
│     ├─ mission-santa-barbara.jpg
│     ├─ monterey-bay-aquarium.jpg
│     ├─ muir-woods-national-monument.jpg
│     ├─ pier-39.jpg
│     ├─ point-lobos-state-reserve.jpg
│     ├─ point-sur-lighthouse.jpg
│     ├─ san-diego-zoo-safari-park.jpg
│     ├─ santa-barbara-beach.jpg
│     ├─ santa-barbara-zoo.jpg
│     ├─ santa-monica-pier.jpg
│     ├─ sausalito.jpg
│     ├─ stearns-wharf.jpg
│     └─ venice-beach-boardwalk.jpg
├─ index.html                              — Shell principal (structure UI, liens CSS/JS, meta PWA).
├─ js/
│  ├─ app.js                               — Point d’entrée: état global, initialisation UI, routing interne.
│  ├─ data.js                              — Données d’itinéraire (jours, activités) consommées par l’app.
│  ├─ explorer-data.js                     — Données du “Carnet de l’explorateur” (contenus, items).
│  ├─ explorer-mode.js                     — Logique du mode explorateur (interactions, progression).
│  ├─ map.js                               — Carte Leaflet: marqueurs, couches, polylignes, interactions.
│  └─ story-mode.js                        — UI du mode story (narration type stories, transitions).
├─ kml-converter.html                      — Mini outil client pour prévisualiser/convertir le KML.
├─ manifest.json                           — Manifest PWA (nom, icônes, couleurs, scope).
├─ parse_kml.py                            — Script Python: parse le KML pour générer des données JS.
├─ placeDetails_additions.txt              — Backlog éditorial: ajouts à injecter dans placeDetails.
├─ placeDetails_manquants.js               — Gabarits/entrées manquantes pour placeDetails (à compléter).
├─ routes_polylines.js                     — Données polylignes (itinéraires) consommées par Leaflet.
└─ service-worker.js                       — Service Worker (cache offline, stratégie de maj).