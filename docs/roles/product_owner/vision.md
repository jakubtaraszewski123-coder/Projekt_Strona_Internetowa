# Dokumentacja Roli: Product Owner — Leśny Herbarium

## Wizja Produktu

Stworzyć **interaktywną stronę edukacyjną o polskich lasach**, która łączy naukę o ekosystemie leśnym z nowoczesnym web designem. Produkt ma służyć zarówno uczniom uczącym się biologii, jak i jako portfolio webdevowe demonstrujące umiejętności frontendowe.

**Nazwa:** Leśny Herbarium
**Typ:** Strona one-page, statyczna, edukacyjna
**Stack:** Vanilla HTML + CSS + JavaScript
**Koszt:** 0 zł

## Backlog Produktu

### Priorytet 1 — MUST HAVE (zrealizowane ✅)

| ID | Funkcja | Opis | Status |
|---|---|---|---|
| F-1 | Katalog roślin | 15 gatunków z filtrami i wyszukiwarką | ✅ DONE |
| F-2 | Modal szczegółów | Opis, dane, ciekawostka dla każdego gatunku | ✅ DONE |
| F-3 | Ecosystem Map | 7 interaktywnych warstw lasu z modalami | ✅ DONE |
| F-4 | Responsywność | Mobile/tablet/desktop | ✅ DONE |
| F-5 | Hero z parallax | Multi-layer parallax w sekcji Hero | ✅ DONE |
| F-6 | Discover Section | Sekcja ciekawostek z filtrami | ✅ DONE |
| F-7 | Stats Section | Animowane statystyki o lasach | ✅ DONE |

### Priorytet 2 — SHOULD HAVE (zrealizowane ✅)

| ID | Funkcja | Opis | Status |
|---|---|---|---|
| F-8 | Keyboard Navigation | Arrow Up/Down między sekcjami | ✅ DONE |
| F-9 | Section Memory | localStorage — zapamiętywanie pozycji | ✅ DONE |
| F-10 | Forest Particles | Canvas particles podczas scrolla | ✅ DONE |
| F-11 | Scroll Progress Bar | Pasek postępu na górze strony | ✅ DONE |
| F-12 | Scroll to Top | Przycisk powrotu na górę | ✅ DONE |
| F-13 | Skeleton Loading | Placeholder podczas ładowania danych | ✅ DONE |
| F-14 | No Results States | Komunikat przy braku wyników | ✅ DONE |
| F-15 | Accessibility | ARIA, focus management, keyboard support | ✅ DONE |

### Priorytet 3 — NICE TO HAVE (do rozważenia)

| ID | Funkcja | Opis | Status |
|---|---|---|---|
| F-16 | Dark Mode | Wariant ciemny strony | ❌ TODO |
| F-17 | Offline Support | Service Worker + cache (PWA) | ❌ TODO |
| F-18 | Więcej gatunków | Rozszerzenie plants.json do 30+ | ❌ TODO |
| F-19 | Quiz Leśny | Interaktywny quiz wiedzy | ❌ TODO |
| F-20 | Wyszukiwarka ciekawostek | Search w sekcji Discover | ❌ TODO |
| F-21 | Animacje scroll-triggered | Intersection Observer dla sekcji | ❌ TODO |
| F-22 | Share button | Udostępnianie konkretnego gatunku | ❌ TODO |

## Priorytetyzacja (ICE Ranking — podsumowanie)

| Funkcja | Impact | Confidence | Ease | ICE Score |
|---|---|---|---|---|
| Katalog roślin | 10 | 10 | 8 | **84** |
| Ecosystem Map | 9 | 9 | 7 | **66** |
| Discover Section | 8 | 8 | 8 | **60** |
| Quiz Leśny | 9 | 6 | 4 | **38** |
| PWA/Offline | 6 | 7 | 3 | **21** |

## Decyzje Produktowe

1. **Nazwa:** "Leśny Herbarium" (zamiast "Ścieżka Natury") — bardziej opisowa, kojarzy się z katalogowaniem
2. **Zakres danych:** 15 gatunków w MVP (3 z każdej kategorii) — wystarczająco żeby pokazać różnorodność
3. **Brak rejestracji:** Strona w pełni publiczna, zero barrier dla użytkownika
4. **Język:** Polski — grupa docelowa to polscy uczniowie i nauczyciele
5. **Zero monetizacji:** Projekt edukacyjny, nie komercyjny
