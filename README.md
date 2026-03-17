# 🌲 Ścieżka Natury — Projekt SaaS/Web

## Właściciel
**Jakub** — początkujący developer, vanilla HTML/CSS/JS

## Opis
Edukacyjna, jednostronicowa strona z efektem parallax scrolling, opowiadająca historię ekosystemu leśnego — od gleby po niebo, warstwa po warstwie. 7 warstw lasu z treściami edukacyjnymi, animacjami scroll-triggered i mini-quizem.

## Status
📋 **Faza:** Planowanie (po workflow analysis)

## Spis Dokumentów

| Dokument | Opis | Status |
|---|---|---|
| [pomysly-natura.md](pomysly-natura.md) | Wygenerowane 4 pomysły na stronę o naturze | ✅ Done |
| [ice-ranking.md](ice-ranking.md) | WF_ICE_Ranking — priorytetyzacja 4 pomysłów | ✅ Done |
| [kill-the-idea.md](kill-the-idea.md) | WF_Kill_The_Idea — audyt ryzyka Ścieżki Natury | ✅ Done |
| [mvp-scoping.md](mvp-scoping.md) | WF_MVP_Scoping — zakres MVP z tierami | ✅ Done |
| [icp-persona.md](icp-persona.md) | WF_ICP_Persona — 3 profile klientów + Problem Matrix | ✅ Done |
| [resource-analysis.md](resource-analysis.md) | WF_Resource_Analysis — audyt czasu, budżetu, ryzyk | ✅ Done |
| [docs.md](docs.md) | Pełna dokumentacja techniczna projektu | ✅ Done |
| [implementation-plan.md](implementation-plan.md) | Skrócony plan implementacji z diagramami | ✅ Done |

## Kluczowe Wnioski z Workflow

### WF_ICE_Ranking
- **Quiz Leśny** wygrał ranking (ICE 50.4)
- **Ścieżka Natury** zajęła ostatnie miejsce (ICE 18.0 — Low)
- Rekomendacja: **hybryda Ścieżka + Quiz**

### WF_Kill_The_Idea
- Werdykt: **PIVOT** — dodać element interaktywny
- Główne ryzyka: brak monetyzacji, zero moat, parallax fatigue
- Sugerowane pivoty: Quiz, Ambient Sound, Interactive Storytelling

### WF_MVP_Scoping
- **Tier 1 (MVP):** 4 sekcje + parallax CSS + scroll animations + mini-quiz = ~36h
- **Tier 2:** Brakujące sekcje + ambient sound + rozszerzony quiz = ~25h
- **Tier 3:** Parallax JS, PWA, infografika SVG = nice-to-have
- Koszt: **0 zł**

### WF_ICP_Persona
- **3 profile ICP:** Uczeń (Kasia, 17l), Nauczyciel (Dorota, 42l), Rekruter (Michał, 33l)
- **Core Problem:** Portfolio juniorów jest generyczne → Ścieżka Natury wyróżnia się
- **Problem Matrix:** 5 problemów, priorytet #1 = wyróżniające portfolio (score 343)
- **Eksperymenty:** Test na r/webdev, feedback nauczycieli, SEO monitoring

### WF_Resource_Analysis
- **Czas MVP:** ~50h = 5 tygodni przy 10h/tydzień
- **Budżet:** 0 zł (hosting, zdjęcia, fonty — wszystko darmowe)
- **Runway:** Nieskończony (zero kosztów operacyjnych)
- **Ryzyka:** 7 zidentyfikowanych, najważniejsze: parallax iOS (łatwy fallback)
- **Macierz priorytetów:** 18 elementów z wartością biznesową vs trudnością

## Wykonane Workflow

| # | Workflow | Plik |
|---|---------|------|
| 1 | WF_ICE_Ranking | [ice-ranking.md](ice-ranking.md) |
| 2 | WF_Kill_The_Idea | [kill-the-idea.md](kill-the-idea.md) |
| 3 | WF_MVP_Scoping | [mvp-scoping.md](mvp-scoping.md) |
| 4 | WF_ICP_Persona | [icp-persona.md](icp-persona.md) |
| 5 | WF_Resource_Analysis | [resource-analysis.md](resource-analysis.md) |

## Następny krok
→ Przejść do implementacji Tier 1 (tryb Code) lub przeprowadzić dodatkowe workflow (WF_Competitor_Audit, WF_GTM_Strategy).
