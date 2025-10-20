# 📱 Story Mode - Documentation

## Vue d'ensemble

Le **Story Mode** est une fonctionnalité immersive qui permet de naviguer entre les activités du roadtrip de manière similaire aux Stories Instagram. Cette expérience en plein écran offre une façon engageante de découvrir le voyage.

---

## ✨ Fonctionnalités

### Navigation
- ⬅️ **Flèches gauche/droite** : Naviguer entre les stories
- 👆 **Swipe** (mobile) : Glisser pour changer de story
- ⌨️ **Clavier** : 
  - `→` ou `Espace` : Story suivante
  - `←` : Story précédente
  - `Echap` : Fermer le mode Story
- 🖱️ **Clic** : Cliquer sur la story pour avancer

### Interface
- 📊 **Barre de progression** : En haut de l'écran (comme Instagram)
- 🔢 **Compteur** : "3 / 45" pour savoir où on est
- 🖼️ **Image immersive** : Photo en plein écran avec overlay gradient
- ℹ️ **Informations** : Jour, titre, ville, horaire, durée, coût
- 🌟 **Points forts** : Highlights de chaque lieu
- 🔗 **Actions** : Boutons "Site web" et "Voir sur la carte"

---

## 🚀 Comment l'utiliser

### Ouvrir le Story Mode

**Depuis le Hero :**
```
Cliquer sur le bouton "Vivre le voyage" dans la section hero
```

**Depuis le code JavaScript :**
```javascript
// Ouvrir depuis la première story
storyMode.open();

// Ouvrir depuis une story spécifique (index)
storyMode.open(10);

// Ouvrir depuis une activité par son nom
openStoryFromActivity("Golden Gate Bridge");
```

### Navigation

- **Desktop** : Utiliser les flèches ← → ou les boutons sur les côtés
- **Mobile** : Swiper à gauche/droite
- **Clavier** : Flèches, Espace, Échap

### Fermer le Story Mode

- Cliquer sur le ✕ en haut à droite
- Appuyer sur `Échap`
- Naviguer jusqu'à la fin des stories

---

## 🎨 Personnalisation

### Modifier les couleurs

Dans `css/style.css`, section `/* STORY MODE */` :

```css
.story-mode {
    background: #000; /* Couleur de fond */
}

.story-btn {
    background: rgba(255,255,255,0.15); /* Boutons */
    border: 1px solid rgba(255,255,255,0.3);
}
```

### Changer la durée des transitions

Dans `js/story-mode.js` :

```javascript
// Ajouter un autoplay (comme Instagram)
this.autoplayTimer = setTimeout(() => {
    this.next();
}, 5000); // 5 secondes par story
```

### Filtrer les stories

Dans `buildStoriesData()` :

```javascript
// Exemple : N'inclure que les activités prioritaires
if (activity.priority === 'high') {
    this.stories.push({...});
}
```

---

## 🔧 Structure technique

### Fichiers concernés

```
js/story-mode.js      → Logique du Story Mode
css/style.css         → Styles (section /* STORY MODE */)
index.html            → Bouton "Vivre le voyage"
js/app.js             → Écouteur du bouton principal
```

### Classe StoryMode

**Méthodes principales :**
- `open(startIndex)` : Ouvrir le mode story
- `close()` : Fermer le mode story
- `next()` : Story suivante
- `prev()` : Story précédente
- `render()` : Afficher la story courante

**Propriétés :**
- `stories[]` : Tableau de toutes les stories
- `currentIndex` : Index de la story actuelle
- `isActive` : État du mode story

---

## 📱 Responsive

Le Story Mode est **100% responsive** :

### Mobile (< 768px)
- Boutons de navigation plus petits
- Overlay avec padding réduit
- Actions en colonne
- Titre adapté

### Desktop
- Boutons de navigation larges
- Actions horizontales
- Texte plus grand

---

## 🎯 Améliorations possibles

### Idées pour aller plus loin

1. **Autoplay** : Avancer automatiquement toutes les X secondes
2. **Pause on hover** : Mettre en pause au survol
3. **Partage** : Bouton pour partager une story
4. **Favoris** : Marquer des stories comme favorites
5. **Filtre** : Voir uniquement certains types d'activités
6. **Son** : Ajouter un fond sonore ou narration
7. **Mode nuit** : Thème sombre/clair
8. **Animations** : Transitions plus élaborées entre stories
9. **Géolocalisation** : Afficher la distance depuis votre position
10. **Timeline** : Vue chronologique interactive

---

## 🐛 Dépannage

### Le Story Mode ne s'ouvre pas

**Vérifier :**
```javascript
// Dans la console du navigateur
console.log(storyMode); // Doit afficher l'objet StoryMode
console.log(storyMode.stories.length); // Nombre de stories
```

### Les images ne s'affichent pas

**Vérifier :**
- Les noms de fichiers dans `images/places/`
- Le fallback `default.svg` existe
- Les chemins dans `tripData.placeDetails[].image`

### La navigation ne fonctionne pas

**Vérifier :**
- Les écouteurs d'événements dans `setupEventListeners()`
- La console pour les erreurs JavaScript
- Que `story-mode.js` est bien chargé avant `app.js`

---

## 📄 Licence

Ce composant fait partie du projet Roadbook Californie 2026.

---

## 🙏 Crédits

- Design inspiré par Instagram Stories
- Développé en JavaScript vanilla
- Compatible PWA
