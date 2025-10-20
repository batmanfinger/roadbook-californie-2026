// ==========================================
// CARNET D'EXPLORATEUR - LOGIQUE
// ==========================================

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