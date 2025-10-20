// ==========================================
// ROADBOOK CALIFORNIE 2026 - APPLICATION
// ==========================================

// État de l'application
let state = {
  selectedDay: null,
  openDayDetails: null
};

// ==========================================
// SERVICE WORKER
// ==========================================

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./service-worker.js')
      .then(function(reg) {
        console.log('Service Worker enregistré', reg);
      })
      .catch(function(err) {
        console.log('Erreur Service Worker', err);
      });
  });
}

// ==========================================
// INITIALISATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderDays();
  setupEventListeners();
  
  // S'assurer que la section map est visible avant d'initialiser
  const mapElement = document.getElementById('map');
  if (mapElement) {
    mapElement.classList.add('open');
  }
  
  // Initialiser la carte après un court délai
  setTimeout(() => {
    if (typeof initMap === 'function') {
      initMap();
    }
  }, 500);
});

// ==========================================
// RENDU DES JOURS
// ==========================================

function renderDays() {
  const container = document.getElementById('days-container');
  
  tripData.itinerary.forEach(day => {
    const dayCard = createDayCard(day);
    container.appendChild(dayCard);
  });
  
  // Ajouter les écouteurs pour les activités cliquables
  setupActivityListeners();
}

function createDayCard(day) {
  const card = document.createElement('div');
  card.className = 'day-card';
  card.dataset.day = day.day;
  
  // Formater la date
  const date = new Date(day.date);
  const dateFormatted = date.toLocaleDateString('fr-FR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  });
  const monthShort = date.toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase();
  
  // Construire les métadonnées
  const metaItems = [];
  if (day.distance_km > 0) {
    metaItems.push(`${day.distance_km} km`);
  }
  if (day.drive_duration) {
    metaItems.push(`${day.drive_duration}`);
  }
  if (day.activities && day.activities.length > 0) {
    const mainActivity = day.activities.find(a => a.priority === 'high' || a.priority === 'urgent_booking');
    if (mainActivity) {
      metaItems.push('<span class="priority">Priorité haute</span>');
    }
  }
  
  card.innerHTML = `
    <div class="day-card-header">
      <div class="day-number">
        <div class="number">${String(day.day).padStart(2, '0')}</div>
        <div class="month">${monthShort}</div>
      </div>
      <div class="day-content">
        <div class="day-date">${dateFormatted}</div>
        <div class="day-title">${day.title}</div>
        <div class="day-location">${day.city}</div>
        ${metaItems.length > 0 ? `
          <div class="day-meta">
            ${metaItems.join('<span>•</span>')}
          </div>
        ` : ''}
      </div>
    </div>
    <div class="day-details" id="details-${day.day}">
      ${createDayDetails(day)}
    </div>
  `;
  
  // Event listener pour ouvrir/fermer les détails
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.activity-item')) {
      toggleDayDetails(day.day);
    }
  });
  
  return card;
}

function createDayDetails(day) {
  if (!day.activities || day.activities.length === 0) {
    return '';
  }
  
  const activitiesHTML = day.activities.map(activity => {
    // Une activité est cliquable si elle a des coordonnées GPS ET un placeDetail
    const hasCoordinates = activity.lat && activity.lng;
    const hasPlaceDetail = tripData.placeDetails[activity.name];
    const hasDetails = hasCoordinates && hasPlaceDetail;
    const clickableClass = hasDetails ? 'clickable' : '';
    
    const activityMeta = [];
    if (activity.time) activityMeta.push(activity.time);
    if (activity.duration_hours) activityMeta.push(`${activity.duration_hours}h`);
    if (activity.cost_family_eur) activityMeta.push(`${activity.cost_family_eur}€`);
    
    return `
      <div class="activity-item ${clickableClass}" data-activity-name="${activity.name.replace(/"/g, '&quot;')}" ${hasDetails ? 'data-clickable="true"' : ''}>
        <div class="activity-name">${activity.name}</div>
        ${activityMeta.length > 0 ? `
          <div class="activity-meta">
            ${activityMeta.join(' • ')}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
  
  let detailsHTML = '';
  
  // Hébergement
  if (day.accommodation) {
    detailsHTML += `
      <div class="day-activities" style="margin-bottom: 20px;">
        <h4>Hébergement</h4>
        <div style="padding: 12px; background: var(--color-bg-light); border: 1px solid var(--color-border);">
          ${day.accommodation}
        </div>
      </div>
    `;
  }
  
  // Activités
  detailsHTML += `
    <div class="day-activities">
      <h4>Programme de la journée</h4>
      ${activitiesHTML}
    </div>
  `;
  
  // Trajet
  if (day.drive_duration) {
    detailsHTML += `
      <div style="margin-top: 15px; padding: 12px; background: var(--color-bg-light); border: 1px solid var(--color-border);">
        <strong>Trajet du jour :</strong> ${day.distance_km} km • ${day.drive_duration}
      </div>
    `;
  }
  
  return detailsHTML;
}

// ==========================================
// TOGGLE DAY DETAILS (ACCORDÉON)
// ==========================================

function toggleDayDetails(dayNumber) {
  const detailsElement = document.getElementById(`details-${dayNumber}`);
  const card = document.querySelector(`[data-day="${dayNumber}"]`);
  
  // Si déjà ouvert, fermer
  if (state.openDayDetails === dayNumber) {
    detailsElement.classList.remove('open');
    card.classList.remove('active');
    state.openDayDetails = null;
  } else {
    // Fermer tous les autres
    document.querySelectorAll('.day-details.open').forEach(el => {
      el.classList.remove('open');
    });
    document.querySelectorAll('.day-card.active').forEach(el => {
      el.classList.remove('active');
    });
    
    // Ouvrir celui-ci
    detailsElement.classList.add('open');
    card.classList.add('active');
    state.openDayDetails = dayNumber;
    
    // Centrer la carte sur ce jour si la fonction existe
    if (typeof focusOnStop === 'function') {
      focusOnStop(dayNumber);
    }
  }
  
  state.selectedDay = dayNumber;
}

// ==========================================
// MODAL PLACE DETAILS
// ==========================================

function openPlaceModal(placeName) {
  const placeInfo = tripData.placeDetails[placeName];
  
  if (!placeInfo) {
    console.error('Place not found:', placeName);
    return;
  }
  
  const modal = document.getElementById('place-modal');
  const modalBody = document.getElementById('modal-body');
  
  // Générer le nom de fichier image basé sur le nom du lieu
  const imageFileName = placeName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const imageUrl = placeInfo.image || `images/places/${imageFileName}.jpg`;
  const defaultImage = 'images/places/default.svg';
  
  modalBody.innerHTML = `
    <div class="modal-header-image" style="background-image: url('${imageUrl}'), url('${defaultImage}'); background-size: cover; background-position: center;"></div>
    <div class="modal-body">
      <h2 class="modal-title">${placeName}</h2>
      ${placeInfo.description ? `
        <p class="modal-description">${placeInfo.description}</p>
      ` : ''}
      
      ${placeInfo.highlights && placeInfo.highlights.length > 0 ? `
        <div class="modal-highlights">
          <h4>Points forts</h4>
          <ul>
            ${placeInfo.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${placeInfo.booking ? `
        <div class="modal-info">
          <h4>Informations pratiques</h4>
          <p><strong>Réservation :</strong> ${placeInfo.booking}</p>
        </div>
      ` : ''}
      
      ${placeInfo.website ? `
        <div class="modal-actions">
          <a href="${placeInfo.website}" target="_blank" class="modal-button">
            Voir le site web
          </a>
        </div>
      ` : ''}
    </div>
  `;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePlaceModal() {
  const modal = document.getElementById('place-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function setupActivityListeners() {
  // Attacher les écouteurs aux activités cliquables
  document.querySelectorAll('.activity-item[data-clickable="true"]').forEach(activityElement => {
    activityElement.addEventListener('click', (e) => {
      e.stopPropagation(); // Empêcher la propagation au day-card
      const activityName = activityElement.dataset.activityName;
      if (activityName) {
        // Ouvrir la modal classique par défaut
        //openPlaceModal(activityName);
        
        // Alternative : Décommenter pour ouvrir le Story Mode à la place
         if (typeof openStoryFromActivity === 'function') {
           openStoryFromActivity(activityName);
         }
      }
    });
  });
}

function setupEventListeners() {
  // Bouton Story Mode dans le Hero
  const startStoryBtn = document.getElementById('start-story-btn');
  if (startStoryBtn) {
    startStoryBtn.addEventListener('click', () => {
      if (typeof storyMode !== 'undefined') {
        storyMode.open();
      }
    });
  }
  
  // Bouton Ma position sur la carte
  const locateMeBtn = document.getElementById('locate-me-btn');
  if (locateMeBtn) {
    locateMeBtn.addEventListener('click', () => {
      if (typeof centerOnUserLocation === 'function') {
        centerOnUserLocation();
      }
    });
  }
  
  // Toggle sections (calendar et map)
  const calendarHeader = document.querySelector('.calendar-header');
  const mapHeader = document.querySelector('.map-header');
  
  if (calendarHeader) {
    calendarHeader.addEventListener('click', () => toggleSection('calendar'));
  }
  
  if (mapHeader) {
    mapHeader.addEventListener('click', () => toggleSection('map'));
  }
  
  // Fermer la modal avec le bouton
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closePlaceModal);
  }
  
  // Fermer la modal en cliquant sur l'overlay
  const modalOverlay = document.querySelector('.modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closePlaceModal);
  }
  
  // Fermer avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePlaceModal();
    }
  });
}

// La fonction initMap est définie dans map.js

// ==========================================
// TOGGLE SECTIONS (Mobile)
// ==========================================

function toggleSection(sectionName) {
    // Ne fonctionne que sur mobile
    if (window.innerWidth > 768) return;
    
    const content = document.getElementById(sectionName === 'calendar' ? 'days-container' : 'map');
    const toggle = document.getElementById(sectionName + '-toggle');
    
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        toggle.classList.remove('rotated');
    } else {
        content.classList.add('open');
        toggle.classList.add('rotated');
        
        // Si c'est la carte, recalculer sa taille après ouverture
        if (sectionName === 'map' && map) {
            setTimeout(() => map.invalidateSize(), 100);
        }
    }
}

// Ouvrir le calendrier par défaut sur mobile au chargement
window.addEventListener('load', function() {
    if (window.innerWidth <= 768) {
        const daysContainer = document.getElementById('days-container');
        const calendarToggle = document.getElementById('calendar-toggle');
        if (daysContainer && calendarToggle) {
            daysContainer.classList.add('open');
            calendarToggle.classList.add('rotated');
        }
        
        // Sur mobile, ouvrir aussi la carte par défaut
        const mapElement = document.getElementById('map');
        const mapToggle = document.getElementById('map-toggle');
        if (mapElement && mapToggle) {
            mapElement.classList.add('open');
            mapToggle.classList.add('rotated');
            
            // Recalculer la taille de la carte après ouverture
            setTimeout(() => {
                if (map) map.invalidateSize();
            }, 100);
        }
    }
});

// Note: Les fonctions ne sont plus exposées globalement
// Elles sont attachées via addEventListener dans setupEventListeners()
