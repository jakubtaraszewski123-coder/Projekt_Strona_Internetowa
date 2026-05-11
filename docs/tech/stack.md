# Stos Technologiczny — Leśny Herbarium

## Stack

| Technologia | Wersja | Zastosowanie | Uzasadnienie |
|---|---|---|---|
| **HTML5** | - | Struktura semantyczna, ARIA attributes | Standard web, zero zależności |
| **CSS3** | - | Stylowanie, animacje, zmienne CSS, parallax | Native, pełna kontrola |
| **Vanilla JavaScript** | ES6+ | Logika, DOM manipulation, fetch, canvas, localStorage | Zero frameworka, maksymalna wydajność |
| **Google Fonts** | - | Playfair Display + Lato | Darmowe, ładna typografia |
| **JSON** | - | Dane roślin i ciekawostek | Prosty format, łatwy fetch |
| **Canvas API** | 2D | Forest particles efekt | Native, dobra wydajność |
| **localStorage API** | - | Section Memory — zapamiętywanie pozycji | Native, persistent |

## Uzasadnienie Wyborów

### Dlaczego Vanilla JS zamiast frameworka?
Patrz: [`adr_001_vanilla-js.md`](../architecture/adr_001_vanilla-js.md)

**Podsumowanie:** Projekt edukacyjny/portfolio nie potrzebuje frameworka. Czysty JS daje maksymalną wydajność, zero konfiguracji i lepszą naukę fundamentów.

### Dlaczego CSS zamiast preprocessora?
- Projekt nie potrzebuje zmiennych CSS z Sass — ma native **CSS Custom Properties** (`:root { --var: value }`)
- Brak potrzeby mixinów czy nested rules
- Mniej warstw abstrakcji = łatwiejsze debugowanie

### Dlaczego Google Fonts zamiast lokalnych fontów?
- CDN = caching (użytkownik może już mieć te fonty)
- `font-display: swap` zapewnia czytelność podczas ładowania
- Mniejszy rozmiar repozytorium

### Dlaczego zewnętrzne URL obrazów zamiast lokalnych?
- Nie zwiększają rozmiaru repozytorium
- Łatwe do wymiany (zmiana URL w JSON)
- Fallback na emoji przy błędzie ładowania

## Ograniczenia Technologiczne

| Ograniczenie | Opis |
|---|---|
| **Zero bundlerów** | Brak Webpack/Vite — pliki ładowane bezpośrednio w HTML |
| **Zero npm packages** | Brak zależności zewnętrznych (poza Google Fonts) |
| **Zero TypeScriptu** | Czysty JavaScript (projekt edukacyjny) |
| **Zero build step** | Bezpośrednie uruchomienie w przeglądarce |
| **Statyczny hosting** | Brak serwera backendowego, brak API |
| **Brak PWA** | Brak service worker, offline, install prompt |
| **Brak testów automatycznych** | Tylko testy manualne w przeglądarce |

## Konwencje Projektowe

### Struktura plików
- 3 główne pliki: `index.html`, `styles.css`, `script.js`
- Dane w osobnym folderze: `data/plants.json`, `data/facts.json`
- CSS Custom Properties w `:root` dla łatwej edycji kolorów

### JavaScript
- **IIFE pattern** — cała logika w natychmiastowo wywoływanej funkcji
- **Brak zmiennych globalnych** — izolacja scope
- **Naming convention:** `camelCase` dla funkcji, `PascalCase` nie stosuje się (brak klas)
- **Prefix `init*`** dla funkcji inicjalizujących (`initHeroParallax`, `initHamburger`)
- **Prefix `render*`** dla funkcji renderujących (`renderPlants`, `renderFacts`)
- **Prefix `open*`/`close*`** dla modali (`openModal`, `closeModal`)

### CSS
- **BEM-inspired** naming: `.plant-card`, `.plant-card-name`, `.plant-card-body`
- **CSS Custom Properties** dla kolorów w `:root`
- **Mobile-first** w media queries
- **Komentarze sekcji** w CSS: `/* === HERO === */`

### HTML
- **Semantyczny HTML5**: `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<nav>`
- **ARIA attributes** dla accessibility: `role`, `aria-label`, `aria-modal`, `aria-hidden`
- **Komentarze sekcji** w HTML: `<!-- === HERO SECTION === -->`
