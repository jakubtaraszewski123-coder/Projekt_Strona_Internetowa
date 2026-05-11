# System Overview — Leśny Herbarium

## Opis Systemu

**Leśny Herbarium** to jednostronicowa aplikacja webowa (SPA typu one-page) zbudowana w czystym HTML, CSS i JavaScript. Nie wykorzystuje żadnych frameworków ani bundlerów. Aplikacja działa w całości po stronie klienta (client-side) i nie wymaga serwera backendowego.

### Cel systemu
- Edukacja przyrodnicza poprzez interaktywny katalog 15 gatunków roślin i grzybów
- Prezentacja ekosystemu leśnego jako 7 warstw (od gleby po niebo)
- Dostarczanie ciekawostek o przyrodzie w atrakcyjnej formie wizualnej

### Architektura ogólna

```
┌─────────────────────────────────────────────┐
│                  Przeglądarka                │
│  ┌───────────────────────────────────────┐   │
│  │           index.html (472 linii)       │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐  │   │
│  │  │  Hero   │ │  Stats  │ │   Eco   │  │   │
│  │  │ (paral.)│ │(countup)│ │  (Map)  │  │   │
│  │  └─────────┘ └─────────┘ └─────────┘  │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐  │   │
│  │  │Discover │ │ Katalog │ │ Footer  │  │   │
│  │  │(facts)  │ │(plants) │ │         │  │   │
│  │  └─────────┘ └─────────┘ └─────────┘  │   │
│  └───────────────────────────────────────┘   │
│  ┌───────────────────────────────────────┐   │
│  │         styles.css (~33 KB)            │   │
│  └───────────────────────────────────────┘   │
│  ┌───────────────────────────────────────┐   │
│  │         script.js (911 linii, IIFE)    │   │
│  │  ┌───────┐ ┌──────────┐ ┌──────────┐  │   │
│  │  │Plants │ │Discover  │ │  Ecosystem│  │   │
│  │  │Catalog│ │Facts     │ │  Map      │  │   │
│  │  └───────┘ └──────────┘ └──────────┘  │   │
│  │  ┌───────┐ ┌──────────┐ ┌──────────┐  │   │
│  │  │ Par-  │ │ Particles│ │  Utils   │  │   │
│  │  │ allax │ │ (Canvas) │ │ (escape) │  │   │
│  │  └───────┘ └──────────┘ └──────────┘  │   │
│  └───────────────────────────────────────┘   │
│  ┌───────────────────────────────────────┐   │
│  │           Dane (JSON)                 │   │
│  │  data/plants.json  (15 gatunków)      │   │
│  │  data/facts.json   (ciekawostki)      │   │
│  └───────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### Komponenty systemu

| Komponent | Opis | Lokalizacja |
|---|---|---|
| **Hero Section** | Pełnoekranowy banner z multi-layer parallax (4 warstwy) | `index.html:49-61` |
| **Stats Section** | 4 animowane liczniki statystyk | `index.html:64-98` |
| **Ecosystem Map** | Interaktywna mapa 7 warstw lasu z modalami | `index.html:101-213` |
| **Discover** | Sekcja ciekawostek z filtrami i mini-modalami | `index.html:216-250` |
| **Katalog Roślin** | Katalog 15 gatunków z filtrami, search i modalem | `index.html:253-317` |
| **Plant Detail Modal** | Modal szczegółów rośliny | `index.html:322-368` |
| **Eco Layer Modal** | Modal warstwy ekosystemu | `index.html:378-402` |
| **Fact Mini-Modal** | Mini-modal ciekawostki | `index.html:405-422` |
| **Forest Particles** | Canvas 2D z cząsteczkami podczas scrolla | `script.js:762-844` |
| **Section Memory** | localStorage — zapamiętywanie pozycji | `script.js:712-759` |
| **Keyboard Navigation** | Nawigacja Arrow Up/Down między sekcjami | `script.js:660-709` |

### Przepływ danych

```
1. DOMContentLoaded → init()
2. loadPlantsData() → fetch('data/plants.json') → renderPlants()
3. loadFactsData() → fetch('data/facts.json') → renderFacts()
4. Inicjalizacja handlerów: filtry, search, modale, scroll, parallax
5. Użytkownik wchodzi w interakcję → aktualizacja UI
```

### Zależności zewnętrzne
- **Google Fonts**: Playfair Display + Lato (CDN)
- **Obrazy**: zewnętrzne URL (Unsplash, Wikimedia, inne) — z fallbackiem na emoji
