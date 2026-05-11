# Dokumentacja Roli: UX/UI — Leśny Herbarium

## Makiety i Układ Strony

### Layout ogólny (Desktop)

```
┌─────────────────────────────────────────────────────────┐
│  NAVBAR: 🌲 Leśny Herbarium  |  Strona główna Katalog Kontakt  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  HERO (full viewport height)                            │
│  ╔═══════════════════════════════════════════════════╗  │
│  ║                                                   ║  │
│  ║           Leśny Herbarium                         ║  │
│  ║   Odkryj tajemnice ekosystemu leśnego             ║  │
│  ║                                                   ║  │
│  ║        [Przeglądaj katalog]                       ║  │
│  ║                                                    ↓  ║  │
│  ╚═══════════════════════════════════════════════════╝  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  STATS (4 kolumny)                                      │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │
│  │ 🌳      │ │ 🌲      │ │ 💨      │ │ 🦌      │      │
│  │ 9.5M ha │ │ 2.5k mld│ │ 60M ton │ │ 8000+   │      │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘      │
├─────────────────────────────────────────────────────────┤
│  ECOSYSTEM MAP (7 warstw pionowych)                     │
│  ┌─────┐ ☁️ Niebo                                       │
│  ├─────┤ 🌳 Korona Drzew (z anim. zwierząt)             │
│  ├─────┤ 🪵 Pnie Drzew                                  │
│  ├─────┤ 🌾 Podszyt                                     │
│  ├─────┤ 🌿 Runo Leśne                                  │
│  ├─────┤ 🍂 Ściółka                                     │
│  └─────┘ 🪱 Gleba                                       │
├─────────────────────────────────────────────────────────┤
│  DISCOVER — Kliknij i poznaj                            │
│  [Wszystkie] [Drzewa] [Kwiaty] [Grzyby] [Rośliny] [Zw.]│
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐               │
│  │ Karta │ │ Karta │ │ Karta │ │ Karta │  ...           │
│  └───────┘ └───────┘ └───────┘ └───────┘               │
├─────────────────────────────────────────────────────────┤
│  KATALOG ROŚLIN                                         │
│  [Wszystkie][Drzewa][Krzewy][Kwiaty][Grzyby][Zioła]    │
│  [🔍 Szukaj po nazwie...]               Wyświetlane: 15 z 15│
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐               │
│  │ Karta │ │ Karta │ │ Karta │ │ Karta │  ...           │
│  └───────┘ └───────┘ └───────┘ └───────┘               │
├─────────────────────────────────────────────────────────┤
│  FOOTER (4 kolumny)                                     │
│  Opis  |  Nawigacja  |  Źródła  |  Projekt + GitHub     │
│  © 2026 Leśny Herbarium. Projekt edukacyjny.            │
└─────────────────────────────────────────────────────────┘
```

## Przepływy Użytkownika

### Flow 1: Przeglądanie katalogu
```
Wejście na stronę → Scroll do Katalogu → Widok 15 kart
→ Klik filtr "Grzyby" → 3 karty grzybów
→ Klik karty "Muchomor" → Modal ze szczegółami
→ Zamknij modal → Powrót do katalogu
```

### Flow 2: Eksploracja ekosystemu
```
Scroll do Warstw Lasu → Widok 7 warstw
→ Klik "Korona Drzew" → Modal z opisem i ciekawostkami
→ Czytaj ciekawostki → Zamknij modal
→ Klik "Gleba" → Modal z opisem gleby
```

### Flow 3: Nauka przez ciekawostki
```
Scroll do "Kliknij i poznaj" → Widok kart ciekawostek
→ Klik filtr "Zwierzęta" → Filtrowane karty
→ Klik karty → Mini-modal z ciekawostką
→ Zamknij → Wybierz inną kartę
```

### Flow 4: Nawigacja klawiaturą
```
Strzałka w dół → Scroll do następnej sekcji
→ Strzałka w dół → Następna sekcja
→ Strzałka w górę → Poprzednia sekcja
→ Escape → Zamknij modal (jeśli otwarty)
```

## Zasady UX

### 1. Hierarchia wizualna
- **Nagłówki** → Playfair Display (duży, bold)
- **Treść** → Lato (czytelny, regular)
- **CTA** → Wyróżniony kolor, hover effect
- **Karty** → Podnoszą się na hover (transform + shadow)

### 2. Feedback użytkownika
- **Loading:** Skeleton cards podczas fetch()
- **No results:** Emoji 🍂 + komunikat
- **Success:** Licznik wyników aktualizuje się
- **Error:** Komunikat "Nie udało się załadować danych"

### 3. Progressive Disclosure
- Karta → krótki podgląd (nazwa, łacińska, kategoria)
- Klik → pełne szczegóły w modalu
- Modal warstwy → opis + ciekawostki + przedstawiciele

### 4. Dostępność
- **Kontrast:** Kremowy tekst na ciemnym tle (#f0ead6 na #0d260d)
- **Fokus:** Visible outline na interaktywnych elementach
- **Keyboard:** Enter/Space otwiera, Escape zamyka
- **ARIA:** role, aria-label, aria-hidden, aria-live

### 5. Responsywność
- **Desktop (1024px+):** 4 kolumny w gridach
- **Tablet (768-1023px):** 2 kolumny
- **Mobile (<768px):** 1 kolumna, hamburger menu, wyłączony parallax/particles
