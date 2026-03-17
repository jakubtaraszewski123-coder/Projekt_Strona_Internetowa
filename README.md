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

## Następny krok
→ Przejść do implementacji Tier 1 (tryb Code) lub przeprowadzić dodatkowe workflow (WF_Competitor_Audit, WF_GTM_Strategy).
