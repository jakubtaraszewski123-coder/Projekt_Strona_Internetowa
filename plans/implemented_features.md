# Zaimplementowane Funkcjonalności — Leśny Herbarium

## Katalog Roślin
- status: DONE
- plan: PLAN_interactive_plant_catalog.md
- opis: Interaktywny katalog 15 gatunków roślin/grzybów z dynamicznym renderowaniem kart z data/plants.json
- funkcje: renderPlants(), loadPlantsData()

## Wyszukiwarka i Filtry
- status: DONE
- plan: PLAN_search_and_filter.md
- opis: Filtrowanie po 6 kategoriach + wyszukiwarka tekstowa (nazwa polska i łacińska) z debounce 200ms
- funkcje: filterByCategory(), filterBySearch(), applyFilters()

## Ecosystem Map
- status: DONE
- plan: PLAN_ecosystem_map.md
- opis: 7 interaktywnych warstw lasu (niebo → gleba) z modalami zawierającymi opisy, ciekawostki i przedstawicieli
- funkcje: initEcosystemMap(), openEcoLayerModal(), closeEcoLayerModal()

## Scroll Progress
- status: DONE
- plan: PLAN_scroll_progress.md
- opis: Pasek postępu scrolla na górze strony + przycisk "Wróć na górę" pojawiający się po 50% scrolla
- funkcje: initScrollProgress(), initScrollToTop()

## Discover (Ciekawostki)
- status: DONE
- plan: (część website-plan.md)
- opis: Sekcja "Kliknij i poznaj" z kartami ciekawostek ładowanymi z data/facts.json, filtrami kategorii i mini-modalami
- funkcje: initDiscover(), loadFactsData(), renderFacts(), openFactModal()

## Stats Count-Up
- status: DONE
- plan: (część website-plan.md)
- opis: 4 animowane liczniki statystyk o polskich lasach z efektem count-up triggerowanym scrollem
- funkcje: initStatsCountUp()

## Hero Parallax
- status: DONE
- plan: (część website-plan.md)
- opis: Multi-layer parallax w sekcji Hero (4 warstwy z różnymi prędkościami)
- funkcje: initHeroParallax()

## Forest Particles
- status: DONE
- plan: (część website-plan.md)
- opis: Canvas 2D z animowanymi cząsteczkami (pyłki kwiatowe) pojawiającymi się podczas scrollowania
- funkcje: initForestParticles()

## Section Memory
- status: DONE
- plan: (część website-plan.md)
- opis: Zapamiętywanie ostatniej sekcji w localStorage i przywracanie pozycji po powrocie na stronę
- funkcje: initSectionMemory()

## Keyboard Navigation
- status: DONE
- plan: (część website-plan.md)
- opis: Nawigacja Arrow Up/Down między sekcjami strony
- funkcje: initKeyboardNavigation()

## Smooth Scroll + Navbar
- status: DONE
- plan: (część website-plan.md)
- opis: Smooth scroll do kotwic z offsetem navbara + zmiana tła navbar przy scrollu + hamburger menu
- funkcje: initSmoothScroll(), initNavbarScroll(), initHamburger()
