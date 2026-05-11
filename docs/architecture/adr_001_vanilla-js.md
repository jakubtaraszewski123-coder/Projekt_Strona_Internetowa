# ADR-001: Vanilla JavaScript zamiast frameworka

## Status
✅ Zaakceptowany

## Data
2026-04-13

## Kontekst

Projekt **Leśny Herbarium** to edukacyjna strona one-page prezentująca katalog roślin leśnych. Jako projekt portfolio i edukacyjny, musi być:
- Prostym w zrozumieniu dla początkujących developerów
- Szybkim w ładowaniu (zero zależności)
- Łatwym w deployu na darmowym hostingu statycznym
- Niezależnym od ekosystemu npm/node

Rozważane opcje:
1. **Vanilla JavaScript** (czysty JS bez frameworków)
2. **React + Vite** (SPAs z bundlerem)
3. **Next.js** (framework SSR/SSG)
4. **Vue.js + Vite** (lekki framework)

## Decyzja

Wybrano **Vanilla JavaScript** z IIFE pattern.

## Uzasadnienie

| Kryterium | Vanilla JS | React + Vite | Next.js | Vue.js |
|---|---|---|---|---|
| Konfiguracja | Zero | npm install + config | npm install + config | npm install + config |
| Rozmiar bundle | ~15 KB (skompresowany) | ~45 KB+ (React runtime) | ~80 KB+ | ~35 KB+ |
| Zależności | Zero | ~200+ pakietów | ~500+ pakietów | ~150+ pakietów |
| Hosting | Dowolny statyczny | Statyczny po buildzie | Serwer Node.js | Statyczny po buildzie |
| Koszt hostingu | 0 zł | 0 zł | 0 zł (Vercel) / $ | 0 zł |
| Łatwość nauki | ✅ Wysoka | Średnia | Średnia | Wysoka |
| Wydajność | ✅ Maksymalna | Dobra | Dobra | Dobra |
| Dev experience | Prosty | Dobre narzędzia | Dobre narzędzia | Dobre narzędzia |

**Kluczowe argumenty:**
1. Projekt edukacyjny — czysty JS lepiej pokazuje fundamenty web developmentu
2. Zero konfiguracji — nie potrzebujemy build step, bundlera, node_modules
3. Wydajność — najmniejszy possible bundle, brak narzutu frameworka
4. Hosting — wystarczy dowolny serwer statyczny (GitHub Pages, Netlify)
5. Skomplikowanie — strona ma ~900 linii JS, co jest łatwe do zarządzania bez frameworka

## Konsekwencje

### Pozytywne
- Zero zależności, zero aktualizacji pakietów
- Natychmiastowy start dev (otwórz plik w przeglądarce)
- Pełna kontrola nad każdym elementem DOM
- Najlepsza możliwa wydajność

### Negatywne
- Brak reaktywności (manualne update DOM)
- Brak systemu komponentów (trudniejsza reużywalność)
- Trudniejsze skalowanie powyżej ~2000 linii JS
- Brak TypeScript (w tym projekcie)
- Trudniejsze testowanie (brak frameworka testowego)

### Mitigacje
- IIFE pattern zapobiega pollution global scope
- Modularna struktura funkcji (`init*`, `render*`, `open*`, `close*`)
- `escapeHtml()` helper chroni przed XSS

## Alternatywy odrzucone

- **React + Vite**: Overkill dla one-page, niepotrzebna złożoność
- **Next.js**: Wymaga Node.js, za ciężki jak na statyczną stronę
- **Vue.js**: Lżejszy niż React, ale nadal niepotrzebny dla tego zakresu
