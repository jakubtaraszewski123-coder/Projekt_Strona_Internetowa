# Zasady UX/UI — Leśny Herbarium

## Zasady Projektowania

### 1. Naturalna Paleta
Kolory inspirowane naturą: głębokie zielenie, brązy gleby i kory, kremowy tekst, akcenty słońca. Spójność z tematyką leśną.

### 2. Hierarchia Wizualna
- **Nagłówki:** Playfair Display — elegancki, serifowy, przyciąga wzrok
- **Treść:** Lato — czytelny, sans-serif, neutralny
- **CTA:** Wyróżniony zielony kolor z hover effect
- **Karty:** Subtelny hover (scale + shadow)

### 3. Progressive Disclosure
- **Poziom 1:** Karta — nazwa + łacińska + kategoria (podgląd)
- **Poziom 2:** Modal — pełny opis, 4 detale, ciekawostka (szczegóły)
- **Poziom 3:** Ecosystem Map modal — opis, ciekawostki, przedstawiciele (głęboka eksploracja)

### 4. Feedback System
| Stan | Mechanizm |
|---|---|
| Ładowanie | Skeleton cards (puste karty z pulsującym tłem) |
| Sukces | Licznik wyników aktualizuje się |
| Błąd | Komunikat tekstowy z instrukcją |
| Brak wyników | Emoji 🍂 + "Nie znaleziono roślin" |
| Akcja | Hover effect, active state na przyciskach |

### 5. Dostępność Priorytetowa
- Kontrast > 4.5:1 (WCAG AA)
- Keyboard navigation (Tab, Enter, Escape, Arrows)
- ARIA labels na wszystkich interaktywnych elementach
- Focus visible na elementach interaktywnych
- Reduced motion support

### 6. Mobile-First Design
- Bazowe style dla mobile
- Breakpoint: 768px (tablet/desktop)
- Hamburger menu zamiast inline nav
- Single-column layout na mobile
- Wyłączony parallax i particles na mobile (performance)

### 7. Spójność Interakcji
- **Klik kartę → modal** (spójne dla katalogu, ecosystem, discover)
- **Escape zamyka** (wszystkie modale)
- **Klik poza zamyka** (wszystkie modale)
- **X zamyka** (wszystkie modale)
- **Filtruj → aktualizuj** (spójne dla katalogu i discover)
