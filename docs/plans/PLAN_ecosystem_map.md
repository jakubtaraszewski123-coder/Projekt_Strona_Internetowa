# PLAN_ecosystem_map

## 1. Cel

Stworzenie interaktywnej mapy 7 warstw ekosystemu leśnego. Użytkownik klika warstwę aby otworzyć modal z opisem, ciekawostkami i przedstawicielami danej warstwy.

## 2. Zakres

**Wchodzi w zakres:**
- 7 warstw: Niebo, Korona, Pnie, Podszyt, Runo, Ściółka, Gleba
- Kliknięcie/klawiatura otwiera modal
- Modal z opisem, 3 ciekawostkami, przedstawicielami
- Zamykanie modalu (X, klik poza, Escape)

**Nie wchodzi w zakres:**
- Animowane SVG zwierząt (dodatek)
- Osobne sekcje scrollowane dla każdej warstwy

## 3. Wymagania funkcjonalne

- F-1: 7 warstw wyświetlonych pionowo z emoji i labelką
- F-2: Kliknięcie warstwy → otwarcie modala z danymi
- F-3: Modal zawiera: tytuł, opis, 3 ciekawostki, lista przedstawicieli
- F-4: Zamykanie: przycisk X, kliknięcie na overlay, Escape
- F-5: Blokowanie scroll przy otwartym modalu
- F-6: Focus management — focus na close button
- F-7: Keyboard accessible — Enter/Space na warstwie

## 4. Wymagania niefunkcjonalne

- **UX:** Tooltip na hover pokazujący podgląd treści
- **Accessibility:** role="button", tabindex="0", aria-label na każdej warstwie
- **Wydajność:** Dane hardcoded w JS (nie fetch) — natychmiastowe otwarcie
- **Design:** Kolory CSS gradient dla każdej warstwy

## 5. Kontekst techniczny

- **Komponenty:** `initEcosystemMap()`, `openEcoLayerModal()`, `closeEcoLayerModal()` w `script.js`
- **Dane:** Obiekt `ecoLayerData` w script.js (7 kluczy: niebo, korona, pnie, podszyt, runo, sciolka, gleba)
- **DOM:** `.ecosystem-layer` (7 elementów), `#eco-modal-overlay`, `#eco-modal`

## 6. Kroki implementacji

1. Dodać sekcję `#ecosystem-map` w HTML z 7 warstwami
2. Dodać strukturę modala eco-layer w HTML (ukryty domyślnie)
3. Stworzyć obiekt `ecoLayerData` z danymi dla każdej warstwy
4. Napisać `openEcoLayerModal(layerKey)` — wypełnia modal danymi
5. Napisać `closeEcoLayerModal()` — ukrywa modal
6. Napisać `initEcosystemMap()` — event listenery na warstwach (click, keydown)
7. Dodać event listenery zamykania (X, overlay click, Escape)
8. Dodać aktywne stany warstw (highlight klikniętej)
9. Dodać animowane SVG zwierząt w warstwie korony

## 7. Kryteria akceptacji

- [ ] 7 warstw widocznych z emoji i opisem
- [ ] Klik na "Korona" → modal z tytułem, opisem, 3 ciekawostkami, przedstawicielami
- [ ] Escape zamyka modal
- [ ] Klik na overlay zamyka modal
- [ ] Tab + Enter na warstwie otwiera modal
- [ ] Scroll zablokowany przy otwartym modalu
- [ ] Zero błędów w konsoli

## 8. Testy

- **Manualne:** Kliknąć każdą z 7 warstw, sprawdzić zawartość modala
- **Edge case:** Klik na tę samą warstwę 2x — toggle działa
- **Edge case:** Szybkie klikanie — brak błędów
- **Edge case:** Modal otwarty + klik na inną warstwę — stary modal zamknięty, nowy otwarty