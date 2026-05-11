# Dokumentacja Roli: Tester — Leśny Herbarium

## Strategia Testów

Projekt nie posiada automatycznych testów jednostkowych ani integracyjnych. Testowanie odbywa się manualnie w przeglądarce.

### Poziomy testowania
1. **Testy funkcjonalne** — czy każda funkcja działa zgodnie z oczekiwaniami
2. **Testy responsywności** — czy strona działa poprawnie na różnych rozdzielczościach
3. **Testy accessibility** — czy strona jest dostępna dla użytkowników z niepełnosprawnościami
4. **Testy wydajności** — czy strona ładuje się szybko i działa płynnie
5. **Testy regresji** — czy nowe zmiany nie psują istniejących funkcji

### Środowisko testowe
- **Przeglądarka:** Chrome (najnowsza), Firefox (najnowsza)
- **DevTools:** F12 → Console, Network, Performance, Lighthouse
- **Device Toolbar:** Ctrl+Shift+M (symulacja mobile/tablet)

## Scenariusze Testowe

### ST-1: Katalog Roślin — Ładowanie

| Krok | Akcja | Oczekiwany rezultat |
|---|---|---|
| 1 | Otworzyć `index.html` w przeglądarce | Strona ładuje się poprawnie |
| 2 | Scroll do sekcji "Katalog Roślin" | Karty roślin wyświetlają się w gridzie |
| 3 | Sprawdzić licznik wyników | "Wyświetlane: 15 z 15" |
| 4 | Sprawdzić konsolę | Zero błędów |

### ST-2: Katalog — Filtrowanie

| Krok | Akcja | Oczekiwany rezultat |
|---|---|---|
| 1 | Kliknąć filtr "Grzyby" | Wyświetlają się tylko 3 gatunki grzybów |
| 2 | Sprawdzić licznik | "Wyświetlane: 3 z 15" |
| 3 | Kliknąć "Wszystkie" | Wyświetla się wszystkie 15 gatunków |
| 4 | Kliknąć "Zioła" | Wyświetlają się 2 gatunki ziół |

### ST-3: Katalog — Wyszukiwarka

| Krok | Akcja | Oczekiwany rezultat |
|---|---|---|
| 1 | Wpisać "dąb" w wyszukiwarce | Wyświetla się "Dąb szypułkowy" |
| 2 | Wpisać "Quercus" | Wyświetla się "Dąb szypułkowy" (szukanie po łacińskiej) |
| 3 | Wpisać "xyz123" | Wyświetla się "Nie znaleziono roślin" 🍂 |
| 4 | Wyczyścić wyszukiwarkę | Wraca pełna lista 15 gatunków |

### ST-4: Katalog — Modal

| Krok | Akcja | Oczekiwany rezultat |
|---|---|---|
| 1 | Kliknąć kartę "Dąb szypułkowy" | Otwiera się modal ze szczegółami |
| 2 | Sprawdzić zawartość modala | Nazwa, łacińska, opis, 4 detale, ciekawostka |
| 3 | Nacisnąć Escape | Modal zamyka się |
| 4 | Kliknąć poza modal | Modal zamyka się |
| 5 | Kliknąć przycisk X | Modal zamyka się |
| 6 | Sprawdzić scroll strony | Scroll zablokowany gdy modal otwarty, przywrócony po zamknięciu |

### ST-5: Ecosystem Map

| Krok | Akcja | Oczekiwany rezultat |
|---|---|---|
| 1 | Scroll do sekcji "Warstwy Lasu" | Wyświetla się 7 warstw |
| 2 | Kliknąć warstwę "Korona" | Otwiera się modal z opisem korony |
| 3 | Sprawdzić modal | Tytuł, opis, 3 ciekawostki, przedstawiciele |
| 4 | Nacisnąć Escape | Modal zamyka się |
| 5 | Tab + Enter na warstwie "Gleba" | Modal otwiera się (keyboard accessible) |

### ST-6: Discover — Ciekawostki

| Krok | Akcja | Oczekiwany rezultat |
|---|---|---|
| 1 | Scroll do sekcji "Kliknij i poznaj" | Karty ciekawostek wyświetlają się |
| 2 | Kliknąć filtr "Zwierzęta" | Tylko karty zwierząt widoczne |
| 3 | Kliknąć kartę ciekawostki | Otwiera się mini-modal |
| 4 | Sprawdzić mini-modal | Obrazek, nazwa, kategoria, ciekawostka |

### ST-7: Stats — Animacja

| Krok | Akcja | Oczekiwany rezultat |
|---|---|---|
| 1 | Załadować stronę | Liczniki pokazują "0" |
| 2 | Scroll do sekcji Stats | Liczniki animują się od 0 do wartości docelowej |
| 3 | Scroll w górę i z powrotem | Liczniki nie animują się ponownie (jednorazowa animacja) |
| 4 | Sprawdzić formatowanie | Liczby sformatowane z separatorem (np. "9 500 000") |

### ST-8: Nawigacja

| Krok | Akcja | Oczekiwany rezultat |
|---|---|---|
| 1 | Kliknąć link "Katalog roślin" w nawigacji | Smooth scroll do sekcji Katalog |
| 2 | Przeskrollować > 50px | Navbar zmienia tło na ciemne (klasa `.scrolled`) |
| 3 | Nacisnąć Arrow Down | Scroll do następnej sekcji |
| 4 | Nacisnąć Arrow Up | Scroll do poprzedniej sekcji |
| 5 | Scroll do 50%+ | Przycisk "Wróć na górę" pojawia się |
| 6 | Kliknąć "Wróć na górę" | Scroll na samą górę strony |
| 7 | Sprawdzić pasek postępu | Rośnie z scrollem |

### ST-9: Responsywność

| Krok | Akcja | Oczekiwany rezultat |
|---|---|---|
| 1 | Ustawić 375px (mobile) | Single-column layout, hamburger menu |
| 2 | Kliknąć hamburger | Menu otwiera się |
| 3 | Kliknąć link w menu | Menu zamyka się, scroll do sekcji |
| 4 | Ustawić 768px (tablet) | 2-kolumnowy grid |
| 5 | Ustawić 1280px (desktop) | 4-kolumnowy grid |

## Edge Cases

### EC-1: Brak danych
- **Scenariusz:** `plants.json` nie istnieje lub zwraca 404
- **Oczekiwane:** Komunikat "Nie udało się załadować danych"

### EC-2: Pusty search
- **Scenariusz:** Wpisano tekst który nie pasuje do żadnej rośliny
- **Oczekiwane:** "Nie znaleziono roślin" 🍂

### EC-3: Błędny obrazek
- **Scenariusz:** URL obrazka nie działa
- **Oczekiwane:** Emoji kategorii zamiast obrazka (fallback `onerror`)

### EC-4: Brak localStorage
- **Scenariusz:** Przeglądarka blokuje localStorage
- **Oczekiwane:** Strona działa normalnie (try/catch w `initSectionMemory`)

### EC-5: Bardzo szybki scroll
- **Scenariusz:** Użytkownik scrolluje bardzo szybko
- **Oczekiwane:** Parallax i particles działają płynnie (throttling przez `requestAnimationFrame`)

### EC-6: Długi tekst wyszukiwania
- **Scenariusz:** Wpisano 500+ znaków w wyszukiwarce
- **Oczekiwane:** Brak błędów, debounce działa

### EC-7: Modal otwarty + Escape
- **Scenariusz:** Otwarty modal + naciśnięty Escape
- **Oczekiwane:** Modal zamyka się, scroll przywrócony, focus wraca

### EC-8: Brak obrazka w ciekawostce
- **Scenariusz:** Fact nie ma pola `image`
- **Oczekiwane:** `imgEl.style.display = 'none'` (ukryty)

## Performance Checklist

- [ ] Pierwsze ładowanie < 3s na 3G
- [ ] Brak błędów w konsoli
- [ ] Parallax płynny na desktop (>50fps)
- [ ] Debounce search działa (brak lagów przy szybkim wpisywaniu)
- [ ] Canvas particles nie wpływa na scroll performance
- [ ] Lighthouse score: Performance > 80, Accessibility > 90
