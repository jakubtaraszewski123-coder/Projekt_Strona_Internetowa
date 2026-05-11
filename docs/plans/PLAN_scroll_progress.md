# PLAN_scroll_progress

## 1. Cel

Dodanie paska postępu scrolla na górze strony oraz przycisku "Wróć na górę" pojawiającego się po przewinięciu 50% strony.

## 2. Zakres

**Wchodzi w zakres:**
- Pasek postępu (thin bar na górze strony, szerokość = % scrolla)
- Przycisk scroll-to-top (pojawia się po 50% scrolla)
- Smooth scroll do góry po kliknięciu przycisku

**Nie wchodzi w zakres:**
- Scroll progress dla poszczególnych sekcji
- Inne wizualizacje postępu

## 3. Wymagania funkcjonalne

- F-1: Pasek postępu ma szerokość proporcjonalną do pozycji scrolla
- F-2: Pasek aktualizuje się przy każdym scrollu
- F-3: Przycisk scroll-to-top pojawia się po 50% scrolla
- F-4: Kliknięcie przycisku → smooth scroll do topu
- F-5: Przycisk ukryty domyślnie (hidden attribute)

## 4. Wymagania niefunkjonalne

- **Wydajność:** Throttling przez requestAnimationFrame (nie na każdy scroll event)
- **UX:** Pasek widoczny ale nieintruzyjny (cienki, fixed, top)
- **Accessibility:** aria-label="Wróć na górę strony"

## 5. Kontekst techniczny

- **Komponenty:** `initScrollProgress()`, `initScrollToTop()` w `script.js`
- **DOM:** `.scroll-progress` (fixed bar), `.scroll-to-top` (button)
- **CSS:** `.scroll-progress { position: fixed; top: 0; width: X%; height: 3px; }`

## 6. Kroki implementacji

1. Dodać `.scroll-progress` element w HTML (pod headerem)
2. Dodać `.scroll-to-top` button w HTML (fixed, bottom-right)
3. Napisać `initScrollProgress()` — obliczenie % scrolla, ustawienie width
4. Napisać `initScrollToTop()` — show/hide po 50%, scroll do top na klik
5. Dodać style CSS dla paska i przycisku
6. Dodać aria-label dla accessibility

## 7. Kryteria akceptacji

- [ ] Pasek postępu rośnie od 0% do 100% przy scrollu do dołu
- [ ] Przycisk scroll-to-top pojawia się po połowie strony
- [ ] Kliknięcie przycisku → smooth scroll do góry
- [ ] Przycisk ukrywa się po powrocie na górę
- [ ] Pasek nie blokuje interakcji z nawigacją

## 8. Testy

- **Manualne:** Scroll od góry do dołu — pasek rośnie płynnie
- **Manualne:** Scroll do połowy — przycisk pojawia się
- **Manualne:** Klik przycisk — strona wraca na górę