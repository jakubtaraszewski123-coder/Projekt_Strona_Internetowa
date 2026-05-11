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

      var emoji = categoryEmoji[plant.category] || '🌲';
      var isFirstRow = index < 4;
      var loadingAttr = isFirstRow ? 'loading="eager" fetchpriority="high"' : 'loading="lazy" decoding="async"';
      var imgSrc = escapeHtml(plant.image);

      card.innerHTML =
        '<div class="plant-card-image">' +
          '<img src="' + imgSrc + '" alt="' + escapeHtml(plant.name) + '" ' + loadingAttr + ' onerror="this.parentElement.innerHTML=\'<span>' + emoji + '</span>\';">' +
        '</div>' +
        '<div class="plant-card-body">' +
          '<h3 class="plant-card-name">' + escapeHtml(plant.name) + '</h3>' +
          '<p class="plant-card-latin">' + escapeHtml(plant.latinName) + '</p>' +
          '<span class="plant-card-category">' + escapeHtml(plant.category) + '</span>' +
        '</div>';

      var img = card.querySelector('.plant-card-image img');
      if (img) {
        img.addEventListener('load', function () {
          img.classList.add('loaded');
        });
        if (img.complete) {
          img.classList.add('loaded');
        }
      }

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

  /* --- Scroll Progress Bar --- */
  function initScrollProgress() {
    var progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    function updateProgress() {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = scrollPercent + '%';
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress();
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

    window.addEventListener('scroll', function () {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrollPercent = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;

      if (scrollPercent > 50) {
        btn.hidden = false;
      } else {
        btn.hidden = true;
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --- 4.2 Smooth scroll --- */
  function initSmoothScroll() {
    var navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = link.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        var headerHeight = document.getElementById('site-header').offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      });
    });
  }

  /* --- 4.1 Parallax hero --- */
  function initHeroParallax() {
    var hero = document.querySelector('.hero');
    var layers = document.querySelectorAll('.parallax-layer');

    if (!hero || layers.length === 0) return;

    /* Check if mobile (disable parallax on small screens) */
    function isMobile() {
      return window.innerWidth < 768;
    }

    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (isMobile()) {
            layers.forEach(function (layer) {
              layer.style.transform = 'none';
            });
            ticking = false;
            return;
          }

          var scrollY = window.scrollY;
          var heroHeight = hero.offsetHeight;

          if (scrollY > heroHeight) {
            ticking = false;
            return;
          }

          layers.forEach(function (layer) {
            var speed = parseFloat(layer.getAttribute('data-speed')) || 0.3;
            var yPos = -(scrollY * speed);
            layer.style.transform = 'translateY(' + yPos + 'px)';
          });

          ticking = false;
        });

        ticking = true;
      }
    });
  }

  /* --- Ecosystem Map --- */
  var ecoLayerData = {
    niebo: {
      emoji: '☁️',
      title: 'Niebo — Oddech Lasu',
      description: 'Warstwa atmosferyczna ponad baldachimem koron. Las produkuje ogromne ilości tlenu poprzez fotosyntezę, oddychając planetą. To tutaj zaczyna się cykl wody — parowanie z liści tworzy chmury, które powracają jako deszcz.',
      facts: [
        'Jeden hektar lasu produkuje rocznie 10-30 ton tlenu',
        'Lasy pochłaniają około 30% CO₂ emitowanego przez ludzi',
        'Transpiracja drzew dostarcza 40% wilgoci atmosferycznej'
      ],
      species: 'Ptaki drapieżne (orły, jastrzębie), owady latające, zarodniki grzybów'
    },
    korona: {
      emoji: '🌳',
      title: 'Korona Drzew — Baldachim Zieleni',
      description: 'Najwyższa warstwa lasu — tu rozgrywa się fotosynteza. Korony drzew tworzą gęsty baldachim, który pochłania 70-90% światła słonecznego. Żyje tu najwięcej gatunków zwierząt.',
      facts: [
        'Korony drzew nie dotykają się — to zjawisko "crown shyness"',
        'Jedno dorosłe drzewo ma 200 000-500 000 liści',
        'W koronach tropikalnych lasów żyje 80% gatunków zwierząt'
      ],
      species: 'Dąb, buk, brzoza, sosna; wiewiórki, dzięcioły, frettka'
    },
    pnie: {
      emoji: '🪵',
      title: 'Pnie Drzew — Kolumny Natury',
      description: 'Pnie są kolumnami dźwigającymi całą konstrukcję lasu. Wewnątrz pnia kryje się skomplikowany system transportu wody i składników odżykowych od korzeni po korony.',
      facts: [
        'Duży dąb transportuje 400 litrów wody dziennie',
        'Słoje drzew to kalendarz — każdy to jeden rok życia',
        'Najstarsze drzewo na świecie ma ponad 5000 lat'
      ],
      species: 'Kora dębu, brzozy, sosny, buka; owady ksylofagiczne, mchy naskórne'
    },
    podszyt: {
      emoji: '🌾',
      title: 'Podszyt — Poczekalnia Gigantów',
      description: 'Warstwa krzewów i młodych drzewek między runem a koronami. To tu młode drzewa czekają na swoją szansę — gdy stare drzewo runie, podszyt przejmuje jego miejsce.',
      facts: [
        'Młody buk może przetrwać w cieniu 100 lat',
        'Podszyt to naturalna bariera przed wiatrem i erozją',
        'To ulubione miejsce gniazdowania wielu ptaków śpiewających'
      ],
      species: 'Leszczyna, kruszyna, dzika róża, bez czarny'
    },
    runo: {
      emoji: '🌿',
      title: 'Runo Leśne — Zielony Dywan',
      description: 'Najniższa żywa warstwa lasu — tu rosną paprocie, mchy, grzyby i kwiaty. Runo to "kuchnia" lasu — tu rozkłada się materia organiczna i powstaje próchnica.',
      facts: [
        'Na 1 m² runa może żyć 10 000 organizmów',
        'Grzybnia pod runem łączy drzewa w "internet lasu"',
        'Niektóre kwiaty runa kwitną zanim liście drzew zasłonią słońce'
      ],
      species: 'Paprocie, mchy, borówki, konwalie, grzyby'
    },
    sciolka: {
      emoji: '🍂',
      title: 'Ściółka — Recykling Natury',
      description: 'Warstwa opadłych liści, igieł i gałęzi. To tu zaczyna się rozkład — grzyby saprofityczne i dżdżownice przetwarzają martwą materię w bogatą próchnicę.',
      facts: [
        'Las produkuje 3-5 ton ściółki na hektar rocznie',
        'Jeden liść dębu rozkłada się 2-3 lata',
        'Dżdżownica zjada swoją wagę w glebie każdego dnia'
      ],
      species: 'Grzyby saprofityczne, dżdżownice, chrząszcze, grzyby jadalne'
    },
    gleba: {
      emoji: '🪱',
      title: 'Gleba — Ukryty Świat',
      description: 'Fundament ekosystemu leśnego. Pod naszymi stopami rozciąga się ukryty świat mikroorganizmów, grzybni i korzeni. To tutaj drzewa łączą się w sieć — "Wood Wide Web".',
      facts: [
        'W jednej łyżce gleby żyje więcej organizmów niż ludzi na Ziemi',
        'Sieć grzybni może mieć setki kilometrów długości',
        'Drzewa komunikują się i wymieniają składniki przez grzybnię'
      ],
      species: 'Mikroorganizmy, grzyby mykoryzowe, bakterie, nicienie, dżdżownice'
    }
  };

  function openEcoLayerModal(layerKey) {
    var data = ecoLayerData[layerKey];
    if (!data) return;

    document.getElementById('eco-modal-emoji').textContent = data.emoji;
    document.getElementById('eco-modal-title').textContent = data.title;
    document.getElementById('eco-modal-description').textContent = data.description;

    var factsList = document.getElementById('eco-modal-facts-list');
    factsList.innerHTML = '';
    data.facts.forEach(function (fact) {
      var li = document.createElement('li');
      li.textContent = fact;
      factsList.appendChild(li);
    });

    document.getElementById('eco-modal-species').textContent = data.species;

    var overlay = document.getElementById('eco-modal-overlay');
    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    document.getElementById('eco-modal-close').focus();
  }

  function closeEcoLayerModal() {
    var overlay = document.getElementById('eco-modal-overlay');
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initEcosystemMap() {
    var layers = document.querySelectorAll('.ecosystem-layer');
    var activeLayer = null;

    layers.forEach(function (layer) {
      layer.addEventListener('click', function () {
        if (activeLayer && activeLayer !== layer) {
          activeLayer.classList.remove('active');
        }

        layer.classList.toggle('active');
        activeLayer = layer.classList.contains('active') ? layer : null;

        var layerKey = layer.getAttribute('data-layer');
        if (layerKey && ecoLayerData[layerKey]) {
          openEcoLayerModal(layerKey);
        }
      });

      layer.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          layer.click();
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (activeLayer && !e.target.closest('.ecosystem-layer')) {
        activeLayer.classList.remove('active');
        activeLayer = null;
      }
    });

    document.getElementById('eco-modal-close').addEventListener('click', closeEcoLayerModal);
    document.getElementById('eco-modal-overlay').addEventListener('click', function (e) {
      if (e.target === e.currentTarget) {
        closeEcoLayerModal();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !document.getElementById('eco-modal-overlay').hidden) {
        closeEcoLayerModal();
      }
    });
  }

  /* --- Stats Count-Up Animation --- */
  function initStatsCountUp() {
    var statNumbers = document.querySelectorAll('.stat-number');
    var hasAnimated = false;

    function animateCountUp(el) {
      var target = parseInt(el.getAttribute('data-target'), 10);
      var duration = 2000;
      var step = Math.max(1, Math.floor(target / (duration / 16)));
      var current = 0;

      function update() {
        current += step;
        if (current >= target) {
          el.textContent = target.toLocaleString('pl-PL');
          return;
        }
        el.textContent = current.toLocaleString('pl-PL');
        requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }

    function checkStats() {
      if (hasAnimated) return;

      var statsSection = document.getElementById('stats');
      if (!statsSection) return;

      var rect = statsSection.getBoundingClientRect();
      var isVisible = rect.top < window.innerHeight * 0.75;

      if (isVisible) {
        hasAnimated = true;
        statNumbers.forEach(function (el) {
          animateCountUp(el);
        });
      }
    }

    window.addEventListener('scroll', checkStats);
    checkStats();
  }

  /* --- Discover / Kliknij i poznaj --- */
  var factsData = [];
  var currentFactCategory = 'all';

  async function loadFactsData() {
    try {
      var response = await fetch('data/facts.json');
      if (!response.ok) {
        throw new Error('Nie udało się załadować ciekawostek');
      }
      factsData = await response.json();
    } catch (error) {
      console.error('Błąd ładowania ciekawostek:', error);
      var grid = document.getElementById('discover-grid');
      if (grid) {
        grid.innerHTML = '<p style="text-align:center; padding: 2rem; color: var(--bark-brown);">Nie udało się załadować ciekawostek.</p>';
      }
    }
  }

  function renderFacts(facts) {
    var grid = document.getElementById('discover-grid');
    var noResults = document.getElementById('discover-no-results');

    if (!grid) return;
    grid.innerHTML = '';

    if (facts.length === 0) {
      if (noResults) noResults.hidden = false;
      return;
    }

    if (noResults) noResults.hidden = true;

    facts.forEach(function (fact, index) {
      var card = document.createElement('article');
      card.className = 'discover-card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'Kliknij, aby poznać ciekawostkę o: ' + fact.name);
      card.style.animationDelay = (index * 0.05) + 's';

      var imgSrc = fact.image || '';
      var emoji = fact.emoji || '🌲';
      var loadingAttr = 'loading="lazy" decoding="async"';

      card.innerHTML =
        '<div class="discover-card-image">' +
          '<img src="' + escapeHtml(imgSrc) + '" alt="' + escapeHtml(fact.name) + '" ' + loadingAttr + ' onerror="this.style.display=\'none\'; this.parentElement.innerHTML=\'<span class=\'discover-card-emoji-fallback\'>' + emoji + '</span>\';">' +
        '</div>' +
        '<h3 class="discover-card-name">' + escapeHtml(fact.name) + '</h3>' +
        '<p class="discover-card-hint">Kliknij, aby poznać ciekawostkę</p>';

      card.addEventListener('click', function () {
        openFactModal(fact);
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openFactModal(fact);
        }
      });

      grid.appendChild(card);
    });
  }

  function filterFactsByCategory(category) {
    currentFactCategory = category;
    applyFactFilters();
  }

  function applyFactFilters() {
    var filtered = factsData.filter(function (fact) {
      return currentFactCategory === 'all' || fact.category === currentFactCategory;
    });
    renderFacts(filtered);
  }

  function openFactModal(fact) {
    var overlay = document.getElementById('fact-modal-overlay');
    var modal = document.getElementById('fact-modal');

    var imgEl = document.getElementById('fact-modal-image');
    if (fact.image) {
      imgEl.src = escapeHtml(fact.image);
      imgEl.alt = escapeHtml(fact.name);
      imgEl.style.display = 'block';
    } else {
      imgEl.style.display = 'none';
    }

    document.getElementById('fact-modal-title').textContent = fact.name;
    document.getElementById('fact-modal-category').textContent = fact.category;
    document.getElementById('fact-modal-fact').textContent = fact.funFact;

    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    document.getElementById('fact-modal-close').focus();
  }

  function closeFactModal() {
    var overlay = document.getElementById('fact-modal-overlay');
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initDiscover() {
    loadFactsData().then(function () {
      renderFacts(factsData);

      var grid = document.getElementById('discover-grid');
      if (grid) {
        grid.querySelectorAll('.skeleton-card').forEach(function (el) {
          el.remove();
        });
      }
    });

    var filterBtns = document.querySelectorAll('.discover-filter-btn');
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
        filterFactsByCategory(btn.getAttribute('data-category'));
      });
    });

    document.getElementById('fact-modal-close').addEventListener('click', closeFactModal);
    document.getElementById('fact-modal-overlay').addEventListener('click', function (e) {
      if (e.target === e.currentTarget) {
        closeFactModal();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !document.getElementById('fact-modal-overlay').hidden) {
        closeFactModal();
      }
    });
  }

  /* --- Keyboard Navigation (Arrow keys to scroll between sections) --- */
  function initKeyboardNavigation() {
    var sections = ['hero', 'stats', 'ecosystem-map', 'discover', 'catalog'];
    var currentIndex = 0;

    function updateCurrentIndex() {
      var scrollY = window.scrollY + window.innerHeight * 0.4;
      for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY) {
          currentIndex = i;
        }
      }
    }

    function scrollToSection(index) {
      var section = document.getElementById(sections[index]);
      if (section) {
        var headerHeight = document.getElementById('site-header').offsetHeight;
        var targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        currentIndex = index;
      }
    }

    document.addEventListener('keydown', function (e) {
      var activeElement = document.activeElement;
      var isInputFocused = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
      var isModalOpen = !document.getElementById('modal-overlay').hidden || !document.getElementById('fact-modal-overlay').hidden;

      if (isInputFocused || isModalOpen) return;

      updateCurrentIndex();

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
          scrollToSection(currentIndex + 1);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentIndex > 0) {
          scrollToSection(currentIndex - 1);
        }
      }
    });

    window.addEventListener('scroll', function () {
      updateCurrentIndex();
    });
  }

  /* --- Section Memory (localStorage) --- */
  function initSectionMemory() {
    var sections = ['hero', 'stats', 'ecosystem-map', 'discover', 'catalog'];
    var STORAGE_KEY = 'lesny-herbarium-last-section';
    var debounceTimer;

    function getCurrentSection() {
      var scrollY = window.scrollY + window.innerHeight * 0.4;
      for (var i = sections.length - 1; i >= 0; i--) {
        var section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY) {
          return sections[i];
        }
      }
      return sections[0];
    }

    function saveSection() {
      try {
        var current = getCurrentSection();
        localStorage.setItem(STORAGE_KEY, current);
      } catch (e) {
        /* localStorage not available */
      }
    }

    function restoreSection() {
      try {
        var saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return;

        var target = document.getElementById(saved);
        if (target) {
          var headerHeight = document.getElementById('site-header').offsetHeight;
          var targetPosition = target.offsetTop - headerHeight;
          window.scrollTo({ top: targetPosition, behavior: 'auto' });
        }
      } catch (e) {
        /* localStorage not available */
      }
    }

    restoreSection();

    window.addEventListener('scroll', function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(saveSection, 300);
    });
  }

  /* --- Forest Particles (dust/pollen on scroll) --- */
  function initForestParticles() {
    if (window.innerWidth < 768) return;

    var canvas = document.createElement('canvas');
    canvas.className = 'forest-particles-canvas';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:50;';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var particles = [];
    var maxParticles = 60;
    var isScrolling = false;
    var scrollTimeout;
    var animFrame;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: -(Math.random() * 1.5 + 0.5),
        opacity: Math.random() * 0.5 + 0.2,
        life: 1,
        decay: Math.random() * 0.005 + 0.003,
        color: Math.random() > 0.5 ? '212, 168, 67' : '107, 143, 94',
      };
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isScrolling && particles.length < maxParticles) {
        for (var i = 0; i < 3; i++) {
          particles.push(createParticle());
        }
      }

      for (var i = particles.length - 1; i >= 0; i--) {
        var p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= p.decay;

        if (p.life <= 0 || p.y < -20) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color + ', ' + (p.life * p.opacity) + ')';
        ctx.fill();
      }

      if (particles.length > 0) {
        animFrame = requestAnimationFrame(animate);
      } else {
        animFrame = null;
      }
    }

    window.addEventListener('scroll', function () {
      isScrolling = true;
      clearTimeout(scrollTimeout);

      if (!animFrame) {
        animFrame = requestAnimationFrame(animate);
      }

      scrollTimeout = setTimeout(function () {
        isScrolling = false;
      }, 150);
    });

    window.addEventListener('resize', resize);
    resize();
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
    initScrollProgress();
    initForestParticles();
    initSectionMemory();
    initKeyboardNavigation();
    initSmoothScroll();
    initNavbarScroll();
    initHamburger();
    initScrollToTop();
    initHeroParallax();
    initStatsCountUp();
    initEcosystemMap();
    initDiscover();
  }

  /* Run on DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
