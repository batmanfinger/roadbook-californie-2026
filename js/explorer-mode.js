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
  
  setupEventListeners() {
    const container = document.getElementById('explorer-mode');
    
    container.querySelector('.explorer-close').addEventListener('click', () => this.close());
    
    document.getElementById('explorer-prev').addEventListener('click', () => this.prev());
    document.getElementById('explorer-next').addEventListener('click', () => this.next());
    
    document.addEventListener('keydown', (e) => {
      if (!this.isActive) return;
      
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'Escape') this.close();
    });
    
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
  
  close() {
    this.isActive = false;
    
    const container = document.getElementById('explorer-mode');
    container.classList.add('hidden');
    document.body.style.overflow = '';
  }
  
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
  
  showSlide(index) {
    const slides = document.querySelectorAll('.explorer-slide');
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    
    const counter = document.querySelector('.explorer-counter .current');
    if (counter) {
      counter.textContent = index + 1;
    }
  }
  
  renderAllSlides() {
    const slidesContainer = document.getElementById('explorer-slides-container');
    slidesContainer.innerHTML = '';
    
    this.places.forEach((place, index) => {
      const slide = this.createPlaceSlide(place, index);
      slidesContainer.appendChild(slide);
    });
  }
  
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
    
    this.attachSlideListeners(slide, place.name);
    
    return slide;
  }
  
  attachSlideListeners(slide, placeName) {
    slide.querySelectorAll('.mission-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        this.toggleMission(placeName, index);
        item.classList.toggle('completed');
        this.updateBadgeStatus();
      });
    });
    
    const textarea = slide.querySelector('.discovery-input');
    let saveTimeout;
    
    textarea.addEventListener('input', () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        this.saveDiscovery(placeName, textarea.value);
        
        const savedMsg = slide.querySelector('.discovery-saved');
        savedMsg.classList.add('show');
        setTimeout(() => savedMsg.classList.remove('show'), 2000);
        
        this.updateBadgeStatus();
      }, 500);
    });
  }
  
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
  
  saveDiscovery(placeName, text) {
    if (!this.progress[placeName]) {
      this.progress[placeName] = { during: [], after: '' };
    }
    
    this.progress[placeName].after = text;
    this.saveProgress();
    this.updateProgressBars();
  }
  
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
  
  updateNavButtons() {
    const prevBtn = document.getElementById('explorer-prev');
    const nextBtn = document.getElementById('explorer-next');
    
    prevBtn.disabled = this.currentIndex === 0;
    nextBtn.disabled = this.currentIndex === this.places.length - 1;
  }
  
  loadProgress() {
    const saved = localStorage.getItem('explorerProgress');
    return saved ? JSON.parse(saved) : {};
  }
  
  saveProgress() {
    localStorage.setItem('explorerProgress', JSON.stringify(this.progress));
  }
}

let explorerMode;

document.addEventListener('DOMContentLoaded', () => {
  explorerMode = new ExplorerMode();
});

function openExplorerFromPlace(placeName) {
  if (!explorerMode) return;
  
  const index = explorerMode.places.findIndex(p => p.name === placeName);
  if (index !== -1) {
    explorerMode.open(index);
  } else {
    explorerMode.open(0);
  }
}