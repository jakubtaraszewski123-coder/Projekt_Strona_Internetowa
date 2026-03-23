# WF_Resource_Analysis dla Ścieżka Natury

## Preflight (Wejściowe Założenia)

- **1-liner produktu:** Edukacyjna strona parallax scrolling o 7 warstwach ekosystemu leśnego z mini-quizem.
- **Stage:** Idea → MVP
- **Horyzont planowania:** 30 dni (Tier 1 MVP), 60 dni (Tier 1 + 2)
- **Główny cel audytu:** Oszacować minimalny czas i zasoby do ukończenia MVP, zidentyfikować punkty ryzyka, potwierdzić wykonalność dla Solo-Dev (początkujący, 5-10h/tydzień).
- **Dostępne zasoby:** 1 developer (początkujący), 0 zł budżetu, VS Code + przeglądarka.

---

## 1. Audyt Czasu (Time Audit)

### Estymacja osobo-godzin per kategoria

| Kategoria | MVP (Tier 1) | Optymalne (Tier 1+2) | Pełne (Tier 1+2+3) | Uwagi |
|---|---|---|---|---|
| **Core development (HTML/CSS)** | 18h | 30h | 42h | Sekcje, styling, layout |
| **JavaScript (interakcja)** | 10h | 16h | 26h | Parallax, Observer, quiz, navbar |
| **Content creation** | 4h | 8h | 12h | Treści edukacyjne, research, copywriting |
| **Design & UX** | 2h | 4h | 6h | Dobór kolorów, zdjęć, layout decyzje |
| **QA & testing** | 3h | 5h | 8h | Cross-browser, mobile, accessibility |
| **Assets (zdjęcia, ikony)** | 2h | 4h | 6h | Pobranie, kompresja, optymalizacja |
| **DevOps / Deploy** | 1h | 1h | 2h | GitHub Pages setup |
| **Dokumentacja** | 0h | 1h | 2h | README na GitHub |
| **Bufor ryzyka (25%)** | 10h | 17h | 26h | Nieprzewidziane problemy |
| | | | | |
| **TOTAL** | **~50h** | **~86h** | **~130h** | |

### Harmonogram przy 10h/tydzień

| Faza | Godziny | Tygodnie | Data ukończenia (start: teraz) |
|---|---|---|---|
| Tier 1 (MVP) | ~50h | 5 tygodni | ~21 kwiecień 2026 |
| Tier 2 (rozszerzenie) | ~36h | 3.5 tygodnia | ~19 maj 2026 |
| Tier 3 (nice-to-have) | ~44h | 4.5 tygodnia | ~16 czerwiec 2026 |

### Harmonogram przy 5h/tydzień (minimalny)

| Faza | Godziny | Tygodnie | Data ukończenia |
|---|---|---|---|
| Tier 1 (MVP) | ~50h | 10 tygodni | ~26 maj 2026 |
| Tier 2 (rozszerzenie) | ~36h | 7 tygodni | ~13 lipiec 2026 |

---

## 2. Audyt Budżetu (Budget Audit)

### Koszty jednorazowe

| Pozycja | Koszt | Alternatywa |
|---|---|---|
| Domena (opcjonalna) | 30-50 zł/rok | GitHub Pages subdomena (darmowa) |
| Licencja zdjęć | 0 zł | Unsplash/Pexels/Pixabay (darmowe, CC0) |
| Narzędzia development | 0 zł | VS Code (free), Chrome DevTools (free) |
| Fonty | 0 zł | Google Fonts (free) |
| Ikony | 0 zł | Heroicons, Lucide (free, MIT) |
| **TOTAL jednorazowe** | **0 zł** (lub 30-50 zł z domeną) | |

### Koszty miesięczne (stałe)

| Pozycja | Koszt | Uwagi |
|---|---|---|
| Hosting (GitHub Pages) | 0 zł | Darmowy dla publicznych repozytoriów |
| CDN (Cloudflare) | 0 zł | Opcjonalny, darmowy plan |
| Google Fonts CDN | 0 zł | Darmowy |
| Analytics (Plausible / GA) | 0 zł | Google Analytics free; Plausible self-hosted free |
| SSL | 0 zł | GitHub Pages ma wbudowany HTTPS |
| **TOTAL miesięczne** | **0 zł** | |

### Koszty pracy

| Pozycja | Koszt |
|---|---|
| Developer (Solo-Dev, własna praca) | 0 zł (projekt osobisty) |
| Designer (brak — DIY) | 0 zł |
| Copywriter (brak — DIY) | 0 zł |
| **TOTAL praca** | **0 zł** |

### Podsumowanie budżetowe

| Okres | Min. budżet | Z domeną |
|---|---|---|
| **MVP (3 miesiące)** | **0 zł** | **30-50 zł** |
| **Rozszerzony (6 miesięcy)** | **0 zł** | **30-50 zł** |
| **Roczny** | **0 zł** | **30-50 zł** |

**Komentarz:** To jest jeden z największych plusów tego projektu. Zero kosztów operacyjnych. Jedyny "koszt" to czas developera.

---

## 3. Integracje Zewnętrzne (External Integrations)

### Lista integracji

| Integracja | Krytyczność | Czas impl. | Koszt | Ryzyko |
|---|---|---|---|---|
| **Google Fonts CDN** | Krytyczna | 0.5h | 0 zł | Niskie — `<link>` w HTML |
| **Unsplash/Pexels (zdjęcia)** | Krytyczna | 2h (pobranie + kompresja) | 0 zł | Niskie — static assets |
| **GitHub Pages (hosting)** | Krytyczna | 1h | 0 zł | Niskie — prosty setup |
| **Google Analytics (opcja)** | Opcjonalna | 1h | 0 zł | Niskie — `<script>` tag |
| **Freesound.org (ambient - Tier 2)** | Nice-to-have | 1h (pobranie) | 0 zł | Niskie — static audio files |
| **Squoosh/TinyPNG (kompresja)** | Narzędzie dev | 0h (online tool) | 0 zł | Brak |

### Uwagi o integracjach

- **Brak backendu** = brak integracji serwerowych (Stripe, auth, email, DB)
- **Brak API calls** = brak problemów z rate limits, CORS, auth tokens
- **Wszystko statyczne** = najprostszy możliwy model deploymentu
- **Jedyne zewnętrzne zależności:** Google Fonts (CDN latency), zdjęcia (rozmiar plików)

**Ryzyko integracyjne: MINIMALNE** — to najniższe możliwe ryzyko integracyjne dla projektu webowego.

---

## 4. Macierz Priorytetów (Funkcja → Wartość × Trudność)

| Funkcja / Element | Wartość biznesowa (1-5) | Trudność techniczna (1-5) | Priorytet (W/T) | Tier |
|---|---|---|---|---|
| Hero sekcja z parallax CSS | 5 | 2 | **2.50** ⬆️ | Tier 1 |
| Mini-quiz 5 pytań | 5 | 2 | **2.50** ⬆️ | Tier 1 |
| Scroll animations (Intersection Observer) | 4 | 2 | **2.00** ⬆️ | Tier 1 |
| Sekcja Runo leśne (karty roślin) | 4 | 2 | **2.00** ⬆️ | Tier 1 |
| Sticky navbar + smooth scroll | 4 | 2 | **2.00** ⬆️ | Tier 1 |
| Responsywność (mobile) | 5 | 3 | **1.67** | Tier 1 |
| Sekcja Gleba | 3 | 1 | **3.00** ⬆️ | Tier 1 |
| Sekcja Korona drzew | 3 | 2 | **1.50** | Tier 1 |
| Hamburger menu | 3 | 2 | **1.50** | Tier 1 |
| Sekcja Ściółka | 2 | 1 | **2.00** | Tier 2 |
| Sekcja Podszyt | 2 | 1 | **2.00** | Tier 2 |
| Sekcja Niebo + counters | 3 | 3 | **1.00** | Tier 2 |
| Ambient sound | 3 | 2 | **1.50** | Tier 2 |
| Sekcja Pnie (uproszczona) | 2 | 2 | **1.00** | Tier 2 |
| Rozszerzony quiz (15 pytań) | 2 | 1 | **2.00** | Tier 2 |
| Parallax JS multi-layer | 2 | 4 | **0.50** | Tier 3 |
| Infografika SVG pnia | 2 | 5 | **0.40** | Tier 3 |
| PWA / offline | 1 | 5 | **0.20** | Tier 3 |
| Dark mode | 1 | 2 | **0.50** | Tier 3 |

**Legenda:** Priorytet = Wartość / Trudność. Im wyższy → tym wcześniej wdrożyć. Wartość > 1.5 → Tier 1.

---

## 5. Estymacje i Alokacja Zasobów

### Minimalny zespół do uruchomienia MVP

| Rola | Alokacja | Kto |
|---|---|---|
| Frontend Developer | 100% | Ty (Solo-Dev) |
| Designer | 0% (DIY) | Ty — decyzje designu na bieżąco |
| Content Writer | 0% (DIY) | Ty — treści z Wikipedii + Lasy Państwowe |
| DevOps | 0% (DIY) | Ty — GitHub Pages = 3 kliknięcia |
| QA Tester | 0% (DIY) | Ty + przeglądarka + telefon |

### Breakdown Tier 1 MVP — szczegółowy plan zadań

| # | Zadanie | Godziny | Tydzień | Zależności |
|---|---------|---------|---------|------------|
| 1 | Setup projektu (foldery, pliki, Git init) | 1h | T1 | — |
| 2 | CSS reset + variables + Google Fonts | 2h | T1 | #1 |
| 3 | HTML szkielet (nav, header, 4 sections, footer) | 2h | T1 | #1 |
| 4 | Hero sekcja — styling + parallax CSS | 3h | T1 | #2, #3 |
| 5 | Pobranie + kompresja zdjęć (hero + 4 sekcje) | 2h | T1 | — |
| 6 | Sekcja Gleba — treść + styling | 3h | T2 | #2, #5 |
| 7 | Sekcja Runo leśne — karty roślin + grid | 4h | T2 | #2, #5 |
| 8 | Sekcja Korona drzew — treść + styling | 3h | T2 | #2, #5 |
| 9 | Sticky navbar — HTML/CSS + JS scroll detection | 3h | T3 | #3 |
| 10 | Smooth scrolling + anchor links | 1h | T3 | #9 |
| 11 | Hamburger menu (mobile) | 2h | T3 | #9 |
| 12 | Scroll animations — Intersection Observer | 3h | T3 | #6, #7, #8 |
| 13 | Animacje CSS (fade-in, slide-in) | 2h | T3 | #12 |
| 14 | Mini-quiz (5 pytań + wynik) | 4h | T4 | #3 |
| 15 | Responsywność (media queries, mobile test) | 3h | T4 | #4-#14 |
| 16 | Footer — treść + styling | 1h | T4 | #2 |
| 17 | QA — cross-browser, mobile, parallax test | 3h | T5 | #4-#16 |
| 18 | Deploy na GitHub Pages | 1h | T5 | #17 |
| 19 | README.md na GitHub | 1h | T5 | #18 |
| 20 | Bufor na poprawki | 7h | T5 | — |
| | **TOTAL** | **~50h** | **5 tyg.** | |

---

## 6. Ryzyka i Mitigacje

| # | Ryzyko | Wpływ | Prawdopodobieństwo | Plan Mitigacji |
|---|--------|-------|---------------------|----------------|
| R1 | **Parallax nie działa na iOS Safari** | Wysoki (psuje core doświadczenie) | Wysokie (znany bug) | Fallback: `background-attachment: scroll` + scroll animations bez parallax na mobile. Detect z `@media` lub JS `navigator.userAgent`. |
| R2 | **Początkujący developer utyka na Intersection Observer** | Średni (opóźnienie) | Średnie | Alternatywa: prosty `window.scroll` event listener. Lub gotowy snippet z MDN/CodePen. |
| R3 | **Zdjęcia zbyt duże — wolne ładowanie** | Średni (UX) | Średnie | Kompresja przez Squoosh do < 150KB. Format WebP. `loading="lazy"`. Maks 1920px szerokość. |
| R4 | **Treści edukacyjne powierzchowne / błędne** | Niski (wiarygodność) | Niskie | Cross-check z Lasy Państwowe + Wikipedia. Dodać disclaimer "materiał edukacyjny, nie naukowy". |
| R5 | **Brak motywacji — projekt porzucony** | Wysoki (projekt umiera) | Średnie | Podzielić na małe milestone'y. Pokazywać postępy znajomym. Publikować WIP na LinkedIn/X. |
| R6 | **CSS layout buggy na starszych przeglądarkach** | Niski | Niskie | Używać CSS Grid/Flexbox z fallbackami. Target: Chrome 90+, Firefox 90+, Safari 15+. |
| R7 | **Hamburger menu nie działa poprawnie** | Średni | Niskie | Gotowe rozwiązania CSS-only hamburger (pure CSS checkbox trick). Lub prosty `classList.toggle` snippet. |

### Backup plan dla krytycznych ryzyk

| Ryzyko | Backup |
|---|---|
| R1 (parallax iOS) | Rezygnacja z parallax → tylko scroll animations. Strona dalej wygląda dobrze. |
| R5 (porzucenie) | Zmniejszyć scope do 2 sekcji + quiz. Deploy nawet nieukończony projekt jako "WIP portfolio". |

---

## 7. Plan Finansowy Krótkoterminowy

### Burn Rate

| Okres | Koszt miesięczny | Koszt kumulowany |
|---|---|---|
| Miesiąc 1 | 0 zł | 0 zł |
| Miesiąc 2 | 0 zł | 0 zł |
| Miesiąc 3 | 0 zł | 0 zł |
| Miesiąc 6 | 0 zł | 0 zł |
| Miesiąc 12 | 0 zł | 0 zł |

**Runway: NIESKOŃCZONY** (przy zerowych kosztach)

### Break-even target

**Nie dotyczy** — projekt nie jest monetyzowany. "Zysk" jest niemierzalny finansowo:
- Wartość portfolio (potencjalnie: zaproszenie na rozmowę rekrutacyjną)
- Nauka programowania (umiejętności → przyszłe zarobki)
- Satysfakcja z ukończonego projektu

### Potencjalna monetyzacja (gdyby kiedyś)

| Model | Potencjał | Wysiłek |
|---|---|---|
| Reklamy (Google AdSense) | ~5-20 zł/miesiąc (przy niskim ruchu) | Niski (wklejenie kodu) |
| Sponsoring (firmy ekologiczne) | ~100-500 zł jednorazowo | Średni (outreach) |
| Donate button (BuyCoffee) | ~0-50 zł/miesiąc | Niski |
| Sprzedaż kursu "Jak zrobiłem tę stronę" | ~200-1000 zł | Wysoki |

---

## 8. Checklista Wdrożeniowa (MVP-Ready)

### Przed deploy:
- [ ] Wszystkie 4 sekcje Tier 1 ostylowane i działające
- [ ] Mini-quiz z 5 pytaniami i ekranem wyniku
- [ ] Parallax CSS działa na desktop (fallback na mobile)
- [ ] Scroll animations działają (Intersection Observer)
- [ ] Sticky navbar z smooth scrolling
- [ ] Hamburger menu na mobile
- [ ] Responsywność przetestowana na 3 rozdzielczościach (mobile, tablet, desktop)
- [ ] Zdjęcia zoptymalizowane (WebP, lazy loading)
- [ ] Alt texty na wszystkich obrazach
- [ ] Brak consolowych errorów w DevTools
- [ ] GitHub repo utworzony z README.md
- [ ] GitHub Pages aktywowany

### Po deploy (pierwsze 2 tygodnie):
- [ ] Wrzuć link na LinkedIn z opisem projektu
- [ ] Wrzuć na r/webdev / r/frontend
- [ ] Pokaż 3-5 znajomym — zbierz feedback
- [ ] Sprawdź Google Search Console — czy strona jest zindeksowana
- [ ] Sprawdź Lighthouse score (target: > 90)

---

## 9. Output / Deliverables — Podsumowanie

| Deliverable | Status |
|---|---|
| Estymacja osobo-godzin (MVP: ~50h) | ✅ |
| Budżet (0 zł) | ✅ |
| Lista integracji z krytycznością | ✅ |
| Macierz priorytetów (18 elementów) | ✅ |
| Szczegółowy plan zadań (20 tasków, 5 tygodni) | ✅ |
| Ryzyka i mitigacje (7 ryzyk) | ✅ |
| Plan finansowy (runway: nieskończony) | ✅ |
| Checklista wdrożeniowa | ✅ |

---

## Rekomendacja końcowa

Projekt **Ścieżka Natury** jest **w pełni wykonalny** dla Solo-Dev na poziomie początkującym:

- **Czas:** ~50h (MVP) = 5 tygodni przy 10h/tydzień
- **Budżet:** 0 zł
- **Ryzyko techniczne:** Umiarkowane (główne: parallax na iOS → łatwy fallback)
- **Ryzyko porzucenia:** Średnie (mitygacja: małe milestone'y + publiczne WIP)

**Kluczowy insight z Resource Analysis:** Jedynym „zasobem", który posiada developer, jest **czas**. Przy 0 zł kosztach, jedynym pytaniem jest: „Czy zainwestuję 50 godzin w ten projekt vs. alternatywy (todo app, kurs, freelance)?" Odpowiedź powinna opierać się na priorytetyzacji z WF_ICP_Persona — jeśli celem jest **portfolio**, Ścieżka Natury + Quiz jest solidnym wyborem.
