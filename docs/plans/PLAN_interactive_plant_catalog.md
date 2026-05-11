# PLAN_interactive_plant_catalog

## 1. Cel

Utworzenie interaktywnego katalogu 15 gatunków roślin leśnych z dynamicznym renderowaniem kart na podstawie danych z `data/plants.json`. Użytkownik może przeglądać gatunki w atrakcyjnej wizualnej formie.

## 2. Zakres

**Wchodzi w zakres:**
- Renderowanie kart roślin z danych JSON
- Wyświetlanie: nazwa, nazwa łacińska, obrazek (z emoji fallback), badge kategorii
- Skeleton loading podczas fetch()
- Licznik wyników "Wyświetlane: X z Y"
- No-results state

**Nie wchodzi w zakres:**
- Filtrowanie (osobny plan)
- Wyszukiwarka (osobny plan)
- Modal szczegółów (osobny plan)

## 3. Wymagania funkcjonalne

- F-1: Dane ładowane z `data/plants.json` via fetch()
- F-2: Każdy gatunek renderowany jako karta (article element)
- F-3: Karta zawiera: obrazek, nazwę polską, nazwę łacińską, badge kategorii
- F-4: Skeleton loading widoczny przed załadowaniem danych
- F-5: Po błędzie fetch — komunikat o błędzie
- F-6: Licznik wyników aktualizowany po renderowaniu
- F-7: Obrazki z fallbackiem emoji przy błędzie ładowania

## 4. Wymagania niefunkcjonalne

- **Wydajność:** Pierwsze 4 karty loading="eager", reszta loading="lazy"
- **Bezpieczeństwo:** escapeHtml() dla wszystkich danych w innerHTML
- **UX:** Staggered animation (animation-delay index * 0.05s)
- **Accessibility:** role="button", aria-label, tabindex="0" na kartach

## 5. Kontekst techniczny

- **Komponent:** `renderPlants()` w `script.js`
- **API:** `fetch('data/plants.json')`
- **Dane:** 15 obiektów Plant z `data/plants.json`
- **DOM:** `#plants-grid` — kontener kart
- **CSS:** `.plants-grid` (grid layout), `.plant-card`, `.skeleton-card`, `.no-results`

## 6. Kroki implementacji

1. Utworzyć `data/plants.json` z 15 gatunkami (id, name, latinName, category, layer, description, funFact, image, height, flowering, habitat)
2. Napisać `loadPlantsData()` — fetch JSON z error handling
3. Napisać `escapeHtml()` helper
4. Napisać `renderPlants(plants)` — tworzenie article dla każdego gatunku
5. Dodać skeleton loading placeholder w HTML
6. Dodać usuwanie skeleton po załadowaniu danych
7. Dodać licznik wyników (#results-counter)
8. Dodać no-results message
9. Dodać image onerror fallback na emoji
10. Dodać staggered animation przez `animationDelay`

## 7. Kryteria akceptacji

- [ ] 15 kart wyświetla się poprawnie po załadowaniu strony
- [ ] Skeleton loading widoczny przez czas fetch()
- [ ] Błąd fetch wyświetla komunikat zamiast kart
- [ ] Obrazek błędny → emoji kategorii
- [ ] Licznik wyświetla "Wyświetlane: 15 z 15"
- [ ] Brak błędów w konsoli przeglądarki

## 8. Testy

- **Manualne:** Otworzyć stronę, sprawdzić czy 15 kart renderuje się, sprawdzić licznik
- **Edge case:** Zmienić URL w plants.json na błędny — sprawdzić fallback emoji
- **Edge case:** Zmienić ścieżkę fetch na błędną — sprawdzić komunikat błędu