# Dokumentacja — Leśny Herbarium

Dokumentacja projektu zgodna ze standardem **Spec Driven Development (SDD)**.

## Struktura Dokumentacji

```
docs/
├── README.md                        ← Ten plik
├── architecture/
│   ├── system_overview.md           ← Opis systemu i diagramy
│   ├── adr_001_vanilla-js.md        ← Decyzja: Vanilla JS zamiast frameworka
│   └── adr_002_ecosystem-map.md     ← Decyzja: Interaktywna mapa warstw
├── business/
│   ├── product-goals.md             ← Cele produktu i grupa docelowa
│   ├── user-stories.md              ← User stories dla 3 ICP
│   └── use-cases.md                 ← Przypadki użycia (8 scenariuszy)
├── tech/
│   └── stack.md                     ← Stos technologiczny i konwencje
├── plans/
│   ├── PLAN_interactive_plant_catalog.md   ← Plan: Katalog roślin
│   ├── PLAN_search_and_filter.md           ← Plan: Wyszukiwarka i filtry
│   ├── PLAN_ecosystem_map.md               ← Plan: Mapa ekosystemu
│   └── PLAN_scroll_progress.md             ← Plan: Pasek postępu
└── roles/
    ├── product_owner/
    │   ├── vision.md                ← Wizja produktu i backlog
    │   └── priorities.md            ← Priorytetyzacja MoSCoW
    ├── ux_ui/
    │   ├── wireframes.md            ← Makiety i przepływy użytkownika
    │   └── ux-principles.md         ← Zasady projektowania UX
    ├── architect/
    │   ├── decisions.md             ← Decyzje techniczne
    │   └── system-model.md          ← Model systemu i diagramy
    ├── developer/
    │   └── coding-standards.md      ← Standardy kodu i workflow
    └── tester/
        ├── test-strategy.md         ← Strategia testów
        └── test-scenarios.md        ← Scenariusze i edge cases
```

## Rejestry Projektu

- [Rejestr planów](../implemented_plans.md) — Status wszystkich planów
- [Zaimplementowane funkcje](../implemented_features.md) — Opis ukończonych funkcjonalności

## Jak Korzystać z Dokumentacji

### Dla Developera
1. Zacznij od [`tech/stack.md`](tech/stack.md) — poznaj stos technologiczny
2. Sprawdź [`roles/developer/coding-standards.md`](roles/developer/coding-standards.md) — standardy kodu
3. Otwórz plan z [`plans/`](plans/) — implementuj krok po kroku
4. Zaktualizuj [`../implemented_plans.md`](../implemented_plans.md) po ukończeniu

### Dla Testera
1. Przeczytaj [`roles/tester/test-strategy.md`](roles/tester/test-strategy.md) — strategia testów
2. Wykonaj scenariusze z [`roles/tester/test-scenarios.md`](roles/tester/test-scenarios.md)
3. Sprawdź edge cases

### Dla Architekta
1. [`architecture/system_overview.md`](architecture/system_overview.md) — ogólny opis systemu
2. [`architecture/adr_*.md`](architecture/) — Architecture Decision Records
3. [`roles/architect/system-model.md`](roles/architect/system-model.md) — model systemu

### Dla Product Ownera
1. [`business/product-goals.md`](business/product-goals.md) — cele produktu
2. [`business/user-stories.md`](business/user-stories.md) — user stories
3. [`roles/product_owner/vision.md`](roles/product_owner/vision.md) — wizja i backlog

## Workflow SDD

```
1. Product Owner definiuje wymaganie (business/)
2. Architekt tworzy plan (plans/PLAN_*.md)
3. Plan zatwierdzony (review)
4. Developer implementuje (zgodnie z planem)
5. Tester testuje (roles/tester/)
6. Dokumentacja aktualizowana (implemented_plans.md, implemented_features.md)
```

## Zasady

- **Nie implementujemy bez planu** — każdy PLAN_*.md to kontrakt
- **Jedna funkcjonalność = jeden plan** — granularne plany
- **Repozytorium samodokumentujące się** — stan w implemented_*.md
- **AI egzekwuje plan** — nie rozszerza zakresu
