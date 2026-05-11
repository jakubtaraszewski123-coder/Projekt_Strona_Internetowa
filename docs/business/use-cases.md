# Przypadki Użycia — Leśny Herbarium

## UC-1: Przeglądanie katalogu roślin

**Aktor:** Dowolny użytkownik
**Cel:** Przeglądanie kart roślin leśnych

### Scenariusz główny
1. Użytkownik scrolluje do sekcji "Katalog Roślin"
2. System ładuje dane z `data/plants.json`
3. System wyświetla karty roślin w gridzie (4 kolumny desktop, 2 tablet, 1 mobile)
4. System wyświetla licznik "Wyświetlane: 15 z 15"
5. Użytkownik widzi skeleton loading podczas ładowania danych

### Scenariusz alternatywny — błąd ładowania
1. Fetch `plants.json` zwraca błąd
2. System wyświetla komunikat "Nie udało się załadować danych"

## UC-2: Filtrowanie roślin po kategorii

**Aktor:** Dowolny użytkownik
**Cel:** Wyświetlenie tylko roślin z wybranej kategorii

### Scenariusz główny
1. Użytkownik klika przycisk kategorii (np. "Grzyby")
2. System filtruje rośliny gdzie `plant.category === 'grzyby'`
3. System re-renderuje karty z tylko wybraną kategorią
4. System aktualizuje licznik (np. "Wyświetlane: 3 z 15")
5. Przycisk aktywnej kategorii jest podświetlony

### Scenariusz alternatywny — brak wyników
1. Filtrowanie nie zwraca żadnych roślin
2. System wyświetla komunikat "Nie znaleziono roślin" z emoji 🍂

## UC-3: Wyszukiwanie roślin

**Aktor:** Dowolny użytkownik
**Cel:** Znalezienie rośliny po nazwie

### Scenariusz główny
1. Użytkownik wpisuje tekst w polu wyszukiwania
2. System czeka 200ms (debounce)
3. System filtruje rośliny gdzie nazwa lub nazwa łacińska zawiera wpisany tekst (case-insensitive)
4. System re-renderuje karty z wynikami
5. System aktualizuje licznik

## UC-4: Wyświetlenie szczegółów rośliny

**Aktor:** Dowolny użytkownik
**Cel:** Poznanie szczegółów gatunku

### Scenariusz główny
1. Użytkownik klika kartę rośliny
2. System otwiera modal z: obrazkiem, kategorią, nazwą, nazwą łacińską, opisem
3. System wyświetla 4 detale: wysokość, kwitnienie, siedlisko, warstwa lasu
4. System wyświetla ciekawostkę (funFact)
5. System blokuje scroll strony (`overflow: hidden`)
6. System ustawia focus na przycisk zamykania
7. Użytkownik zamyka modal (X, kliknięcie poza, Escape)
8. System przywraca scroll i ukrywa modal

## UC-5: Eksploracja warstw ekosystemu

**Aktor:** Dowolny użytkownik
**Cel:** Poznanie warstw lasu

### Scenariusz główny
1. Użytkownik scrolluje do sekcji "Warstwy Lasu"
2. System wyświetla 7 warstw: Niebo, Korona, Pnie, Podszyt, Runo, Ściółka, Gleba
3. Użytkownik klika warstwę
4. System otwiera modal z: opisem warstwy, 3 ciekawostkami, listą przedstawicieli
5. Użytkownik zamyka modal (X, kliknięcie poza, Escape)
6. System ukrywa modal

## UC-6: Przeglądanie ciekawostek

**Aktor:** Dowolny użytkownik
**Cel:** Poznanie ciekawostek o mieszkańcach lasu

### Scenariusz główny
1. Użytkownik scrolluje do sekcji "Kliknij i poznaj"
2. System ładuje dane z `data/facts.json`
3. System wyświetla karty ciekawostek w gridzie
4. Użytkownik klika filtr kategorii (np. "Zwierzęta")
5. System filtruje ciekawostki i re-renderuje karty
6. Użytkownik klika kartę
7. System otwiera mini-modal z obrazkiem, nazwą i ciekawostką
8. Użytkownik zamyka modal

## UC-7: Nawigacja klawiaturą

**Aktor:** Użytkownik korzystający z klawiatury
**Cel:** Nawigacja między sekcjami bez myszy

### Scenariusz główny
1. Użytkownik naciska Arrow Down
2. System przewija do następnej sekcji (hero → stats → ecosystem-map → discover → catalog)
3. Użytkownik naciska Arrow Up
4. System przewija do poprzedniej sekcji
5. Nawigacja nie działa gdy fokus jest na INPUT/TEXTAREA lub modal jest otwarty

## UC-8: Zapamiętywanie pozycji

**Aktor:** Powracający użytkownik
**Cel:** Przywrócenie ostatnio odwiedzanej sekcji

### Scenariusz główny
1. Użytkownik opuszcza stronę (nawigacja, zamknięcie karty)
2. System zapisuje aktualną sekcję w localStorage
3. Użytkownik wraca na stronę
4. System odczytuje sekcję z localStorage
5. System przewija do zapamiętanej sekcji (bez animacji)
