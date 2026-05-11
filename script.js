/* ============================================
   Leśny Herbarium — Logika JavaScript
   ============================================ */

(function () {
  'use strict';

  /* --- 3.1 Import danych --- */
  let plantsData = [];
  let currentCategory = 'all';
  let currentSearch = '';

  async function loadPlantsData() {
    try {
      const response = await fetch('data/plants.json');
      if (!response.ok) {
        throw new Error('Nie udało się załadować danych roślin');
      }
      plantsData = await response.json();
    } catch (error) {
      console.error('Błąd ładowania danych:', error);
      document.getElementById('plants-grid').innerHTML =
        '<p style="text-align:center; padding: 2rem; color: var(--bark-brown);">Nie udało się załadować danych. Odśwież stronę.</p>';
    }
  }

  /* --- Emoji mapping per category --- */
  const categoryEmoji = {
    drzewa: '🌳',
    krzewy: '🌿',
    kwiaty: '🌸',
    grzyby: '🍄',
    zioła: '🌱',
  };

  /* --- 3.2 Renderowanie kart --- */
  function renderPlants(plants) {
    const grid = document.getElementById('plants-grid');
    const noResults = document.getElementById('no-results');
    const counter = document.getElementById('results-counter');

    grid.innerHTML = '';

    if (plants.length === 0) {
      noResults.hidden = false;
      counter.textContent = 'Wyświetlane: 0 z ' + plantsData.length;
      return;
    }

    noResults.hidden = true;
    counter.textContent = 'Wyświetlane: ' + plants.length + ' z ' + plantsData.length;

    plants.forEach(function (plant, index) {
      const card = document.createElement('article');
      card.className = 'plant-card';
      card.setAttribute('data-id', plant.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'Szczegóły: ' + plant.name);
      card.style.animationDelay = (index * 0.05) + 's';

      card.innerHTML =
        '<div class="plant-card-image">' +
          '<span>' + (categoryEmoji[plant.category] || '🌲') + '</span>' +
        '</div>' +
        '<div class="plant-card-body">' +
          '<h3 class="plant-card-name">' + escapeHtml(plant.name) + '</h3>' +
          '<p class="plant-card-latin">' + escapeHtml(plant.latinName) + '</p>' +
          '<span class="plant-card-category">' + escapeHtml(plant.category) + '</span>' +
        '</div>';

      card.addEventListener('click', function () {
        openModal(plant);
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(plant);
        }
      });

      grid.appendChild(card);
    });
  }

  /* --- 3.3 Filtrowanie po kategorii --- */
  function filterByCategory(category) {
    currentCategory = category;
    applyFilters();
  }

  /* --- 3.4 Wyszukiwarka tekstowa --- */
  function filterBySearch(query) {
    currentSearch = query.toLowerCase().trim();
    applyFilters();
  }

  /* --- Apply both filters together --- */
  function applyFilters() {
    var filtered = plantsData.filter(function (plant) {
      var matchesCategory = currentCategory === 'all' || plant.category === currentCategory;
      var matchesSearch =
        currentSearch === '' ||
        plant.name.toLowerCase().indexOf(currentSearch) !== -1 ||
        plant.latinName.toLowerCase().indexOf(currentSearch) !== -1;
      return matchesCategory && matchesSearch;
    });
    renderPlants(filtered);
  }

  /* --- Helper: escape HTML --- */
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  /* --- 3.5 Modal --- */
  function openModal(plant) {
    var overlay = document.getElementById('modal-overlay');
    var modal = document.getElementById('plant-modal');

    document.getElementById('modal-title').textContent = plant.name;
    document.getElementById('modal-latin-name').textContent = plant.latinName;
    document.getElementById('modal-description').textContent = plant.description;
    document.getElementById('modal-height').textContent = plant.height;
    document.getElementById('modal-flowering').textContent = plant.flowering;
    document.getElementById('modal-habitat').textContent = plant.habitat;
    document.getElementById('modal-layer').textContent = plant.layer;
    document.getElementById('modal-fun-fact').textContent = plant.funFact;
    document.getElementById('modal-category').textContent = plant.category;
    document.getElementById('modal-image').textContent = categoryEmoji[plant.category] || '🌲';

    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    document.getElementById('modal-close').focus();
  }

  function closeModal() {
    var overlay = document.getElementById('modal-overlay');
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* --- Navbar scroll behavior --- */
  function initNavbarScroll() {
    var header = document.getElementById('site-header');
    var scrollThreshold = 50;

    window.addEventListener('scroll', function () {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  /* --- Hamburger menu --- */
  function initHamburger() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    navLinks.addEventListener('click', function (e) {
      if (e.target.classList.contains('nav-link')) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- Scroll to top --- */
  function initScrollToTop() {
    var btn = document.getElementById('scroll-to-top');
    var threshold = 400;

    window.addEventListener('scroll', function () {
      if (window.scrollY > threshold) {
        btn.hidden = false;
      } else {
        btn.hidden = true;
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --- Initialization --- */
  function init() {
    loadPlantsData().then(function () {
      renderPlants(plantsData);

      document.getElementById('plants-grid').querySelectorAll('.skeleton-card').forEach(function (el) {
        el.remove();
      });
    });

    /* Filter buttons */
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
        filterByCategory(btn.getAttribute('data-category'));
      });
    });

    /* Search input */
    var searchInput = document.getElementById('search-input');
    var debounceTimer;
    searchInput.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        filterBySearch(searchInput.value);
      }, 200);
    });

    /* Modal close */
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', function (e) {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !document.getElementById('modal-overlay').hidden) {
        closeModal();
      }
    });

    /* Init UI behaviors */
    initNavbarScroll();
    initHamburger();
    initScrollToTop();
  }

  /* Run on DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
