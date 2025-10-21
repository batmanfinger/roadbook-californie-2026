// ==========================================
// CARNET D'EXPLORATEUR - MODE IMMERSIF
// ==========================================

class ExplorerMode {
  constructor() {
    this.currentIndex = 0;
    this.places = [];
    this.isActive = false;
    this.progress = this.loadProgress();
    this.touchStartX = 0;
    this.touchEndX = 0;
    
    this.init();
  }
  
  init() {
    this.buildPlacesList();
    this.createExplorerContainer();
    this.setupEventListeners();
  }
  
  // Construire la liste des lieux avec missions
  buildPlacesList() {
    this.places = [];
    
    tripData.itinerary.forEach(day => {
      if (day.activities && day.activities.length > 0) {
        day.activities.forEach(activity => {
          if (explorerData.missions[activity.name]) {
            const details = tripData.placeDetails[activity.name];
            const imageFileName = activity.name.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^a-z0-9-]/g, '');
            const imageUrl = details?.image || `images/places/${imageFileName}.jpg`;
            
            this.places.push({
              name: activity.name,
              day: day.day,
              city: day.city,
              mission: explorerData.missions[activity.name],
              image: imageUrl
            });
          }
        });
      }
    });
  }
  
  // Créer le conteneur HTML
  createExplorerContainer() {
    const container = document.createElement('div');
    container.id = 'explorer-mode';
    container.className = 'explorer-mode hidden';
    container.innerHTML = `
      <div class="explorer-progress-bars">
        ${this.places.map((_, i) => `<div class="explorer-progress-bar" data-index="${i}"></div>`).join('')}
      </div>
      
      <div class="explorer-header">
        <div class="explorer-title">
          <span style="font-size: 1.5rem;">🎒</span>
          <h2>Mon Carnet d'Explorateur</h2>
        </div>
        <div class="explorer-counter">
          <span class="current">1</span> / <span class="total">${this.places.length}</span>
        </div>
        <button class="explorer-close" aria-label="Fermer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div class="explorer-content" id="explorer-slides-container">
        <!-- Les slides seront injectées ici -->
      </div>
      
      <button class="explorer-nav explorer-prev" id="explorer-prev" aria-label="Précédent">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <button class="explorer-nav explorer-next" id="explorer-next" aria-label="Suivant">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    `;
    
    document.body.appendChild(container);
  }
  
  // Configuration des événements
  setupEventListeners() {
    const container = document.getElementById('explorer-mode');
    
    // Fermer
    container.querySelector('.explorer-close').addEventListener('click', () => this.close());
    
    // Navigation
    document.getElementById('explorer-prev').addEventListener('click', () => this.prev());
    document.getElementById('explorer-next').addEventListener('click', () => this.next());
    
    // Clavier
    document.addEventListener('keydown', (e) => {
      if (!this.isActive) return;
      
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'Escape') this.close();
    });
    
    // Touch swipe
    container.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    container.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });
  }
  
  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
  
  // Ouvrir le carnet
  open(placeIndex = 0) {
    this.currentIndex = placeIndex;
    this.isActive = true;
    
    const container = document.getElementById('explorer-mode');
    container.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    this.renderAllSlides();
    this.showSlide(this.currentIndex);
    this.updateProgressBars();
    this.updateNavButtons();
  }
  
  // Fermer le carnet
  close() {
    this.isActive = false;
    
    const container = document.getElementById('explorer-mode');
    container.classList.add('hidden');
    document.body.style.overflow = '';
  }
  
  // Navigation
  next() {
    if (this.currentIndex < this.places.length - 1) {
      this.currentIndex++;
      this.showSlide(this.currentIndex);
      this.updateProgressBars();
      this.updateNavButtons();
    }
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showSlide(this.currentIndex);
      this.updateProgressBars();
      this.updateNavButtons();
    }
  }
  
  // Afficher une slide
  showSlide(index) {
    const slides = document.querySelectorAll('.explorer-slide');
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    
    // Mettre à jour le compteur
    const counter = document.querySelector('.explorer-counter .current');
    if (counter) {
      counter.textContent = index + 1;
    }
  }
  
  // Render toutes les slides
  renderAllSlides() {
    const slidesContainer = document.getElementById('explorer-slides-container');
    slidesContainer.innerHTML = '';
    
    this.places.forEach((place, index) => {
      const slide = this.createPlaceSlide(place, index);
      slidesContainer.appendChild(slide);
    });
  }
  
  // Créer une slide de lieu
  createPlaceSlide(place, index) {
    const mission = place.mission;
    const placeProgress = this.progress[place.name] || {
      during: [],
      after: ''
    };
    
    const allChecked = mission.during.length === placeProgress.during.length;
    const hasDiscovery = placeProgress.after && placeProgress.after.trim() !== '';
    const isCompleted = allChecked && hasDiscovery;
    
    const slide = document.createElement('div');
    slide.className = 'explorer-slide';
    slide.dataset.placeIndex = index;
    
    slide.innerHTML = `
      <div class="explorer-bg" style="background-image: url('${place.image}'), url('images/places/default.svg');"></div>
      <div class="explorer-overlay">
        <div class="explorer-info">
          <div class="explorer-place-header">
            <span class="explorer-icon">${mission.icon}</span>
            <h2 class="explorer-place-title">${place.name}</h2>
            <span class="explorer-badge ${isCompleted ? 'earned' : ''}">
              ${isCompleted ? '⭐' : '🔒'} ${mission.badge}
            </span>
          </div>
          
          <!-- AVANT LA VISITE -->
          <div class="explorer-section">
            <div class="explorer-section-title">
              <span>🔍</span>
              Avant la visite
            </div>
            <div class="fun-fact">
              <strong>Le savais-tu ?</strong> ${mission.before.funFact}
            </div>
            <div class="question-box">
              <p>${mission.before.question}</p>
              <div class="answer-box">
                💡 ${mission.before.answer}
              </div>
            </div>
          </div>
          
          <!-- PENDANT LA VISITE -->
          <div class="explorer-section">
            <div class="explorer-section-title">
              <span>✓</span>
              Pendant la visite
            </div>
            <ul class="mission-checklist">
              ${mission.during.map((item, idx) => `
                <li class="mission-item ${placeProgress.during.includes(idx) ? 'completed' : ''}" 
                    data-place="${place.name}" 
                    data-index="${idx}">
                  <div class="mission-checkbox">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span class="mission-text">${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          
          <!-- APRÈS LA VISITE -->
          <div class="explorer-section">
            <div class="explorer-section-title">
              <span>⭐</span>
              Après la visite
            </div>
            <p style="margin-bottom: 15px; opacity: 0.9;">${mission.after.prompt}</p>
            <textarea 
              class="discovery-input" 
              data-place="${place.name}"
              placeholder="Écris ce que tu as découvert...">${placeProgress.after || ''}</textarea>
            <div class="discovery-saved">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Sauvegardé !
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Event listeners pour cette slide
    this.attachSlideListeners(slide, place.name);
    
    return slide;
  }
  
  // Attacher les événements à une slide
  attachSlideListeners(slide, placeName) {
    // Checkboxes
    slide.querySelectorAll('.mission-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        this.toggleMission(placeName, index);
        item.classList.toggle('completed');
        this.updateBadgeStatus();
      });
    });
    
    // Textarea
    const textarea = slide.querySelector('.discovery-input');
    let saveTimeout;
    
    textarea.addEventListener('input', () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        this.saveDiscovery(placeName, textarea.value);
        
        // Afficher "Sauvegardé"
        const savedMsg = slide.querySelector('.discovery-saved');
        savedMsg.classList.add('show');
        setTimeout(() => savedMsg.classList.remove('show'), 2000);
        
        this.updateBadgeStatus();
      }, 500);
    });
  }
  
  // Toggle une mission
  toggleMission(placeName, missionIndex) {
    if (!this.progress[placeName]) {
      this.progress[placeName] = { during: [], after: '' };
    }
    
    const during = this.progress[placeName].during;
    const idx = during.indexOf(missionIndex);
    
    if (idx > -1) {
      during.splice(idx, 1);
    } else {
      during.push(missionIndex);
    }
    
    this.saveProgress();
    this.updateProgressBars();
  }
  
  // Sauvegarder une découverte
  saveDiscovery(placeName, text) {
    if (!this.progress[placeName]) {
      this.progress[placeName] = { during: [], after: '' };
    }
    
    this.progress[placeName].after = text;
    this.saveProgress();
    this.updateProgressBars();
  }
  
  // Mettre à jour le statut du badge
  updateBadgeStatus() {
    this.places.forEach((place, index) => {
      const placeProgress = this.progress[place.name] || { during: [], after: '' };
      const allChecked = place.mission.during.length === placeProgress.during.length;
      const hasDiscovery = placeProgress.after && placeProgress.after.trim() !== '';
      const isCompleted = allChecked && hasDiscovery;
      
      const slide = document.querySelector(`.explorer-slide[data-place-index="${index}"]`);
      if (slide) {
        const badge = slide.querySelector('.explorer-badge');
        if (badge) {
          badge.className = `explorer-badge ${isCompleted ? 'earned' : ''}`;
          badge.innerHTML = `${isCompleted ? '⭐' : '🔒'} ${place.mission.badge}`;
        }
      }
    });
  }
  
  // Mettre à jour les barres de progression
  updateProgressBars() {
    const bars = document.querySelectorAll('.explorer-progress-bar');
    
    bars.forEach((bar, i) => {
      bar.classList.remove('active', 'completed');
      
      const place = this.places[i];
      const placeProgress = this.progress[place.name] || { during: [], after: '' };
      const allChecked = place.mission.during.length === placeProgress.during.length;
      const hasDiscovery = placeProgress.after && placeProgress.after.trim() !== '';
      const isCompleted = allChecked && hasDiscovery;
      
      if (isCompleted) {
        bar.classList.add('completed');
      } else if (i === this.currentIndex) {
        bar.classList.add('active');
      }
    });
  }
  
  // Mettre à jour les boutons de navigation
  updateNavButtons() {
    const prevBtn = document.getElementById('explorer-prev');
    const nextBtn = document.getElementById('explorer-next');
    
    prevBtn.disabled = this.currentIndex === 0;
    nextBtn.disabled = this.currentIndex === this.places.length - 1;
  }
  
  // Charger la progression depuis localStorage
  loadProgress() {
    const saved = localStorage.getItem('explorerProgress');
    return saved ? JSON.parse(saved) : {};
  }
  
  // Sauvegarder la progression dans localStorage
  saveProgress() {
    localStorage.setItem('explorerProgress', JSON.stringify(this.progress));
  }
}

// Instance globale
let explorerMode;

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  explorerMode = new ExplorerMode();
});

// Fonction pour ouvrir depuis un lieu spécifique
function openExplorerFromPlace(placeName) {
  if (!explorerMode) return;
  
  const index = explorerMode.places.findIndex(p => p.name === placeName);
  if (index !== -1) {
    explorerMode.open(index);
  } else {
    explorerMode.open(0);
  }
}

class ExplorerMode {
  constructor() {
    this.currentIndex = 0;
    this.places = [];
    this.isActive = false;
    this.progress = this.loadProgress();
    
    this.init();
  }
  
  init() {
    this.buildPlacesList();
    this.createExplorerContainer();
    this.setupEventListeners();
  }
  
  // Construire la liste des lieux avec missions
  buildPlacesList() {
    this.places = [];
    
    // Parcourir l'itinéraire et récupérer les lieux qui ont des missions
    tripData.itinerary.forEach(day => {
      if (day.activities && day.activities.length > 0) {
        day.activities.forEach(activity => {
          // Vérifier si ce lieu a une mission dans explorerData
          if (explorerData.missions[activity.name]) {
            this.places.push({
              name: activity.name,
              day: day.day,
              city: day.city,
              mission: explorerData.missions[activity.name]
            });
          }
        });
      }
    });
  }
  
  // Créer le conteneur HTML
  createExplorerContainer() {
    const container = document.createElement('div');
    container.id = 'explorer-mode';
    container.className = 'explorer-mode hidden';
    container.innerHTML = `
      <div class="explorer-header">
        <div class="explorer-header-content">
          <div class="explorer-title">
            <span style="font-size: 2rem;">🎒</span>
            <h2>Mon Carnet d'Explorateur</h2>
          </div>
          <div class="explorer-progress">
            <span class="progress-badge">
              <span class="places-completed">0</span>/<span class="places-total">${this.places.length}</span> lieux
            </span>
          </div>
          <button class="explorer-close" aria-label="Fermer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="explorer-content">
        <div class="explorer-container" id="explorer-cards-container">
          <!-- Les cards seront injectées ici -->
        </div>
      </div>
      
      <div class="explorer-nav">
        <button class="explorer-nav-btn" id="explorer-prev" aria-label="Précédent">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="explorer-nav-btn" id="explorer-next" aria-label="Suivant">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    `;
    
    document.body.appendChild(container);
  }
  
  // Configuration des événements
  setupEventListeners() {
    const container = document.getElementById('explorer-mode');
    
    // Fermer
    container.querySelector('.explorer-close').addEventListener('click', () => this.close());
    
    // Navigation
    document.getElementById('explorer-prev').addEventListener('click', () => this.prev());
    document.getElementById('explorer-next').addEventListener('click', () => this.next());
    
    // Clavier
    document.addEventListener('keydown', (e) => {
      if (!this.isActive) return;
      
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'Escape') this.close();
    });
  }
  
  // Ouvrir le carnet
  open(placeIndex = 0) {
    this.currentIndex = placeIndex;
    this.isActive = true;
    
    const container = document.getElementById('explorer-mode');
    container.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    this.renderAllCards();
    this.scrollToCurrentCard();
    this.updateNavButtons();
    this.updateProgress();
  }
  
  // Fermer le carnet
  close() {
    this.isActive = false;
    
    const container = document.getElementById('explorer-mode');
    container.classList.add('hidden');
    document.body.style.overflow = '';
  }
  
  // Navigation
  next() {
    if (this.currentIndex < this.places.length - 1) {
      this.currentIndex++;
      this.scrollToCurrentCard();
      this.updateNavButtons();
    }
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToCurrentCard();
      this.updateNavButtons();
    }
  }
  
  // Render toutes les cards
  renderAllCards() {
    const cardsContainer = document.getElementById('explorer-cards-container');
    cardsContainer.innerHTML = '';
    
    this.places.forEach((place, index) => {
      const card = this.createPlaceCard(place, index);
      cardsContainer.appendChild(card);
    });
  }
  
  // Créer une card de lieu
  createPlaceCard(place, index) {
    const mission = place.mission;
    const placeProgress = this.progress[place.name] || {
      during: [],
      after: ''
    };
    
    const allChecked = mission.during.length === placeProgress.during.length;
    const hasDiscovery = placeProgress.after && placeProgress.after.trim() !== '';
    const isCompleted = allChecked && hasDiscovery;
    
    const card = document.createElement('div');
    card.className = 'explorer-card';
    card.dataset.placeIndex = index;
    card.id = `explorer-card-${index}`;
    
    card.innerHTML = `
      <div class="explorer-card-header">
        <span class="explorer-icon">${mission.icon}</span>
        <div class="explorer-place-name">
          <h3>${place.name}</h3>
          <span class="${isCompleted ? 'explorer-badge-earned' : 'explorer-badge-locked'}">
            ${isCompleted ? '⭐' : '🔒'} ${mission.badge}
          </span>
        </div>
      </div>
      
      <!-- AVANT LA VISITE -->
      <div class="explorer-section">
        <div class="explorer-section-title">
          <span class="section-emoji">🔍</span>
          Avant la visite
        </div>
        <div class="fun-fact">
          <strong>Le savais-tu ?</strong> ${mission.before.funFact}
        </div>
        <div class="question-box">
          <p>${mission.before.question}</p>
          <div class="answer-box">
            💡 Réponse : ${mission.before.answer}
          </div>
        </div>
      </div>
      
      <!-- PENDANT LA VISITE -->
      <div class="explorer-section">
        <div class="explorer-section-title">
          <span class="section-emoji">✓</span>
          Pendant la visite - Ma chasse aux trésors
        </div>
        <ul class="mission-checklist">
          ${mission.during.map((item, idx) => `
            <li class="mission-item ${placeProgress.during.includes(idx) ? 'completed' : ''}" 
                data-place="${place.name}" 
                data-index="${idx}">
              <div class="mission-checkbox">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span class="mission-text">${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      
      <!-- APRÈS LA VISITE -->
      <div class="explorer-section">
        <div class="explorer-section-title">
          <span class="section-emoji">⭐</span>
          Après la visite - Ma découverte
        </div>
        <p style="margin-bottom: 10px; color: var(--color-gray);">${mission.after.prompt}</p>
        <textarea 
          class="discovery-input" 
          data-place="${place.name}"
          placeholder="Écris ou dessine ce que tu as découvert...">${placeProgress.after || ''}</textarea>
        <div class="discovery-saved">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Sauvegardé !
        </div>
      </div>
    `;
    
    // Event listeners pour cette card
    this.attachCardListeners(card, place.name);
    
    return card;
  }
  
  // Attacher les événements à une card
  attachCardListeners(card, placeName) {
    // Checkboxes
    card.querySelectorAll('.mission-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        this.toggleMission(placeName, index);
        item.classList.toggle('completed');
        this.updateProgress();
      });
    });
    
    // Textarea
    const textarea = card.querySelector('.discovery-input');
    let saveTimeout;
    
    textarea.addEventListener('input', () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        this.saveDiscovery(placeName, textarea.value);
        
        // Afficher "Sauvegardé"
        const savedMsg = card.querySelector('.discovery-saved');
        savedMsg.classList.add('show');
        setTimeout(() => savedMsg.classList.remove('show'), 2000);
      }, 500);
    });
  }
  
  // Toggle une mission
  toggleMission(placeName, missionIndex) {
    if (!this.progress[placeName]) {
      this.progress[placeName] = { during: [], after: '' };
    }
    
    const during = this.progress[placeName].during;
    const idx = during.indexOf(missionIndex);
    
    if (idx > -1) {
      during.splice(idx, 1);
    } else {
      during.push(missionIndex);
    }
    
    this.saveProgress();
  }
  
  // Sauvegarder une découverte
  saveDiscovery(placeName, text) {
    if (!this.progress[placeName]) {
      this.progress[placeName] = { during: [], after: '' };
    }
    
    this.progress[placeName].after = text;
    this.saveProgress();
    this.updateProgress();
  }
  
  // Scroll vers la card actuelle
  scrollToCurrentCard() {
    const card = document.getElementById(`explorer-card-${this.currentIndex}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  // Mettre à jour les boutons de navigation
  updateNavButtons() {
    const prevBtn = document.getElementById('explorer-prev');
    const nextBtn = document.getElementById('explorer-next');
    
    prevBtn.disabled = this.currentIndex === 0;
    nextBtn.disabled = this.currentIndex === this.places.length - 1;
  }
  
  // Mettre à jour la progression
  updateProgress() {
    let completedCount = 0;
    
    this.places.forEach(place => {
      const placeProgress = this.progress[place.name];
      if (placeProgress) {
        const allChecked = place.mission.during.length === placeProgress.during.length;
        const hasDiscovery = placeProgress.after && placeProgress.after.trim() !== '';
        
        if (allChecked && hasDiscovery) {
          completedCount++;
        }
      }
    });
    
    const countElement = document.querySelector('.places-completed');
    if (countElement) {
      countElement.textContent = completedCount;
    }
    
    // Mettre à jour les badges dans les cards
    this.places.forEach((place, index) => {
      const placeProgress = this.progress[place.name] || { during: [], after: '' };
      const allChecked = place.mission.during.length === placeProgress.during.length;
      const hasDiscovery = placeProgress.after && placeProgress.after.trim() !== '';
      const isCompleted = allChecked && hasDiscovery;
      
      const card = document.getElementById(`explorer-card-${index}`);
      if (card) {
        const badge = card.querySelector('.explorer-badge-earned, .explorer-badge-locked');
        if (badge) {
          badge.className = isCompleted ? 'explorer-badge-earned' : 'explorer-badge-locked';
          badge.innerHTML = `${isCompleted ? '⭐' : '🔒'} ${place.mission.badge}`;
        }
      }
    });
  }
  
  // Charger la progression depuis localStorage
  loadProgress() {
    const saved = localStorage.getItem('explorerProgress');
    return saved ? JSON.parse(saved) : {};
  }
  
  // Sauvegarder la progression dans localStorage
  saveProgress() {
    localStorage.setItem('explorerProgress', JSON.stringify(this.progress));
  }
}

// Instance globale
let explorerMode;

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  explorerMode = new ExplorerMode();
});

// Fonction pour ouvrir depuis un lieu spécifique
function openExplorerFromPlace(placeName) {
  if (!explorerMode) return;
  
  const index = explorerMode.places.findIndex(p => p.name === placeName);
  if (index !== -1) {
    explorerMode.open(index);
  } else {
    explorerMode.open(0);
  }
}