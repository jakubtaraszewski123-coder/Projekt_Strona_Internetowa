# WF_ICP_Persona dla Ścieżka Natury

## Wejścia

- **1-liner produktu:** Edukacyjna strona parallax scrolling o 7 warstwach ekosystemu leśnego z mini-quizem przyrodniczym.
- **Etap:** Idea (przed kodowaniem)
- **Wstępne hipotezy o kliencie:** Miłośnicy natury, uczniowie/studenci, nauczyciele przyrody, turyści leśni.
- **Wyniki poprzednich workflow:** WF_Kill_The_Idea → PIVOT (dodać interaktywność); WF_ICE_Ranking → 18.0 Low (z quizem ~35-40 Medium).

---

## Uwaga metodologiczna

Projekt "Ścieżka Natury" **nie jest klasycznym SaaS**. Jest to bezpłatna strona edukacyjna/portfolio. W kontekście ICP mamy **dwóch "klientów":**

1. **Użytkownik strony** — osoba odwiedzająca stronę (end-user)
2. **Rekruter / klient portfolio** — osoba oceniająca umiejętności developera

Analiza poniżej obejmuje oba profile.

---

## ICP Card #1: Użytkownik Edukacyjny

### Kto:
**Uczeń lub student (14-25 lat)** zainteresowany przyrodą, szukający materiałów do nauki lub prezentacji szkolnej. Mieszka w Polsce, korzysta z internetu jako głównego źródła informacji, preferuje wizualne formy nauki nad podręczniki.

### Co (główny job):
Szybko znaleźć atrakcyjne, wiarygodne informacje o ekosystemie leśnym — do prezentacji, referatu, lub z czystej ciekawości po wycieczce do lasu.

### Ból:
- Wikipedia jest sucha i nieatrakcyjna wizualnie
- YouTube wymaga 15-20 minut na obejrzenie filmu
- Podręczniki szkolne są przestarzałe i nudne
- Brak interaktywnych materiałów po polsku o lesie

### Decision Criteria (co sprawi, że zostanie):
- Strona ładuje się szybko na telefonie
- Treści są po polsku, krótkie i z ciekawostkami
- Wizualnie atrakcyjna (zdjęcia, animacje)
- Quiz na końcu pozwala "sprawdzić się" i pochwalić wynikiem

### Persona Bullets:
- **Imię:** Kasia, 17 lat, uczennica liceum
- **Kontekst:** Szuka materiałów na prezentację z biologii o warstwach lasu
- **Trigger:** Google search "warstwy lasu" / "ekosystem leśny prezentacja"
- **Current solution:** Wikipedia + zdjęcia z Google Images + YouTube
- **Frustracja:** Musi sklejać info z 5 źródeł, grafiki są nieatrakcyjne
- **Desired outcome:** Jedna strona, która ma wszystko — ładne zdjęcia, krótkie opisy, schemat warstw
- **KPI sukcesu:** Znalazła informacje w < 5 minut, nauczyła się czegoś nowego, podzieliła się linkiem z koleżanką

---

## ICP Card #2: Nauczyciel / Edukator

### Kto:
**Nauczyciel biologii lub przyrody (30-55 lat)** w polskiej szkole podstawowej lub liceum. Szuka nowoczesnych materiałów dydaktycznych, które zainteresują uczniów. Ograniczony budżet na narzędzia — preferuje darmowe zasoby.

### Co (główny job):
Znaleźć gotowy materiał wizualny do pokazania na lekcji (projektor / tablica interaktywna) lub do zadania domowego dla uczniów.

### Ból:
- Podręczniki mają statyczne, brzydkie diagramy z lat 90-tych
- Brak polskojęzycznych, interaktywnych materiałów o ekosystemie lasu
- YouTube jest rozpraszający (reklamy, sugestie, komentarze)
- Uczniowie nudzą się przy tradycyjnych materiałach

### Decision Criteria:
- Materiał jest po polsku i merytorycznie poprawny
- Można pokazać na projektorze (działa w przeglądarce)
- Quiz pozwala sprawdzić wiedzę uczniów
- Strona jest darmowa i nie wymaga rejestracji

### Persona Bullets:
- **Imię:** Pani Dorota, 42 lata, nauczycielka biologii
- **Kontekst:** Przygotowuje lekcję o ekosystemie leśnym dla klasy 6
- **Trigger:** Google search "ekosystem leśny materiały dydaktyczne" / polecenie od innego nauczyciela
- **Current solution:** Prezentacja PowerPoint z clipartami + film z YouTube
- **Frustracja:** PowerPoint jest nudny, film trwa za długo
- **Desired outcome:** Interaktywna strona, którą może wyświetlić na projektorze i scrollować z uczniami
- **KPI sukcesu:** Uczniowie byli zainteresowani, quiz na końcu sprawdził wiedzę, łatwo dodać link do Teams/e-dziennika

---

## ICP Card #3: Rekruter / Klient Portfolio

### Kto:
**Rekruter techniczny lub lead developer (25-40 lat)** w polskiej firmie IT lub software house. Przegląda portfolio kandydatów na stanowisko Junior Frontend Developer. Ocenia: jakość kodu, design, responsywność, umiejętność pracy z CSS/JS.

### Co (główny job):
Szybko ocenić umiejętności techniczne kandydata na podstawie live demo i kodu źródłowego na GitHub.

### Ból:
- 90% portfolio juniorów to identyczne "todo apps" lub "kalkulator BMI"
- Brak kreatywnych projektów pokazujących CSS skills
- Trudno ocenić jakość kodu z samego screenshota

### Decision Criteria:
- Strona działa na mobile (responsive)
- Kod jest czytelny, dobrze zorganizowany (semantic HTML, CSS variables, modularny JS)
- Projekt wyróżnia się kreatywnie
- Brak bugów wizualnych

### Persona Bullets:
- **Imię:** Michał, 33 lata, Tech Lead w software house
- **Kontekst:** Przegląda 20 CV na stanowisko Junior FE Developer, otwiera linki do portfolio
- **Trigger:** Link w CV / LinkedIn profilu kandydata
- **Current solution:** Sprawdza kolejne portfolio → większość to generyczne szablony
- **Frustracja:** Każdy ma to samo: todo app, weather app, landing page z template
- **Desired outcome:** Portfolio, które go zaskoczy — "O, ktoś zrobił coś ciekawego"
- **KPI sukcesu:** Spędził > 30 sekund na stronie (nie zamknął po 5s), zanotował kandydata na shortlist

---

## Problem Matrix

| # | Problem | Trigger | Value | Current Solution | Impact | Confidence | Ease | Priority (I×C×E) | Suggested Experiment |
|---|---------|---------|-------|------------------|--------|------------|------|-------------------|---------------------|
| 1 | Brak atrakcyjnych wizualnie materiałów o lesie po polsku | Szukanie info na prezentację/lekcję | Oszczędność 30-60 min zbierania materiałów z różnych źródeł | Wikipedia + Google Images + YouTube | 6 | 5 | 8 | **240** | Landing page z opisem "Interaktywna mapa warstw lasu" — test CTR z Google Ads (budżet 50 zł) |
| 2 | Uczniowie nudzą się przy tradycyjnych materiałach | Lekcja biologii o ekosystemie | Zwiększenie zaangażowania na lekcji | PowerPoint + film | 5 | 4 | 7 | **140** | Zapytanie 5 nauczycieli: "Czy użylibyście takiej strony na lekcji?" (outreach na FB grupy nauczycieli) |
| 3 | Portfolio juniorów jest generyczne | Przeglądanie CV kandydatów | Wyróżnienie się = zaproszenie na rozmowę | Todo app, calculator, clone websites | 7 | 7 | 7 | **343** | Wrzucenie prototypu na r/webdev, r/frontend — jak reagują deweloperzy? |
| 4 | Brak interaktywnych quizów przyrodniczych po polsku | Chęć sprawdzenia wiedzy po wycieczce/lekcji | Gamifikacja nauki, motywacja | Testy w podręcznikach, Kahoot (wymaga konta) | 5 | 5 | 9 | **225** | Prototyp quizu 5 pytań — share na FB grupach miłośników lasu |
| 5 | Brak mobilnych materiałów o lesie do użycia na wycieczce | Wycieczka szkolna / spacer po lesie | Identyfikacja roślin i zrozumienie ekosystemu w terenie | Brak (telefon + Google) | 4 | 3 | 4 | **48** | Ankieta: "Czy korzystasz z telefonu podczas spaceru po lesie do identyfikacji roślin?" |

---

## Priorytetyzacja Problemów

| Rank | Problem | Priority Score | Rekomendacja |
|------|---------|---------------|--------------|
| 🥇 | **#3: Generyczne portfolio juniorów** | **343** | TO JEST CORE USE CASE. Strona powinna być optymalizowana jako element portfolio. |
| 🥈 | **#1: Brak atrakcyjnych materiałów o lesie PL** | **240** | Silny second use case. SEO na frazy edukacyjne może generować ruch organiczny. |
| 🥉 | **#4: Brak interaktywnych quizów PL** | **225** | Quiz jest kluczowy — potwierdzony przez WF_Kill_The_Idea jako wymagany pivot. |
| 4 | **#2: Nudne materiały szkolne** | **140** | Niższa pewność — wymaga walidacji z nauczycielami. |
| 5 | **#5: Materiały mobilne na wycieczce** | **48** | Low priority — wymaga PWA/offline, zbyt skomplikowane na start. |

---

## Core Problem Statement

> **Początkujący frontend developer potrzebuje kreatywnego projektu portfolio, który wyróżni się na tle generycznych todo apps i calculatorów, jednocześnie demonstrując umiejętności CSS (animations, parallax, responsive), JavaScript (DOM manipulation, Intersection Observer) i pracy z danymi.**

**Ścieżka Natury z quizem** adresuje ten problem, oferując jednocześnie **wartość edukacyjną** jako secondary use case (uczniowie, nauczyciele szukający materiałów o lesie).

---

## Sugerowane Eksperymenty Walidacyjne

### Eksperyment 1: Test odbioru na r/webdev
**Cel:** Czy deweloperzy ocenią stronę jako "wyróżniające się portfolio"?
- Wrzuć prototyp (choćby 2 sekcje + quiz) na r/webdev
- Mierz: upvotes, komentarze, ton feedbacku
- Koszt: 0 zł
- Czas: po zbudowaniu Tier 1 MVP

### Eksperyment 2: Feedback od 3 nauczycieli
**Cel:** Czy nauczyciele użyliby tej strony na lekcji?
- Outreach na FB grupach nauczycieli biologii ("Nauczyciele biologii — grupa wsparcia")
- Pokaż screenshot / prototyp, zapytaj: "Czy użyłabyś tego na lekcji?"
- Koszt: 0 zł
- Czas: 1 tydzień na zebranie odpowiedzi

### Eksperyment 3: SEO test
**Cel:** Czy frazy edukacyjne generują ruch?
- Po publikacji — monitoruj Google Search Console
- Target: czy strona pojawia się na frazy "warstwy lasu", "runo leśne", "ekosystem leśny"
- Koszt: 0 zł
- Czas: 2-4 tygodnie po indeksacji

---

## Integracja z innymi workflowami

- ✅ `WF_Kill_The_Idea` — wykonane → PIVOT do quiz
- ✅ `WF_ICE_Ranking` — wykonane → Quiz Leśny ICE 50.4, Ścieżka ICE 18.0
- ✅ `WF_MVP_Scoping` — wykonane → Tier 1 = 4 sekcje + quiz (~36h)
- ✅ `WF_ICP_Persona` — ten dokument
- → **Następny krok:** `WF_GTM_Strategy` (jak dotrzeć do użytkowników) lub bezpośrednio implementacja

---

## Checklista końcowa

- [x] 3 karty ICP (uczeń, nauczyciel, rekruter)
- [x] Problem Matrix z priorytetami (5 problemów)
- [x] Priorytetyzacja → Core Problem = portfolio, Secondary = edukacja
- [x] 3 propozycje eksperymentów walidacyjnych
- [x] Zapisany next step → WF_Resource_Analysis lub implementacja Tier 1
