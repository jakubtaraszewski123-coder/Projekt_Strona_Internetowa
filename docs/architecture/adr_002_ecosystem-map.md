# ADR-002: Interaktywna mapa warstw ekosystemu zamiast sekcji scrollowanych

## Status
✅ Zaakceptowany

## Data
2026-05-11

## Kontekst

Pierwotny plan (`plans/docs.md` z 2026-04-27) zakładał 7 osobnych sekcji scrollowanych (Gleba → Ściółka → Runo → Podszyt → Pnie → Korona → Niebo), każda z własnym tłem i treściami edukacyjnymi, z efektem parallax na każdej sekcji.

Problemy z pierwotnym podejściem:
- 7 sekcji × ~150 linii HTML każda = ~1000+ linii kodu
- 7 obrazów tła do pobrania (wydajność)
- Parallax na każdej sekcji = problemy z wydajnością na mobile
- Długi czas scrollowania przez stronę (frustracja użytkownika)
- Trudne utrzymanie i aktualizacja treści

Rozważane opcje:
1. **7 osobnych sekcji scrollowanych** (oryginalny plan)
2. **Jedna interaktywna sekcja "Ecosystem Map"** z klikalnymi warstwami
3. **Poziomy slider** warstw (swipe/scroll horizontalny)

## Decyzja

Wybrano **interaktywną mapę warstw** jako pojedynczą sekcję (`#ecosystem-map`) z 7 klikalnymi elementami. Kliknięcie warstwy otwiera modal z opisem, 3 ciekawostkami i listą przedstawicieli.

## Uzasadnienie

| Kryterium | 7 sekcji scroll | Ecosystem Map | Poziomy slider |
|---|---|---|---|
| Liczba linii HTML | ~1000+ | ~120 | ~300 |
| Liczba obrazów tła | 7 | 0 (kolory CSS) | 7 |
| Wydajność mobile | Słaba (parallax) | ✅ Dobra | Średnia |
| UX | Długi scroll | ✅ Interaktywny | Swipe |
| Łatwość utrzymania | Trudne | ✅ Łatwe | Średnie |
| Accessibility | OK | ✅ Dobre (keyboard) | OK |

**Kluczowe argumenty:**
1. Znacznie mniejszy kod HTML (~120 linii vs ~1000+)
2. Zero obrazów tła — same kolory CSS + emoji
3. Lepsza wydajność na urządzeniach mobilnych
4. Użytkownik eksploruje aktywnie (klik) zamiast biernego scrollowania
5. Łatwiejsze dodawanie nowych warstw (wystarczy dodać obiekt do `ecoLayerData`)
6. Modal daje fokus na treść — użytkownik czyta bez rozpraszania

## Konsekwencje

### Pozytywne
- Lżejsza strona, szybsze ładowanie
- Łatwiejsze dodawanie/edycja warstw (dane w JS obiekcie)
- Lepsze UX na mobile (tap zamiast scroll)
- Spójny wzorzec: klik → modal → czytaj

### Negatywne
- Użytkownik nie widzi wszystkich warstw jednocześnie (trzeba klikać)
- Brak wizualnego "storytellingu" scrollowania przez las
- Wymaga JavaScript do działania (no-JS fallback ograniczony)

### Mitigacje
- Tooltipy na każdej warstwie pokazują podgląd treści
- Warstwy ułożone pionowo od Nieba do Gleby (naturalny porządek)
- Emoji wizualnie wskazują zawartość każdej warstwy
- Keyboard accessible (tab + Enter/Space)

## Alternatywy odrzucone

- **7 sekcji scrollowanych**: Za dużo kodu, za ciężkie, słaba wydajność
- **Poziomy slider**: Nieintuicyjny na desktopie (brak swipe)
