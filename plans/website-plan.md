# Plan: Strona Leśny Herbarium

## Metadane

| Pole | Wartość |
|---|---|
| **Data** | 2026-04-13 |
| **Szacowany czas** | 4–5 godzin |
| **Stack** | Vanilla HTML + CSS + JavaScript |
| **Pliki do zmiany** | `index.html`, `styles.css`, `script.js`, `data/plants.json` (nowe) |

## Kontekst

Strona typu portfolio prezentująca katalog roślin leśnych w formie interaktywnych kart z możliwością filtrowania i wyszukiwania. Celem jest stworzenie nowoczesnej, responsywnej strony z efektownym designem inspirowanym naturą, która będzie wizytówką projektu i pokaże umiejętności frontendowe.

---

## Sekcja 1: Struktura HTML i dane

- [x] 1.1 Utworzyć folder `data/` i plik `plants.json` z danymi roślin (min. 12 pozycji) ✓
- [x] 1.2 Utworzyć `index.html` z sekcjami: header, hero, karty roślin, footer ✓
- [x] 1.3 Dodać strukturę nawigacji (logo, filtry kategorii, wyszukiwarka) ✓
- [x] 1.4 Dodać modal dla szczegółów rośliny (ukryty domyślnie) ✓

### Weryfikacja Sekcji 1
- [x] 1.5 Otworzyć `index.html` w przeglądarce — struktura strony widoczna
- [x] 1.6 Sprawdzić konsolę — brak błędów

---

## Sekcja 2: Style CSS i design

- [x] 2.1 Zdefiniować zmienne CSS dla kolorów (odcienie zieleni, brązu, kremowego) ✓
- [x] 2.2 Zaimplementować fonty (np. Montserrat dla nagłówków, Open Sans dla tekstu) ✓
- [x] 2.3 Stylizować header z efektem glassmorphism ✓
- [x] 2.4 Utworzyć responsywny grid dla kart roślin (1 kolumna mobile, 2 tablet, 3-4 desktop) ✓
- [x] 2.5 Dodać hover efekty na kartach (transform: scale, box-shadow) ✓
- [x] 2.6 Stylizować przyciski filtrów z aktywnym stanem ✓
- [x] 2.7 Dodać animacje wejścia dla kart (fade-in przy load) ✓

### Weryfikacja Sekcji 2
- [x] 2.8 Sprawdzić wygląd na różnych rozdzielczościach (375px, 768px, 1280px)
- [x] 2.9 Zweryfikować czytelność tekstu i kontrast kolorów

---

## Sekcja 3: JavaScript — logika interakcji

- [x] 3.1 Zaimportować dane z `plants.json` do zmiennej ✓
- [x] 3.2 Zaimplementować funkcję renderującą karty roślin ✓
- [ ] 3.3 Dodać filtrowanie po kategorii (drzewa, krzewy, zioła, grzyby, kwiaty)
- [ ] 3.4 Zaimplementować wyszukiwarkę tekstową (filtrowanie po nazwie)
- [ ] 3.5 Dodać otwieranie modala ze szczegółami po kliknięciu karty
- [ ] 3.6 Dodać zamykanie modala (przycisk X, kliknięcie poza modalem, Esc)
- [ ] 3.7 Dodać animację ładowania kart (skeleton lub spinner)

### Weryfikacja Sekcji 3
- [ ] 3.8 Kliknąć filtry — karty aktualizują się poprawnie
- [ ] 3.9 Wpisać tekst w wyszukiwarce — karty filtrują się w czasie rzeczywistym
- [ ] 3.10 Kliknąć kartę — modal otwiera się ze szczegółami
- [ ] 3.11 Sprawdzić konsolę — brak błędów

---

## Sekcja 4: Udoskonalenia designu i funkcjonalności

- [ ] 4.1 Dodać efekt parallax w sekcji hero (tło przesuwa się wolniej przy scrollu)
- [ ] 4.2 Zaimplementować smooth scroll do sekcji po kliknięciu w nawigację
- [ ] 4.3 Dodać licznik wyświetlonych roślin ("Wyświetlane: X z Y")
- [ ] 4.4 Dodać przycisk "Wróć na górę" (scroll to top)
- [ ] 4.5 Zoptymalizować obrazki (lazy loading z `loading="lazy"`)

### Weryfikacja Sekcji 4
- [ ] 4.6 Przeskrollować stronę — efekt parallax widoczny
- [ ] 4.7 Kliknąć przycisk "Wróć na górę" — strona przewija się do góry
- [ ] 4.8 Sprawdzić czy lazy loading działa (network w DevTools)

---

## Finalizacja

- [ ] F.1 Zweryfikować HTML (walidacja)
- [ ] F.2 Sprawdzić JavaScript (`node --check script.js`)
- [ ] F.3 Przejrzeć wszystkie zmiany — `git diff`
- [ ] F.4 Upewnić się, że strona działa poprawnie (regression check)
- [ ] F.5 Stworzyć commit: `feat: dodaj stronę Leśny Herbarium z katalogiem roślin`