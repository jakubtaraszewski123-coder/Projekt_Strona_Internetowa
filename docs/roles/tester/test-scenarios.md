# Tester — Scenariusze Testowe i Edge Cases

## Scenariusze Testowe — Priorytetowe

### ST-P1: Ładowanie katalogu (blokujący)
**Kroki:** Otwórz stronę → Scroll do Katalogu → Sprawdź licznik
**Oczekiwane:** 15 kart, "Wyświetlane: 15 z 15", zero błędów w konsoli
**Status:** ✅ PASS

### ST-P2: Filtrowanie (blokujący)
**Kroki:** Klik "Grzyby" → Sprawdź wyniki → Klik "Wszystkie" → Sprawdź wyniki
**Oczekiwane:** 3 grzyby → 15 wszystkich
**Status:** ✅ PASS

### ST-P3: Wyszukiwarka (blokujący)
**Kroki:** Wpisz "dąb" → Sprawdź wyniki → Wpisz "xyz" → Sprawdź no-results
**Oczekiwane:** "Dąb szypułkowy" → "Nie znaleziono roślin" 🍂
**Status:** ✅ PASS

### ST-P4: Modal rośliny (blokujący)
**Kroki:** Klik kartę → Sprawdź zawartość → Escape → Sprawdź zamknięcie
**Oczekiwane:** Modal z danymi rośliny → zamknięty po Escape
**Status:** ✅ PASS

### ST-P5: Ecosystem Map (blokujący)
**Kroki:** Klik warstwę "Gleba" → Sprawdź modal → Zamknij
**Oczekiwane:** Modal z opisem gleby, 3 ciekawostki, przedstawiciele
**Status:** ✅ PASS

### ST-P6: Responsywność (blokujący)
**Kroki:** 375px → Sprawdź layout → 768px → 1280px
**Oczekiwane:** 1 kolumna → 2 kolumny → 4 kolumny
**Status:** ✅ PASS

## Edge Cases

### EC-1: Błąd fetch plants.json
**Scenariusz:** Serwer zwraca 404 dla `data/plants.json`
**Oczekiwane:** Komunikat "Nie udało się załadować danych roślin"
**Aktualne:** ✅ Obsłużone (try/catch w loadPlantsData)

### EC-2: Brak wyników wyszukiwania
**Scenariusz:** Wpisano "abc123xyz" w wyszukiwarce
**Oczekiwane:** "Nie znaleziono roślin" + 🍂
**Aktualne:** ✅ Obsłużone (no-results hidden=false)

### EC-3: Błędny URL obrazka
**Scenariusz:** Image URL zwraca 404
**Oczekiwane:** Emoji kategorii zamiast obrazka
**Aktualne:** ✅ Obsłużone (onerror → innerHTML emoji)

### EC-4: localStorage niedostępny
**Scenariusz:** Przeglądarka blokuje localStorage (private mode)
**Oczekiwane:** Strona działa, section memory nie zapisuje
**Aktualne:** ✅ Obsłużone (try/catch w initSectionMemory)

### EC-5: Bardzo szybki scroll
**Scenariusz:** Użytkownik scrolluje szybko wielokrotnie
**Oczekiwane:** Parallax płynny, particles nie crashuje
**Aktualne:** ✅ Obsłużone (ticking flag + requestAnimationFrame)

### EC-6: Długi tekst w wyszukiwarce
**Scenariusz:** Wpisano 1000+ znaków
**Oczekiwane:** Brak crashu, debounce działa
**Aktualne:** ✅ Obsłużone (indexOf na stringu)

### EC-7: Dwa modale jednocześnie
**Scenariusz:** Otwarty plant modal → kliknięcie warstwy ecosystem
**Oczekiwane:** Pierwszy modal zamknięty, drugi otwarty (lub zablokowane)
**Aktualne:** ⚠️ Nieuwzględnione — modale nie wykluczają się

### EC-8: Zero roślin w JSON
**Scenariusz:** plants.json = `[]`
**Oczekiwane:** "Wyświetlane: 0 z 0" + no-results
**Aktualne:** ✅ Obsłużone (plants.length === 0 → no-results)

### EC-9: Brak obrazka w facts.json
**Scenariusz:** Fact ma image = "" lub brak pola
**Oczekiwane:** imgEl.style.display = 'none' w fact modal
**Aktualne:** ✅ Obsłużone (if (fact.image) { ... } else { display: none })

### EC-10: Klawiatura + input focused
**Scenariusz:** Fokus na search input → Arrow Down
**Oczekiwane:** Brak navigacji między sekcjami (ignorowane)
**Aktualne:** ✅ Obsłużone (isInputFocused check)
