# Plan: Leśny Herbarium — Strona Katalogu Roślin

## Metadane

| Pole | Wartość |
|---|---|
| **Data** | 2026-04-13 |
| **Status** | ✅ ZAKOŃCZONY (zaktualizowano 2026-05-11) |
| **Stack** | Vanilla HTML + CSS + JavaScript |
| **Pliki** | `index.html` (472 linie), `styles.css` (~33 KB), `script.js` (911 linii) |
| **Dane** | `data/plants.json` (15 gatunków), `data/facts.json` |

## Kontekst

Strona typu one-page prezentująca interaktywny katalog roślin leśnych z filtrami, wyszukiwarką, modalem szczegółów, interaktywną mapą ekosystemu, sekcją ciekawostek i animowanymi statystykami.

---

## Sekcja 1: Struktura HTML i dane

- [x] 1.1 Utworzyć folder `data/` i plik `plants.json` z danymi 15 gatunków
- [x] 1.2 Utworzyć `data/facts.json` z ciekawostkami (6 kategorii)
- [x] 1.3 Utworzyć `index.html` z sekcjami: header, hero, stats, ecosystem-map, discover, catalog, footer
- [x] 1.4 Dodać nawigację (logo, linki kotwicowe, hamburger)
- [x] 1.5 Dodać 3 modale: plant-detail, eco-layer, fact-mini
- [x] 1.6 Dodać scroll progress bar i scroll-to-top button

### Weryfikacja Sekcji 1
- [x] 1.7 Otworzyć `index.html` w przeglądarce — wszystkie sekcje widoczne
- [x] 1.8 Sprawdzić konsolę — brak błędów

---

## Sekcja 2: Style CSS i design

- [x] 2.1 Zdefiniować zmienne CSS dla kolorów (odcienie zieleni, brązu, kremowego)
- [x] 2.2 Zaimplementować fonty Google (Playfair Display + Lato)
- [x] 2.3 Stylizować header z efektem glassmorphism i stan `.scrolled`
- [x] 2.4 Stylizować sekcję Hero z overlay i parallax-ready warstwami
- [x] 2.5 Stylizować Stats Section — grid 4 kolumn
- [x] 2.6 Stylizować Ecosystem Map — pionowe warstwy z tooltipami
- [x] 2.7 Stylizować Discover Section — grid kart ciekawostek
- [x] 2.8 Stylizować Katalog Roślin — grid kart, filtry, wyszukiwarka
- [x] 2.9 Stylizować 3 modale (overlay, body, close button)
- [x] 2.10 Stylizować scroll progress bar i scroll-to-top
- [x] 2.11 Stylizować Footer (4-kolumnowy grid)
- [x] 2.12 Dodać hover efekty na kartach (transform, box-shadow)
- [x] 2.13 Dodać skeleton loading states
- [x] 2.14 Dodać no-results states

### Weryfikacja Sekcji 2
- [x] 2.15 Sprawdzić wygląd na różnych rozdzielczościach (375px, 768px, 1280px)
- [x] 2.16 Zweryfikować czytelność tekstu i kontrast kolorów

---

## Sekcja 3: JavaScript — logika interakcji

- [x] 3.1 Zaimportować dane z `plants.json` via fetch()
- [x] 3.2 Zaimportować dane z `facts.json` via fetch()
- [x] 3.3 Zaimplementować funkcję renderującą karty roślin
- [x] 3.4 Zaimplementować funkcję renderującą karty ciekawostek
- [x] 3.5 Dodać filtrowanie katalogu po kategorii (6 kategorii)
- [x] 3.6 Dodać wyszukiwarkę tekstową w katalogu (nazwa + łacińska, debounce 200ms)
- [x] 3.7 Dodać filtrowanie ciekawostek po kategorii
- [x] 3.8 Dodać otwieranie modala ze szczegółami rośliny
- [x] 3.9 Dodać otwieranie modala warstwy ekosystemu
- [x] 3.10 Dodać otwieranie mini-modala ciekawostki
- [x] 3.11 Dodać zamykanie modali (przycisk X, kliknięcie poza, Escape)
- [x] 3.12 Dodać animację count-up dla statystyk
- [x] 3.13 Dodać licznik wyników ("Wyświetlane: X z Y")
- [x] 3.14 Dodać skeleton loading i usuwanie po załadowaniu

### Weryfikacja Sekcji 3
- [x] 3.15 Kliknąć filtry — karty aktualizują się poprawnie
- [x] 3.16 Wpisać tekst w wyszukiwarce — karty filtrują się w czasie rzeczywistym
- [x] 3.17 Kliknąć kartę rośliny — modal otwiera się ze szczegółami
- [x] 3.18 Kliknąć warstwę ekosystemu — modal otwiera się z opisem
- [x] 3.19 Kliknąć kartę ciekawostki — mini-modal otwiera się
- [x] 3.20 Sprawdzić scroll do Stats — liczniki animują się od 0
- [x] 3.21 Sprawdzić konsolę — brak błędów

---

## Sekcja 4: Efekty wizualne i udoskonalenia

- [x] 4.1 Dodać multi-layer parallax w Hero (4 warstwy, data-speed, requestAnimationFrame)
- [x] 4.2 Dodać forest particles (canvas, 60 cząsteczek, tylko podczas scrolla)
- [x] 4.3 Dodać smooth scroll do sekcji z offsetem navbara
- [x] 4.4 Dodać scroll progress bar (szerokość według % scrolla)
- [x] 4.5 Dodać przycisk "Wróć na górę" (pojawia się po 50% scrolla)
- [x] 4.6 Dodać navbar scroll behavior (klasa `.scrolled` po 50px)
- [x] 4.7 Dodać hamburger menu (toggle open/close, aria-expanded)
- [x] 4.8 Dodać keyboard navigation (Arrow Up/Down między sekcjami)
- [x] 4.9 Dodać section memory (localStorage — zapamiętywanie ostatniej sekcji)
- [x] 4.10 Dodać escapeHtml helper (ochrona XSS)
- [x] 4.11 Dodać image loading states (eager dla pierwszych 4, lazy dla reszty)
- [x] 4.12 Dodać image onerror fallback (emoji zamiast błędnego obrazka)

### Weryfikacja Sekcji 4
- [x] 4.13 Przeskrollować stronę — parallax widoczny w Hero
- [x] 4.14 Przeskrollować — cząsteczki canvas pojawiają się
- [x] 4.15 Kliknąć link w nawigacji — smooth scroll do sekcji
- [x] 4.16 Sprawdzić pasek postępu — rośnie z scrollem
- [x] 4.17 Kliknąć "Wróć na górę" — strona przewija się do góry
- [x] 4.18 Nacisnąć Arrow Down — nawigacja do następnej sekcji
- [x] 4.19 Odświeżyć stronę — localStorage przywraca ostatnią sekcję
- [x] 4.20 Sprawdzić lazy loading (Network w DevTools)

---

## Finalizacja

- [x] F.1 Zweryfikować HTML (walidacja)
- [x] F.2 Sprawdzić JavaScript (`node --check script.js`)
- [x] F.3 Przejrzeć wszystkie zmiany
- [x] F.4 Upewnić się, że strona działa poprawnie (regression check)
- [x] F.5 Sprawdzić responsywność (375px, 768px, 1280px)
- [x] F.6 Sprawdzić accessibility (ARIA labels, keyboard nav, focus management)