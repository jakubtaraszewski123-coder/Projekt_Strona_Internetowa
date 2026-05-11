# Dokumentacja Roli: Developer — Leśny Herbarium

## Standardy Kodu

### HTML
- **Semantyczny HTML5** — `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<nav>`
- **ARIA attributes** — `role="button"`, `role="dialog"`, `aria-modal`, `aria-label`, `aria-hidden`, `aria-live="polite"`, `aria-expanded`
- **Komentarze sekcji** — `<!-- === HERO SECTION === -->` dla czytelności
- **Indentacja:** 2 spacje
- **`hidden` attribute** — do pokazywania/ukrywania elementów (zamiast `display: none` w CSS)

### CSS
- **CSS Custom Properties** w `:root` dla wszystkich kolorów
- **BEM-inspired naming** — `.plant-card`, `.plant-card-name`, `.plant-card-body`
- **Mobile-first** — bazowe style dla mobile, media queries dla większych ekranów
- **Brak `!important`** — chyba że absolutnie konieczne (np. reduced motion override)
- **Komentarze sekcji** — `/* === HERO === */` dla organizacji

### JavaScript
- **IIFE pattern** — `(function() { 'use strict'; ... })();`
- **Brak zmiennych globalnych** — wszystkie zmienne w scope IIFE
- **`const` domyślnie**, `let` tylko gdy re-assign
- **Naming convention:**
  - `camelCase` dla funkcji i zmiennych
  - `PascalCase` nie stosuje się (brak klas)
  - Prefix `init*` dla funkcji inicjalizujących
  - Prefix `render*` dla funkcji renderujących
  - Prefix `open*`/`close*` dla modali
  - Sufiks `*Data` dla danych z fetch
- **`escapeHtml()`** — zawsze przed wstawieniem danych z JSON do DOM
- **Event delegation** — preferowany nad attachowanie listenerów do każdego elementu

## Workflow Implementacji

### Lokalny Development
1. Otworzyć projekt w VS Code
2. Uruchomić Live Server (extension: `ritwickdey.liveserver`)
3. Edytować pliki — auto-reload w przeglądarce
4. Testować w Chrome DevTools (F12)

### Struktura zmian
1. **Dane** → edytować `data/plants.json` lub `data/facts.json`
2. **UI** → edytować `styles.css`
3. **Logika** → edytować `script.js` (szukać funkcji po nazwie `init*`, `render*`, `open*`)
4. **Struktura** → edytować `index.html`

### Testowanie
1. **Konsola przeglądarki** — F12 → Console, zero błędów
2. **Responsywność** — F12 → Toggle Device Toolbar (Ctrl+Shift+M)
3. **Keyboard nav** — test Tab, Enter, Escape, Arrow Up/Down
4. **localStorage** — F12 → Application → Local Storage

## Konwencje

### Obsługa błędów
- Każdy `try/catch` musi logować błąd: `console.error('Błąd:', error)`
- Użytkownik widzi przyjazny komunikat w UI
- Nigdy nie ignorować błędów (empty catch)

### Performance
- `requestAnimationFrame` dla animacji scroll-triggered
- `debounce` dla search input (200ms)
- `ticking` flag dla scroll event throttling
- Canvas particles wyłączony na mobile

### Security
- `escapeHtml()` dla wszystkich danych z JSON wstawianych do `innerHTML`
- Brak `eval()`, `setTimeout(string)`, `document.write()`
- External image URLs — `onerror` fallback do emoji

### Accessibility Checklist
- [ ] Wszystkie interaktywne elementy mają `aria-label`
- [ ] Modale mają `role="dialog"` i `aria-modal="true"`
- [ ] Focus management — focus na close button po otwarciu modala
- [ ] Escape zamyka modal
- [ ] Kliknięcie poza modal zamyka go
- [ ] Skeleton loading ma `aria-hidden="true"`
- [ ] Licznik wyników ma `aria-live="polite"`
- [ ] Hamburger toggle `aria-expanded`
