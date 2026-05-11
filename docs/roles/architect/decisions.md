# Dokumentacja Roli: Architekt — Leśny Herbarium

## Decyzje Techniczne

### 1. Architektura One-Page
- **Decyzja:** Aplikacja single-page (index.html) z sekcjami kotwicznymi
- **Uzasadnienie:** Prosty hosting, zero routingu, natychmiastowe ładowanie
- **Konsekwencja:** Wszystkie sekcje ładowane od razu (brak lazy loading sekcji)

### 2. Dane w JSON (fetch)
- **Decyzja:** Dane roślin i ciekawostek w plikach JSON, ładowane przez `fetch()`
- **Uzasadnienie:** Łatwa edycja danych bez modyfikacji kodu, separacja danych od logiki
- **Konsekwencja:** Wymaga serwera HTTP (nie działa z `file://` w Chrome)

### 3. IIFE Pattern
- **Decyzja:** Cały JS w `(function() { ... })();`
- **Uzasadnienie:** Izolacja scope, zero zmiennych globalnych, kompatybilność z dowolnym kodem
- **Konsekwencja:** Brak możliwości importu/export (ES modules nie potrzebne)

### 4. Inline innerHTML dla kart
- **Decyzja:** Renderowanie kart przez `innerHTML` z template string
- **Uzasadnienie:** Prostsze niż `createElement` dla każdego elementu, szybsze pisanie
- **Konsekwencja:** Wymaga `escapeHtml()` do ochrony XSS

### 5. Canvas dla Forest Particles
- **Decyzja:** Osobny canvas element (fixed, pointer-events: none)
- **Uzasadnienie:** Lepsza wydajność niż DOM elements dla 60+ cząsteczek
- **Konsekwencja:** Dodatkowy element w DOM, wyłączony na mobile

## Modele Systemu

### Model Danych — Roślina
```typescript
interface Plant {
  id: number;           // Unikalny identyfikator
  name: string;         // Nazwa polska
  latinName: string;    // Nazwa łacińska
  category: string;     // drzewa | krzewy | kwiaty | grzyby | zioła
  layer: string;        // korona | podszyt | runo
  description: string;  // Opis gatunku
  funFact: string;      // Ciekawostka
  image: string;        // URL obrazka
  height: string;       // Wysokość (np. "25-40 m")
  flowering: string;    // Okres kwitnienia
  habitat: string;      // Siedlisko
}
```

### Model Danych — Ciekawostka
```typescript
interface Fact {
  name: string;         // Nazwa
  category: string;     // drzewa | kwiaty | grzyby | rośliny | zwierzęta
  emoji: string;        // Emoji reprezentujące
  image: string;        // URL obrazka (opcjonalny)
  funFact: string;      // Treść ciekawostki
}
```

### Model Danych — Warstwa Ekosystemu (hardcoded w JS)
```typescript
interface EcoLayer {
  emoji: string;        // Emoji warstwy
  title: string;        // Tytuł
  description: string;  // Opis warstwy
  facts: string[];      // 3 ciekawostki
  species: string;      // Lista przedstawicieli
}
```

## Integracje

### Zewnętrzne
| Integracja | Typ | Cel | Fallback |
|---|---|---|---|
| Google Fonts | CDN | Typografia | System fonts (serif/sans-serif) |
| Obrazy (Unsplash, Wikimedia) | HTTP | Wizualizacje | Emoji fallback (`onerror`) |

### Internalne
| Komponent | Zależność | Kierunek |
|---|---|---|
| Katalog Roślin | `data/plants.json` | fetch → render |
| Discover | `data/facts.json` | fetch → render |
| Ecosystem Map | `ecoLayerData` (JS object) | klik → modal |
| Section Memory | `localStorage` | save/restore |

## Diagram Komponentów

```
┌───────────────────────────────────────────┐
│                index.html                  │
│  ┌─────────────────────────────────────┐   │
│  │           Site Header               │   │
│  │  Logo | Nav Links | Hamburger       │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │           Hero Section              │   │
│  │  bg | overlay | content | fg        │   │
│  │  (parallax layers)                  │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │           Stats Section             │   │
│  │  4 × stat-item (count-up animation) │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │        Ecosystem Map                │   │
│  │  7 × ecosystem-layer → eco-modal    │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │        Discover Section             │   │
│  │  filters → discover-grid → fact-modal│  │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │        Catalog Section              │   │
│  │  filters + search → plants-grid     │   │
│  │  → plant-detail-modal               │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │           Footer                    │   │
│  │  4-column layout                    │   │
│  └─────────────────────────────────────┘   │
└───────────────────────────────────────────┘
```
