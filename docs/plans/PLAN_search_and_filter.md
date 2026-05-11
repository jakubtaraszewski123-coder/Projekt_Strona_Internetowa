# PLAN_search_and_filter

## 1. Cel

Dodanie do katalogu roślin funkcjonalności filtrowania po kategorii i wyszukiwania tekstowego po nazwie polskiej i łacińskiej.

## 2. Zakres

**Wchodzi w zakres:**
- 6 przycisków filtrów: Wszystkie, Drzewa, Krzewy, Kwiaty, Grzyby, Zioła
- Pole wyszukiwania z debounce 200ms
- Łączenie filtrów (kategoria + search)
- Aktualizacja licznika wyników
- No-results state

**Nie wchodzi w zakres:**
- Renderowanie kart (osobny plan)
- Modal szczegółów (osobny plan)
- Filtrowanie w sekcji Discover (osobny plan)

## 3. Wymagania funkcjonalne

- F-1: Kliknięcie przycisku kategorii filtruje rośliny
- F-2: Aktywny przycisk ma klasę `.active`
- F-3: Wpisanie tekstu filtruje po nazwie i nazwie łacińskiej
- F-4: Szukanie jest case-insensitive
- F-5: Debounce 200ms na search input
- F-6: Filtrowanie łączy kategorię i search
- F-7: Brak wyników → komunikat "Nie znaleziono roślin"
- F-8: Licznik aktualizuje się po każdym filtrze

## 4. Wymagania niefunkcjonalne

- **Wydajność:** Debounce 200ms zapobiega nadmiernym re-renderom
- **UX:** Natychmiastowa reakcja na kliknięcie filtra
- **Accessibility:** Filtry w `role="group"` z `aria-label`

## 5. Kontekst techniczny

- **Komponenty:** `filterByCategory()`, `filterBySearch()`, `applyFilters()` w `script.js`
- **DOM:** `.filter-buttons`, `#search-input`, `#plants-grid`, `#results-counter`, `#no-results`
- **Dane:** `currentCategory` (string), `currentSearch` (string), `plantsData` (array)

## 6. Kroki implementacji

1. Dodać przyciski filtrów w HTML z `data-category` atrybutami
2. Dodać pole wyszukiwania z `#search-input`
3. Napisać `filterByCategory(category)` — ustawia currentCategory, woła applyFilters()
4. Napisać `filterBySearch(query)` — ustawia currentSearch (toLowerCase), woła applyFilters()
5. Napisać `applyFilters()` — filtruje plantsData po obu kryteriach, woła renderPlants()
6. Dodać event listenery na przyciskach filtrów (toggle active class)
7. Dodać event listener na search input z debounce (setTimeout 200ms)
8. Dodać no-results state w renderPlants()
9. Dodać aktualizację licznika w renderPlants()

## 7. Kryteria akceptacji

- [ ] Klik "Grzyby" → tylko 3 gatunki grzybów widoczne
- [ ] Klik "Wszystkie" → 15 gatunków
- [ ] Wpisanie "dąb" → "Dąb szypułkowy"
- [ ] Wpisanie "Quercus" → "Dąb szypułkowy" (szukanie po łacińskiej)
- [ ] Wpisanie "xyz" → "Nie znaleziono roślin" 🍂
- [ ] Filtrowanie + search działają łącznie
- [ ] Debounce działa (brak opóźnień > 200ms)

## 8. Testy

- **Manualne:** Przetestować każdy filtr, różne frazy search, kombinacje filtr+search
- **Edge case:** Pusty string → pełna lista
- **Edge case:** Spacje na początku/końcu — trim() działa
- **Edge case:** Polskie znaki — "sz" szuka poprawnie