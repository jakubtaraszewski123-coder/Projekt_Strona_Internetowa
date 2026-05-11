# Model Systemu — Leśny Herbarium

## Diagram Komponentów

```
┌──────────────────────────────────────────────────────┐
│                    Przeglądarka                       │
│                                                       │
│  ┌────────────────────────────────────────────────┐  │
│  │                  DOM Tree                       │  │
│  │                                                 │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │  │
│  │  │  Header  │  │   Main   │  │    Footer    │  │  │
│  │  │  (nav)   │  │ (6 sect) │  │   (4 cols)   │  │  │
│  │  └──────────┘  └──────────┘  └──────────────┘  │  │
│  │                                                 │  │
│  │  ┌──────────────────────────────────────────┐  │  │
│  │  │           Overlay Modals                 │  │  │
│  │  │  ┌────────┐ ┌─────────┐ ┌────────────┐  │  │  │
│  │  │  │ Plant  │ │  Eco    │ │    Fact    │  │  │  │
│  │  │  │ Detail │ │  Layer  │ │   Mini     │  │  │  │
│  │  │  └────────┘ └─────────┘ └────────────┘  │  │  │
│  │  └──────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  ┌────────────────────────────────────────────────┐  │
│  │              Canvas (particles)                 │  │
│  │         fixed, pointer-events: none             │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  ┌────────────────────────────────────────────────┐  │
│  │              JavaScript (IIFE)                  │  │
│  │                                                 │  │
│  │  ┌─────────────┐  ┌──────────────────────────┐ │  │
│  │  │ Data Layer  │  │     UI Controllers       │ │  │
│  │  │             │  │                          │ │  │
│  │  │ plantsData  │  │  renderPlants()          │ │  │
│  │  │ factsData   │  │  renderFacts()           │ │  │
│  │  │ ecoLayerData│  │  openModal()             │ │  │
│  │  └─────────────┘  │  closeModal()            │ │  │
│  │                   │  applyFilters()          │ │  │
│  │                   │  initParallax()          │ │  │
│  │                   │  initParticles()         │ │  │
│  │                   └──────────────────────────┘ │  │
│  │                                                 │  │
│  │  ┌─────────────┐  ┌──────────────────────────┐ │  │
│  │  │ Storage     │  │      Event Handlers      │ │  │
│  │  │             │  │                          │ │  │
│  │  │ localStorage│  │  scroll events           │ │  │
│  │  │ (section)   │  │  click events            │ │  │
│  │  └─────────────┘  │  keydown events          │ │  │
│  │                   │  input events            │ │  │
│  │                   └──────────────────────────┘ │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
└──────────────────────────────────────────────────────┘
```

## Przepływ Danych

```
1. DOMContentLoaded / ready
   │
   ├──→ loadPlantsData() ──fetch──→ data/plants.json ──parse──→ plantsData[]
   │                                    │
   │                                    └──→ renderPlants(plantsData) ──→ DOM
   │
   ├──→ loadFactsData() ──fetch──→ data/facts.json ──parse──→ factsData[]
   │                                    │
   │                                    └──→ renderFacts(factsData) ──→ DOM
   │
   └──→ init*() functions (UI behaviors)
        ├── initScrollProgress()
        ├── initForestParticles()
        ├── initSectionMemory() ──→ localStorage read
        ├── initKeyboardNavigation()
        ├── initSmoothScroll()
        ├── initNavbarScroll()
        ├── initHamburger()
        ├── initScrollToTop()
        ├── initHeroParallax()
        ├── initStatsCountUp()
        ├── initEcosystemMap()
        └── initDiscover() ──→ event listeners on filters
```

## Stan Aplikacji

| Stan | Zmienna | Typ | Opis |
|---|---|---|---|
| Dane roślin | `plantsData` | Array | 15 obiektów Plant |
| Dane ciekawostek | `factsData` | Array | N obiektów Fact |
| Aktywna kategoria | `currentCategory` | string | 'all' lub nazwa kategorii |
| Wyszukiwana fraza | `currentSearch` | string | Wyszukiwana fraza (lowercase) |
| Aktywna kategoria faktów | `currentFactCategory` | string | 'all' lub nazwa kategorii |
| Zapamiętana sekcja | `localStorage` | string | Nazwa ostatniej sekcji |
| Scroll progress | computed | number | 0-100% |
