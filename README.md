# 🌴 Roadbook Californie 2026

Roadbook interactif pour notre roadtrip familial en Californie - Février 2026

## Structure du dépôt

Consulte la vue d’ensemble ici → [TREE.md](./TREE.md)

Ce fichier est régénéré automatiquement à chaque push sur `main` par GitHub Actions.


## 🎨 Personnalisation

### Changer l'image hero

Dans `css/style.css`, ligne ~90, modifiez l'URL :

```css
.hero {
    background: linear-gradient(...),
                url('VOTRE_URL_IMAGE_ICI');
}
```

**Options pour l'image :**
- Unsplash : `https://images.unsplash.com/photo-ID?w=1920&q=85`
- Votre propre image : Uploadez dans `assets/images/` puis `url('../assets/images/hero.jpg')`

### Modifier les données

Toutes les données sont dans `js/data.js` :
- Itinéraire jour par jour
- Descriptions des lieux
- Liens vers sites web

## 🛠️ Développement local

Pour tester en local avant de publier :

1. **Option simple :** Double-cliquez sur `index.html`

2. **Option avec serveur local :**
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx http-server
```

Puis ouvrez : `http://localhost:8000`

## 📝 Futures améliorations

- [ ] Intégration Google Maps
- [ ] Vos propres photos
- [ ] Mode sombre
- [ ] Export PDF
- [ ] Partage social

## 🎯 Fonctionnalités actuelles

✅ Design minimaliste élégant  
✅ 16 jours détaillés avec accordéons  
✅ Fiches détaillées des lieux majeurs  
✅ Responsive (mobile/desktop)  
✅ Images Unsplash automatiques  
✅ Navigation intuitive  

## 🐛 Problèmes courants

**Les images ne s'affichent pas :**
- Vérifiez que vous êtes bien sur HTTPS (GitHub Pages)
- Certaines images Unsplash peuvent être bloquées : changez l'URL

**Le site n'est pas accessible :**
- Attendez 2-5 minutes après activation GitHub Pages
- Vérifiez que le repo est bien "Public"
- L'URL doit être exactement : `https://username.github.io/repo-name/`

**Les accordéons ne s'ouvrent pas :**
- Vérifiez que tous les fichiers JS sont bien dans le dossier `js/`
- Ouvrez la console (F12) pour voir les erreurs

## 📧 Contact

Pour toute question sur ce projet, consultez la documentation GitHub Pages : https://docs.github.com/en/pages

---

**Bon voyage en Californie ! 🌊🌴☀️**
