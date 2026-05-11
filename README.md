# 🌲 Leśny Herbarium

Interaktywna, edukacyjna strona internetowa prezentująca katalog roślin leśnych i ekosystem lasu. Zbudowana w czystym HTML, CSS i JavaScript — zero frameworków, zero zależności.

## Demo

> Otwórz plik `index.html` w przeglądarce, aby zobaczyć stronę w akcji.

## Opis Projektu

**Leśny Herbarium** to jednostronicowa aplikacja edukacyjna (one-page) oferująca:

- **Interaktywny katalog 15 gatunków** — drzewa, krzewy, kwiaty, grzyby, zioła
- **Mapę warstw ekosystemu** — 7 klikalnych warstw od gleby po niebo
- **Sekcję ciekawostek** ("Kliknij i poznaj") — karty z filtrami kategorii
- **Animowane statystyki** — fakty o polskich lasach z efektem count-up
- **Efekty wizualne** — multi-layer parallax, canvas particles, smooth scroll
- **Pełną responsywność** — mobile, tablet, desktop

**Stack technologiczny:** Vanilla HTML5 + CSS3 + JavaScript ES6+ (IIFE)
**Budżet:** 0 zł — wszystkie zasoby darmowe
**Hosting:** GitHub Pages / Netlify (statyczny)

## Szybki Start

```bash
# 1. Otwórz w przeglądarce bezpośrednio
start index.html          # Windows
open index.html           # macOS
xdg-open index.html       # Linux

# 2. Lub użyj Live Server w VS Code
# PPM na index.html → "Open with Live Server"
```

> ⚠️ **Uwaga:** Wymaga serwera HTTP (nie zadziała z `file://` w Chrome) ze względu na `fetch()`. Użyj Live Server lub dowolnego serwera statycznego.

## Struktura Projektu

```
lesny-herbarium/
├── index.html              # Główna strona (472 linie)
├── styles.css              # Style CSS (~33 KB)
├── script.js               # Logika JS (911 linii, IIFE)
├── README.md               # Ten plik
│
├── data/
│   ├── plants.json         # Dane 15 gatunków roślin/grzybów
│   └── facts.json          # Ciekawostki o przyrodzie (6 kategorii)
│
├── docs/                   # 📘 Pełna dokumentacja SDD
│   ├── README.md           # Wstęp do dokumentacji
│   ├── architecture/       # Opis systemu + ADR
│   ├── business/           # Cele, user stories, use cases
│   ├── tech/               # Stack technologiczny, konwencje
│   ├── plans/              # Plany funkcjonalności (PLAN_*.md)
│   └── roles/              # Dokumentacja ról projektowych
│       ├── product_owner/  # Wizja, backlog, priorytety
│       ├── ux_ui/          # Makiety, przepływy, zasady UX
│       ├── architect/      # Decyzje techniczne, model systemu
│       ├── developer/      # Standardy kodu, workflow
│       └── tester/         # Strategia testów, scenariusze
│
├── plans/                  # Plany analityczne i implementacyjne
│   ├── docs.md             # Pełna dokumentacja techniczna
│   ├── website-plan.md     # Plan implementacji strony (zrealizowany)
│   ├── implementation-plan.md  # Plan implementacji (szczegółowy)
│   └── ...                 # Plany workflowów (ICE, MVP, Persona...)
│
├── implemented_plans.md    # 📋 Rejestr planów SDD
├── implemented_features.md # 📋 Rejestr zaimplementowanych funkcji
│
├── .kilocode/              # Konfiguracja agenta AI (Kilo Code)
│   ├── rules/              # Reguły kodowania i workflow
│   └── workflows/          # Workflowy analityczne
│
└── .vscode/
    └── extensions.json     # Rekomendowane rozszerzenia VS Code
```

## Dokumentacja

### 📘 Spec Driven Development (SDD)

Projekt jest udokumentowany zgodnie ze standardem SDD. Pełna dokumentacja znajduje się w katalogu [`docs/`](docs/).

| Dokument | Opis |
|---|---|
| [`docs/README.md`](docs/README.md) | Wstęp do dokumentacji + spis treści |
| [`docs/architecture/system_overview.md`](docs/architecture/system_overview.md) | Opis systemu i diagramy komponentów |
| [`docs/architecture/adr_001_vanilla-js.md`](docs/architecture/adr_001_vanilla-js.md) | Decyzja: Vanilla JS zamiast frameworka |
| [`docs/architecture/adr_002_ecosystem-map.md`](docs/architecture/adr_002_ecosystem-map.md) | Decyzja: Interaktywna mapa warstw ekosystemu |
| [`docs/business/product-goals.md`](docs/business/product-goals.md) | Cele produktu i grupa docelowa |
| [`docs/business/user-stories.md`](docs/business/user-stories.md) | User stories dla 3 profili ICP |
| [`docs/business/use-cases.md`](docs/business/use-cases.md) | 8 przypadków użycia |
| [`docs/tech/stack.md`](docs/tech/stack.md) | Stos technologiczny i konwencje |
| [`docs/plans/`](docs/plans/) | 4 plany funkcjonalności w formacie SDD |
| [`docs/roles/`](docs/roles/) | Dokumentacja 5 ról projektowych |
| [`implemented_plans.md`](implemented_plans.md) | Rejestr wszystkich planów |
| [`implemented_features.md`](implemented_features.md) | Rejestr zaimplementowanych funkcji |

### 📋 Plany Analityczne

W katalogu [`plans/`](plans/) znajdują się raporty z workflowów analitycznych (ICE Ranking, MVP Scoping, ICP Persona, Kill The Idea, Resource Analysis) oraz plany implementacji.

## Funkcjonalności

### Katalog Roślin
- 15 gatunków z danymi: nazwa, łacińska, opis, wysokość, kwitnienie, siedlisko, warstwa lasu
- Filtrowanie po 6 kategoriach: Drzewa, Krzewy, Kwiaty, Grzyby, Zioła
- Wyszukiwarka tekstowa (nazwa polska + łacińska, debounce 200ms)
- Modal szczegółów z 4 danymi i ciekawostką
- Skeleton loading + no-results state

### Ecosystem Map
- 7 interaktywnych warstw: Niebo → Korona → Pnie → Podszyt → Runo → Ściółka → Gleba
- Kliknięcie warstwy → modal z opisem, 3 ciekawostkami, przedstawicielami
- Animowane SVG zwierząt w warstwie korony

### Discover — Kliknij i Poznaj
- Karty ciekawostek ładowane z `data/facts.json`
- Filtry: Drzewa, Kwiaty, Grzyby, Rośliny, Zwierzęta
- Mini-modal z obrazkiem i ciekawostką

### Efekty Wizualne
- Multi-layer parallax w Hero (4 warstwy z różnymi prędkościami)
- Canvas particles (pyłki kwiatowe podczas scrollowania)
- Animowane statystyki (count-up od 0 do wartości)
- Scroll progress bar + przycisk "Wróć na górę"
- Smooth scroll do sekcji

### Nawigacja i UX
- Sticky navbar ze zmianą tła przy scrollu
- Hamburger menu na mobile
- Keyboard navigation (Arrow Up/Down między sekcjami)
- Section Memory (localStorage — zapamiętywanie pozycji)
- Pełna obsługa klawiatury (Tab, Enter, Escape)

## Responsywność

| Breakpoint | Zakres | Layout |
|---|---|---|
| Mobile | 0–767px | 1 kolumna, hamburger menu, wyłączony parallax/particles |
| Tablet | 768–1023px | 2 kolumny |
| Desktop | 1024px+ | 4 kolumny, pełne efekty |

## Technologie

| Technologia | Zastosowanie |
|---|---|
| HTML5 | Struktura semantyczna, ARIA attributes |
| CSS3 | Stylowanie, animacje, zmienne CSS, parallax |
| Vanilla JavaScript ES6+ | Logika, filtry, wyszukiwarka, modale, canvas, localStorage |
| Google Fonts | Playfair Display (nagłówki) + Lato (tekst) |
| Canvas API | Forest particles efekt |
| JSON | Dane roślin i ciekawostek |

## Deploy

### GitHub Pages
1. Push kodu do repozytorium GitHub
2. Settings → Pages → Source: main branch, `/` (root)
3. Strona dostępna pod: `https://username.github.io/lesny-herbarium`

### Netlify
1. Konto na netlify.com
2. Drag & drop folderu projektu
3. Automatyczny deploy z custom URL

## Licencja

Projekt edukacyjny. Treści merytoryczne oparte na publicznie dostępnych źródłach (Lasy Państwowe, Wikipedia).

## Autor

**Jakub Taraszewski** — projekt edukacyjny

---

> 📘 Pełna dokumentacja SDD: [`docs/README.md`](docs/README.md)
