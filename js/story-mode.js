// ==========================================
// STORY MODE - Navigation immersive type Instagram Stories
// ==========================================

class StoryMode {
  constructor() {
    this.currentIndex = 0;
    this.stories = [];
    this.isActive = false;
    this.autoplayTimer = null;
    this.touchStartX = 0;
    this.touchEndX = 0;
    
    this.init();
  }
  
  init() {
    this.buildStoriesData();
    this.createStoryContainer();
    this.setupEventListeners();
  }
  
  // Construire la liste de toutes les activités
  buildStoriesData() {
    this.stories = [];
    
    tripData.itinerary.forEach(day => {
      if (day.activities && day.activities.length > 0) {
        day.activities.forEach(activity => {
          // Inclure uniquement les activités avec des détails
          if (tripData.placeDetails[activity.name]) {
            const details = tripData.placeDetails[activity.name];
            
            // Générer le nom de fichier image
            const imageFileName = activity.name.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^a-z0-9-]/g, '');
            const imageUrl = details.image || `images/places/${imageFileName}.jpg`;
            
            this.stories.push({
              day: day.day,
              date: day.date,
              city: day.city,
              name: activity.name,
              time: activity.time,
              duration: activity.duration_hours,
              cost: activity.cost_family_eur,
              priority: activity.priority,
              lat: activity.lat,
              lng: activity.lng,
              description: details.description,
              highlights: details.highlights,
              booking: details.booking,
              website: details.website,
              image: imageUrl
            });
          }
        });
      }
    });
  }
  
  // Créer le conteneur HTML du mode Story
  createStoryContainer() {
    const container = document.createElement('div');
    container.id = 'story-mode';
    container.className = 'story-mode hidden';
    container.innerHTML = `
      <div class="story-progress">
        ${this.stories.map((_, i) => `<div class="progress-bar" data-index="${i}"></div>`).join('')}
      </div>
      
      <div class="story-header">
        <div class="story-counter">
          <span class="current">1</span> / <span class="total">${this.stories.length}</span>
        </div>
        <button class="story-close" aria-label="Fermer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div class="story-content">
        <div class="story-bg"></div>
        <div class="story-overlay">
          <div class="story-info">
            <div class="story-day">Jour <span class="day-number">1</span></div>
            <h2 class="story-title">Titre</h2>
            <div class="story-city">Ville</div>
            <div class="story-meta">
              <span class="story-time"></span>
              <span class="story-duration"></span>
            </div>
            
            <div class="story-weather">
              <h4><span class="weather-icon"></span> Météo prévue</h4>
              <div class="weather-grid">
                <div class="weather-item">
                  <span class="weather-label">Températures</span>
                  <span class="weather-value weather-temp"></span>
                </div>
                <div class="weather-item">
                  <span class="weather-label">Conditions</span>
                  <span class="weather-value weather-conditions"></span>
                </div>
                <div class="weather-item">
                  <span class="weather-label">Précipitations</span>
                  <span class="weather-value weather-rain"></span>
                </div>
              </div>
              <div class="weather-clothing">
                👔 <strong>À prévoir :</strong> <span class="weather-clothing-text"></span>
              </div>
              <a href="#" class="weather-link" target="_blank">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Voir prévisions détaillées
              </a>
            </div>
            
            <p class="story-description"></p>
            
            <div class="story-highlights">
              <h4>À ne pas manquer</h4>
              <ul class="story-highlights-list"></ul>
            </div>
            
            <div class="story-actions">
              <a href="#" class="story-btn story-website" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Site web
              </a>
              <button class="story-btn story-map-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Carte
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <button class="story-nav story-prev" aria-label="Précédent">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <button class="story-nav story-next" aria-label="Suivant">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    `;
    
    document.body.appendChild(container);
  }
  
  // Configuration des écouteurs d'événements
  setupEventListeners() {
    const container = document.getElementById('story-mode');
    
    // Navigation
    container.querySelector('.story-prev').addEventListener('click', () => this.prev());
    container.querySelector('.story-next').addEventListener('click', () => this.next());
    container.querySelector('.story-close').addEventListener('click', () => this.close());
    
    // Clavier
    document.addEventListener('keydown', (e) => {
      if (!this.isActive) return;
      
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        this.next();
      }
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
    
    // Click sur la story pour avancer
    container.querySelector('.story-content').addEventListener('click', (e) => {
      if (!e.target.closest('.story-btn') && !e.target.closest('.weather-link')) {
        this.next();
      }
    });
    
    // Bouton voir sur la carte
    container.querySelector('.story-map-btn').addEventListener('click', () => {
      const story = this.stories[this.currentIndex];
      if (story.lat && story.lng && typeof focusOnPlace === 'function') {
        // Fermer le Story Mode d'abord
        this.close();
        
        // Attendre que la fermeture soit complète
        setTimeout(() => {
          // Sur mobile, ouvrir la section carte si elle est repliée
          if (window.innerWidth <= 768) {
            const mapElement = document.getElementById('map');
            const mapToggle = document.getElementById('map-toggle');
            if (mapElement && !mapElement.classList.contains('open')) {
              mapElement.classList.add('open');
              if (mapToggle) mapToggle.classList.add('rotated');
            }
          }
          
          // Centrer la carte sur le lieu
          focusOnPlace(story.name, story.lat, story.lng);
          
          // Scroll vers la carte
          const mapSection = document.querySelector('.map-section');
          if (mapSection) {
            mapSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
          
          // Recalculer la taille de la carte après le scroll
          setTimeout(() => {
            if (map) map.invalidateSize();
          }, 500);
        }, 100);
      }
    });
  }
  
  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.next(); // Swipe left = suivant
      } else {
        this.prev(); // Swipe right = précédent
      }
    }
  }
  
  // Ouvrir le mode Story
  open(startIndex = 0) {
    this.currentIndex = startIndex;
    this.isActive = true;
    
    const container = document.getElementById('story-mode');
    container.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    this.render();
    this.updateProgressBars();
  }
  
  // Fermer le mode Story
  close() {
    this.isActive = false;
    
    const container = document.getElementById('story-mode');
    container.classList.add('hidden');
    document.body.style.overflow = '';
    
    if (this.autoplayTimer) {
      clearTimeout(this.autoplayTimer);
    }
    
    // Fermer la modal si elle est ouverte
    const modal = document.getElementById('place-modal');
    if (modal && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  }
  
  // Aller à la story suivante
  next() {
    if (this.currentIndex < this.stories.length - 1) {
      this.currentIndex++;
      this.render();
      this.updateProgressBars();
    } else {
      this.close();
    }
  }
  
  // Aller à la story précédente
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.render();
      this.updateProgressBars();
    }
  }
  
  // Mettre à jour les barres de progression
  updateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach((bar, i) => {
      bar.classList.remove('active', 'viewed');
      
      if (i < this.currentIndex) {
        bar.classList.add('viewed');
      } else if (i === this.currentIndex) {
        bar.classList.add('active');
      }
    });
  }
  
  // Afficher la story actuelle
  render() {
    const story = this.stories[this.currentIndex];
    const container = document.getElementById('story-mode');
    
    // Mettre à jour le compteur
    container.querySelector('.story-counter .current').textContent = this.currentIndex + 1;
    
    // Image de fond
    const bg = container.querySelector('.story-bg');
    bg.style.backgroundImage = `url('${story.image}'), url('images/places/default.svg')`;
    
    // Informations
    container.querySelector('.story-day .day-number').textContent = story.day;
    container.querySelector('.story-title').textContent = story.name;
    container.querySelector('.story-city').textContent = story.city;
    
    // Meta
    const metaParts = [];
    if (story.time) metaParts.push(story.time);
    if (story.duration) metaParts.push(`${story.duration}h`);
    if (story.cost) metaParts.push(`${story.cost}€`);
    container.querySelector('.story-meta').innerHTML = metaParts.join(' • ');
    
    // Météo
    const weatherData = tripData.weatherData && tripData.weatherData[story.city];
    const weatherSection = container.querySelector('.story-weather');
    
    if (weatherData && weatherSection) {
      // Afficher la section météo
      weatherSection.style.display = 'block';
      
      // Icône
      container.querySelector('.weather-icon').textContent = weatherData.icon || '🌤️';
      
      // Températures
      container.querySelector('.weather-temp').textContent = `${weatherData.tempMin}-${weatherData.tempMax}°C`;
      
      // Conditions
      container.querySelector('.weather-conditions').textContent = weatherData.conditions;
      
      // Précipitations
      container.querySelector('.weather-rain').textContent = weatherData.rain;
      
      // Vêtements
      container.querySelector('.weather-clothing-text').textContent = weatherData.clothing;
      
      // Lien
      const weatherLink = container.querySelector('.weather-link');
      if (weatherData.weatherUrl) {
        weatherLink.href = weatherData.weatherUrl;
        weatherLink.style.display = 'inline-flex';
      } else {
        weatherLink.style.display = 'none';
      }
    } else {
      // Cacher la section météo si pas de données
      if (weatherSection) {
        weatherSection.style.display = 'none';
      }
    }
    
    // Description
    const descEl = container.querySelector('.story-description');
    if (story.description) {
      descEl.textContent = story.description;
      descEl.style.display = 'block';
    } else {
      descEl.style.display = 'none';
    }
    
    // Highlights
    const highlightsEl = container.querySelector('.story-highlights');
    const highlightsList = container.querySelector('.story-highlights-list');
    if (story.highlights && story.highlights.length > 0) {
      highlightsList.innerHTML = story.highlights
        .map(h => `<li>${h}</li>`)
        .join('');
      highlightsEl.style.display = 'block';
    } else {
      highlightsEl.style.display = 'none';
    }
    
    // Actions
    const websiteBtn = container.querySelector('.story-website');
    if (story.website) {
      websiteBtn.href = story.website;
      websiteBtn.style.display = 'flex';
    } else {
      websiteBtn.style.display = 'none';
    }
    
    // Afficher/masquer les boutons de navigation
    container.querySelector('.story-prev').style.opacity = this.currentIndex > 0 ? '1' : '0.3';
    container.querySelector('.story-next').style.opacity = this.currentIndex < this.stories.length - 1 ? '1' : '0.3';
  }
}

// Instance globale
let storyMode;

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  storyMode = new StoryMode();
});

// Fonction pour ouvrir depuis une activité spécifique
function openStoryFromActivity(activityName) {
  if (!storyMode) return;
  
  const index = storyMode.stories.findIndex(s => s.name === activityName);
  if (index !== -1) {
    storyMode.open(index);
  } else {
    storyMode.open(0);
  }
}