const plantsData = [
  {
    "id": 1,
    "name": "Dąb Szypułkowy",
    "scientificName": "Quercus robur",
    "category": "drzewa",
    "description": "Okazałe drzewo liściaste osiągające wysokość do 40 m. Posiada gruby pień pokryty ciemnoszarą korą i rozłożystą koronę. Liście są klapowane, z wydłużonymi łatkami.",
    "habitat": "Lasy liściaste i mieszane, dąbrowy, łęgi",
    "season": "Cały rok",
    "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400"
  },
  {
    "id": 2,
    "name": "Grusza Polna",
    "scientificName": "Pyrus pyraster",
    "category": "drzewa",
    "description": "Dziki przodek gruszy domowej. Dorasta do 20 m wysokości. Kwitnie białymi kwiatami wczesną wiosną. Owoce są małe, twarde i aromatyczne.",
    "habitat": "Zarośla, skraje lasów, ciepłe zbocza",
    "season": "Wiosna (kwitnienie), Jesień (owocowanie)",
    "image": "https://images.unsplash.com/photo-1510924751313-c76f70ac0c26?w=400"
  },
  {
    "id": 3,
    "name": "Leszczyna Pospolita",
    "scientificName": "Corylus avellana",
    "category": "krzewy",
    "description": "Krzew o wysokości 3-8 m. Ma szeroko rozpostarte gałęzie i okrągławe liście. Kwitnie wczesną wiosną przed rozwojem liści. Owocuje orzechami laskowymi.",
    "habitat": "Zarośla, skraje lasów, polany",
    "season": "Wiosna (kwitnienie), Jesień (owocowanie)",
    "image": "https://images.unsplash.com/photo-1606964481137-61d34a1ba50c?w=400"
  },
  {
    "id": 4,
    "name": "Kalina Koralowa",
    "scientificName": "Viburnum opulus",
    "category": "krzewy",
    "description": "Krzew o wysokości 1-4 m o charakterystycznych kulistych kwiatostanach z białymi kwiatami. Jesienią wydaje czerwone, błyszczące owoce zebrane w baldachy.",
    "habitat": "Wilgotne lasy, zarośla nad wodami, łęgi",
    "season": "Wiosna (kwitnienie), Jesień (owocowanie)",
    "image": "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400"
  },
  {
    "id": 5,
    "name": "Borówka Czarna",
    "scientificName": "Vaccinium myrtillus",
    "category": "krzewy",
    "description": "Niski krzew (15-40 cm) o jajowatych liściach i dzwonkowatych, różowawych kwiatach. Owocuje ciemnogranatowymi, jadalnymi jagodami o słodkim smaku.",
    "habitat": "Bory iglaste, wrzosowiska, górskie zbocza",
    "season": "Wiosna (kwitnienie), Lato (owocowanie)",
    "image": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400"
  },
  {
    "id": 6,
    "name": "Podbiał Pospolity",
    "scientificName": "Tussilago farfara",
    "category": "zioła",
    "description": "Bylina kwitnąca wczesną wiosną żółtymi kwiatami przed rozwojem liści. Liście pojawiają się po przekwitnięciu. Ma właściwości lecznicze przy kaszlu i stanach zapalnych.",
    "habitat": "Wilgotne miejsca, przydroża, skarpy, brzegi wód",
    "season": "Wczesna wiosna",
    "image": "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400"
  },
  {
    "id": 7,
    "name": "Pokrzywa Zwyczajna",
    "scientificName": "Urtica dioica",
    "category": "zioła",
    "description": "Wysoka bylina (60-150 cm) pokryta parzącymi włoskami. Liście są jajowate, grubo ząbkowane. Ma właściwości lecznicze i jest bogata w witaminy.",
    "habitat": "Zarośla, przydroża, brzegi lasów, miejsca azotowe",
    "season": "Wiosna - Jesień",
    "image": "https://images.unsplash.com/photo-1600611835656-9c5c5a6b5c95?w=400"
  },
  {
    "id": 8,
    "name": "Majeranek Zwyczajny",
    "scientificName": "Origanum vulgare",
    "category": "zioła",
    "description": "Bylina o wysokości 30-80 cm o aromatycznych liściach i różowofioletowych kwiatach. Popularna przyprawa kuchenna i roślina lecznicza.",
    "habitat": "Suche łąki, skraje lasów, zbocza",
    "season": "Lato",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
  },
  {
    "id": 9,
    "name": "Borowik Szlachetny",
    "scientificName": "Boletus edulis",
    "category": "grzyby",
    "description": "Jeden z najcenniejszych grzybów jadalnych. Ma masywny, bulwiasty trzon i kapelusz w kolorach od jasno- do ciemnobrązowego. Miąższ jest biały, bez zmiany koloru po przecięciu.",
    "habitat": "Lasy iglaste i liściaste, szczególnie pod dębami, bukami, sosnami",
    "season": "Lato - Jesień",
    "image": "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400"
  },
  {
    "id": 10,
    "name": "Maślak Zwyczajny",
    "scientificName": "Suillus luteus",
    "category": "grzyby",
    "description": "Grzyb jadalny o żółtopomarańczowym kapeluszu pokrytym śluzowatą skórką. Rurki pod kapeluszem są żółte. Często spotykany w młodych lasach sosnowych.",
    "habitat": "Lasy sosnowe, szczególnie młode nasadzenia",
    "season": "Lato - Jesień",
    "image": "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=400"
  },
  {
    "id": 11,
    "name": "Koniec Zwyczajny",
    "scientificName": "Galerina marginata",
    "category": "grzyby",
    "description": "Mały grzyb o brązowym kapeluszu i pierścieniu na trzonie. UWAGA: jest silnie trujący, zawiera amatoksyny! Rośnie na butwiejącym drewnie iglastym i liściastym.",
    "habitat": "Butwiejące drewno iglaste i liściaste",
    "season": "Jesień",
    "image": "https://images.unsplash.com/photo-1558562842-1e9a2e1b45ca?w=400"
  },
  {
    "id": 12,
    "name": "Fiołek Pospolity",
    "scientificName": "Viola odorata",
    "category": "kwiaty",
    "description": "Niska bylina o sercowatych liściach i pachnących fioletowych kwiatach. Kwitnie wczesną wiosną. Liście i kwiaty są jadalne, używane do dekoracji i aromatyzowania.",
    "habitat": "Zarośla, skraje lasów, parki",
    "season": "Wczesna wiosna",
    "image": "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400"
  },
  {
    "id": 13,
    "name": "Konwalia Majowa",
    "scientificName": "Convallaria majalis",
    "category": "kwiaty",
    "description": "Kreatywna bylina o charakterystycznych dzwonkowatych, białych, pachnących kwiatach zebranych w grono. Liście są eliptyczne, zaostrzone. UWAGA: roślina silnie trująca!",
    "habitat": "Lasy liściaste i mieszane, zarośla",
    "season": "Wiosna",
    "image": "https://images.unsplash.com/photo-1521479695631-5a07d00b92ce?w=400"
  },
  {
    "id": 14,
    "name": "Stokrotka Pospolita",
    "scientificName": "Bellis perennis",
    "category": "kwiaty",
    "description": "Niska bylina o drobnych, biało-różowych kwiatach z żółtym środkiem. Kwitnie od wiosny do jesieni. Jest rośliną wskaźnikową wapnia w glebie.",
    "habitat": "Łąki, trawniki, pastwiska, skraje dróg",
    "season": "Wiosna - Jesień",
    "image": "https://images.unsplash.com/photo-1593176895519-2b8d3b9c6bb5?w=400"
  },
  {
    "id": 15,
    "name": "Buk Pospolity",
    "scientificName": "Fagus sylvatica",
    "category": "drzewa",
    "description": "Okazałe drzewo liściaste dorastające do 40-50 m wysokości. Ma gładką, szarą korę i eliptyczne liście z falistym brzegiem. Wydaje jadalne owoce - bukiew.",
    "habitat": "Lasy liściaste i mieszane, buczyny",
    "season": "Cały rok",
    "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400"
  }
];

let plants = [];
let currentCategory = 'all';
let searchTerm = '';
let renderTimeout = null;

document.addEventListener('DOMContentLoaded', () => {
  plants = [...plantsData];
  renderPlants();
  setupFilters();
  setupSearch();
  setupModal();
  setupScrollTop();
  setupParallax();
  setupSmoothScroll();
});

function updateResultsCount(displayedCount, totalCount, isLoading = false) {
  const resultsCountElement = document.getElementById('resultsCount');
  if (!resultsCountElement) return;
  
  if (isLoading) {
    resultsCountElement.textContent = 'Trwa ładowanie wyników...';
  } else {
    resultsCountElement.textContent = `Wyświetlane: ${displayedCount} z ${totalCount}`;
  }
}

function renderSkeletons(count = 6) {
  const grid = document.getElementById('plantsGrid');
  if (!grid) return;
  
  grid.innerHTML = Array(count).fill(0).map(() => `
    <div class="skeleton-card">
      <div class="skeleton skeleton-image"></div>
      <div class="skeleton-body">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-subtitle"></div>
        <div class="skeleton skeleton-badge"></div>
      </div>
    </div>
  `).join('');
}

function renderPlants() {
  const grid = document.getElementById('plantsGrid');
  if (!grid) return;
  
  renderSkeletons(6);
  updateResultsCount(0, 0, true);
  
  if (renderTimeout) {
    clearTimeout(renderTimeout);
  }
  
  renderTimeout = setTimeout(() => {
    const filtered = plants.filter(plant => {
      const matchesCategory = currentCategory === 'all' || plant.category === currentCategory;
      const matchesSearch = searchTerm === '' || 
        plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    grid.innerHTML = filtered.map((plant, index) => `
      <div class="plant-card" data-id="${plant.id}" style="animation-delay: ${index * 0.1}s">
        <img class="plant-card-image" src="${plant.image}" alt="${plant.name}" loading="lazy" decoding="async">
        <div class="plant-card-body">
          <h3 class="plant-card-name">${plant.name}</h3>
          <p class="plant-card-scientific">${plant.scientificName}</p>
          <span class="plant-card-category">${plant.category}</span>
        </div>
      </div>
    `).join('');
    
    updateResultsCount(filtered.length, plants.length, false);
    
    grid.querySelectorAll('.plant-card').forEach(card => {
      card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
    });
  }, 400); 
}

function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderPlants();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.querySelector('.search-btn');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      renderPlants();
    });
    
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchTerm = searchInput.value;
        renderPlants();
      }
    });
  }
  
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      searchTerm = searchInput.value;
      renderPlants();
    });
  }
}

function setupModal() {
  const modal = document.getElementById('plantModal');
  const closeBtn = document.getElementById('modalClose');
  
  if (!modal || !closeBtn) return;
  
  closeBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal(plantId) {
  const plant = plants.find(p => p.id === plantId);
  if (!plant) return;
  
  const modal = document.getElementById('plantModal');
  
  document.getElementById('modalImage').src = plant.image;
  document.getElementById('modalImage').alt = `Zdjęcie rośliny: ${plant.name}`;
  document.getElementById('modalName').textContent = plant.name;
  document.getElementById('modalScientific').textContent = plant.scientificName;
  document.getElementById('modalCategory').textContent = plant.category;
  document.getElementById('modalDescription').textContent = plant.description;
  document.getElementById('modalHabitat').textContent = plant.habitat;
  document.getElementById('modalSeason').textContent = plant.season;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('plantModal');
  if (!modal) return;
  
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function setupScrollTop() {
  const scrollTopBtn = document.getElementById('scrollTop');
  if (!scrollTopBtn) return; 
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setupParallax() {
  const heroOverlay = document.querySelector('.hero-overlay');
  const heroContent = document.querySelector('.hero-content');
  
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        if (scrollY <= window.innerHeight) {
          if (heroOverlay) {
            heroOverlay.style.backgroundPosition = `center ${scrollY * 0.4}px`;
          }
          if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
            heroContent.style.opacity = Math.max(1 - (scrollY / 500), 0);
          }
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.querySelector('.header');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (!targetId || !targetId.startsWith('#') || targetId === '#') return;
      
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}