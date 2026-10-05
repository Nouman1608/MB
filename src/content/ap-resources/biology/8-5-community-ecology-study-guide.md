---
resourceId: "mb-ap-bio-8.5-study-guide"
title: "Community Ecology: Study Guide (Biology 8.5)"
description: "Learn how to describe a community by its species composition and diversity, calculate Simpson's diversity index, and explain how competition, predation and symbioses shape communities."
course: "biology"
unit: 8
topics: ["8.5"]
resourceType: "study-guide"
prerequisites:
  - "Populations, carrying capacity and density-dependent factors"
  - "Food chains, trophic levels and the flow of energy through an ecosystem"
  - "Mean and standard deviation of a small data set"
prerequisiteResources: ["mb-ap-bio-8.4-study-guide"]
learningObjectives:
  - "Describe a community by the species it contains (composition) and by its species diversity"
  - "Calculate and interpret Simpson's diversity index, separating richness from evenness"
  - "Classify interactions between populations by their positive, negative or neutral effect on each species"
  - "Explain how predation, competition, niche partitioning, trophic cascades and symbioses change population sizes and community structure"
  - "Use error bars of mean ± 2 SE to judge whether two sample means are likely to be different"
skills: ["1", "2", "4", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Simpson's diversity index = 1 − Σ(n/N)². Standard error SE = s ÷ √n, using the sample standard deviation s; error bars are mean ± 2 SE. Give indices to 2 decimal places"
related: ["mb-ap-bio-8.5-revision-notes", "mb-ap-bio-8.5-practice", "mb-ap-bio-8.5-checklist"]
next: "mb-ap-bio-8.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-biology", "page-biology"]
keyPoints:
  - "A community is all the interacting populations of different species in one area. Describe it by composition (which species) and diversity (how many species and how evenly individuals are spread among them)."
  - "Simpson's diversity index = 1 − Σ(n/N)². It runs from 0 (one species) towards 1. Higher means more diverse: more species, more evenly represented."
  - "Every interaction can be written as a pair of effects: competition (−/−), predation, herbivory and parasitism (+/−), mutualism (+/+), commensalism (+/0)."
  - "Interactions decide which species get energy and matter, so they drive population changes: predator–prey cycles, competitive exclusion, niche partitioning and trophic cascades."
  - "If error bars of mean ± 2 SE do not overlap, the two means are probably different; if they overlap a lot, the data do not show a difference."
faqs:
  - question: "Is a high Simpson's index always better?"
    answer: "No. The index describes a community; it is not a score. A salt marsh or a desert spring can be healthy with few species. Compare indices only between similar habitats sampled in the same way."
  - question: "What is the difference between predation and parasitism?"
    answer: "Both are +/− interactions. A predator usually kills and eats its prey quickly. A parasite usually lives on or in its host and feeds on it over a long time, often without killing it."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From populations to communities

Topics 8.3 and 8.4 looked at one population at a time: how it grows and what limits it. In nature, a population never lives alone. A pond holds algae, water fleas, snails, fish, insects and bacteria, all in the same place. A **community** is the group of populations of *different species* that live in one area and interact with each other.

Communities are not fixed lists. They change over time, because each population affects the others. A predator lowers the number of its prey; a competitor takes food another species could have used; a partner species supplies a service. This topic asks two questions:

1. How do you **describe** a community?
2. How do the **interactions** between its populations shape it?

## Describing a community: composition and diversity

Ecologists describe the structure of a community in two ways.

- **Species composition** is the identity of the species present: *which* species live there. Two meadows can have the same number of species but completely different species.
- **Species diversity** combines two ideas:
  - **species richness**, the number of different species;
  - **species evenness**, how equally the individuals are shared among those species.

A community with five species in similar numbers is more diverse than one with the same five species where one species makes up almost all the individuals. Richness is the same; evenness is not.

### Simpson's diversity index

To put a number on diversity, you can use **Simpson's diversity index**:

**Diversity index = 1 − Σ(n/N)²**

- n = the number of individuals of one species;
- N = the total number of individuals of all species;
- Σ means "add up the value for every species".

How to read the result:

- With only one species, n/N = 1, so the index is 1 − 1 = **0**: no diversity.
- The more species there are, and the more even their numbers, the closer the index gets to **1**.
- One useful meaning: the index is the probability that two individuals picked at random (putting the first back before picking the second) belong to **different** species.

Always compute n/N for each species first, square each value, add the squares, and only then subtract from 1.

## Interactions between populations

Each interaction affects both species involved. You can write it as a pair of signs: **+** (the species benefits), **−** (it is harmed) or **0** (no clear effect).

| Interaction | Effect on species 1 / species 2 | What happens |
|---|---|---|
| **Competition** | − / − | both use the same limited resource (food, light, space, nesting sites), so each has less |
| **Predation** | + / − | the predator kills and eats the prey |
| **Herbivory** | + / − | an animal eats parts of a plant or alga, often without killing it |
| **Parasitism** | + / − | the parasite lives on or in a host and feeds on it, usually over a long time |
| **Mutualism** | + / + | both partners gain, for example a pollinator gets nectar and the plant gets its pollen carried |
| **Commensalism** | + / 0 | one species gains and the other is not noticeably affected |

Mutualism, commensalism and parasitism are all **symbioses**: close, long-lasting relationships between two species. **Cooperation** between individuals (for example, animals hunting or defending a group together) also has positive effects and can be modelled the same way.

These relationships decide **how each population gets energy and matter**. A predator gets its energy and nutrients from its prey. Competitors divide a fixed supply of light, water or food. A plant in a mutualism with root fungi gets more phosphate than it could absorb alone. So when an interaction changes, the flow of energy and matter through the community changes too.

### Predator and prey populations

A predator and its prey can affect each other's numbers in a cycle:

1. Prey are plentiful, so predators have plenty of food and their numbers rise.
2. More predators eat more prey, so prey numbers fall.
3. With less food, predators starve or breed less, so predator numbers fall.
4. With fewer predators, prey numbers recover, and the cycle repeats.

<figure>
<svg viewBox="0 0 560 350" role="img" aria-labelledby="pp-title pp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pp-title">Model predator and prey population cycles over 12 years</title>
<desc id="pp-desc">Line graph with two vertical axes. Horizontal axis: time in years from 0 to 12. Left axis: prey population from 0 to 400. Right axis: predator population from 0 to 60. The prey line, solid, rises and falls between 50 and 350 with peaks at years 2, 6 and 10. The predator line, dashed, rises and falls between 12 and 48 with peaks at years 3, 7 and 11, one year after each prey peak.</desc>
<rect x="0" y="0" width="560" height="350" fill="#ffffff"/>
<line x1="70" y1="60" x2="430" y2="60" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="120" x2="430" y2="120" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="180" x2="430" y2="180" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="240" x2="430" y2="240" stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4"/>
<line x1="70" y1="300" x2="430" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="300" x2="70" y2="50" stroke="#1d2b44" stroke-width="2"/>
<line x1="430" y1="300" x2="430" y2="50" stroke="#1d2b44" stroke-width="2"/>
<text x="70" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<text x="130" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<text x="190" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="250" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">6</text>
<text x="310" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">8</text>
<text x="370" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">10</text>
<text x="430" y="318" text-anchor="middle" font-size="12" fill="#1d2b44">12</text>
<text x="62" y="304" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<text x="62" y="244" text-anchor="end" font-size="12" fill="#1d2b44">100</text>
<text x="62" y="184" text-anchor="end" font-size="12" fill="#1d2b44">200</text>
<text x="62" y="124" text-anchor="end" font-size="12" fill="#1d2b44">300</text>
<text x="62" y="64" text-anchor="end" font-size="12" fill="#1d2b44">400</text>
<text x="438" y="304" font-size="12" fill="#1d2b44">0</text>
<text x="438" y="244" font-size="12" fill="#1d2b44">15</text>
<text x="438" y="184" font-size="12" fill="#1d2b44">30</text>
<text x="438" y="124" font-size="12" fill="#1d2b44">45</text>
<text x="438" y="64" font-size="12" fill="#1d2b44">60</text>
<text x="250" y="342" text-anchor="middle" font-size="14" fill="#1d2b44">Time / years</text>
<text x="20" y="180" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 180)">Prey population</text>
<text x="490" y="180" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(90 490 180)">Predator population</text>
<polyline points="70,270.0 85,243.6 100,180.0 115,116.4 130,90.0 145,116.4 160,180.0 175,243.6 190,270.0 205,243.6 220,180.0 235,116.4 250,90.0 265,116.4 280,180.0 295,243.6 310,270.0 325,243.6 340,180.0 355,116.4 370,90.0 385,116.4 400,180.0 415,243.6 430,270.0" fill="none" stroke="#1d2b44" stroke-width="3"/>
<polyline points="70,180.0 85,230.9 100,252.0 115,230.9 130,180.0 145,129.1 160,108.0 175,129.1 190,180.0 205,230.9 220,252.0 235,230.9 250,180.0 265,129.1 280,108.0 295,129.1 310,180.0 325,230.9 340,252.0 355,230.9 370,180.0 385,129.1 400,108.0 415,129.1 430,180.0" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6"/>
<line x1="80" y1="30" x2="110" y2="30" stroke="#1d2b44" stroke-width="3"/>
<text x="116" y="35" font-size="13" font-weight="600" fill="#1d2b44">Prey (solid, left axis)</text>
<line x1="270" y1="30" x2="300" y2="30" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6"/>
<text x="306" y="35" font-size="13" font-weight="600" fill="#1d2b44">Predator (dashed, right axis)</text>
</svg>
<figcaption>Figure 1. Model data, not a real population. Prey (solid line, left axis) peak at years 2, 6 and 10. Predators (dashed line, right axis) peak one year later each time. Note the two different scales: there are always far fewer predators than prey.</figcaption>
</figure>

**Reading Figure 1.** The predator peak always comes **after** the prey peak. Predators need time to turn extra food into extra offspring. The predator line is also lower, because each predator needs many prey to supply its energy. Real populations are rarely this regular: weather, disease, other food sources and other predators also change the numbers.

### Competition and niche partitioning

A species' **niche** is its role in the community: what it eats, where and when it feeds, and the conditions it can tolerate. When two species have very similar niches and a resource is limited, one may out-compete the other and drive it out of the area. This is **competitive exclusion**.

Species with overlapping needs can still live together if they use the resource in different ways. This is **niche partitioning** (or resource partitioning). Examples of how it happens:

- feeding at different heights in the same tree;
- eating seeds or prey of different sizes;
- being active at different times of day;
- rooting at different depths in the soil.

Niche partitioning reduces competition between the species, so more species can share one community. It is one reason a community can be rich in species even when resources are limited.

### Trophic cascades

A **trophic cascade** is a chain of effects that runs down a food chain when the top level changes. Picture a lake with this chain:

**large fish → small fish → zooplankton → algae**

If the large fish are removed, small fish increase. More small fish eat more zooplankton, so zooplankton fall. With fewer grazers, algae grow faster and the water turns green. Each level alternates: down, up, down, up. A change at one level can therefore change a level it never touches directly.

## Worked example 1: comparing two sites with Simpson's index

**Question.** A student sets pitfall traps for ground beetles at two hedgerow sites. She finds the same five species at both. Calculate Simpson's diversity index for each site and compare the communities.

| Species | P | Q | R | S | T | Total N |
|---|---|---|---|---|---|---|
| Site 1 | 18 | 15 | 12 | 9 | 6 | 60 |
| Site 2 | 48 | 4 | 3 | 3 | 2 | 60 |

1. **Site 1: proportions.** n/N = 18/60, 15/60, 12/60, 9/60, 6/60 = 0.30, 0.25, 0.20, 0.15, 0.10.
2. **Square each one.** 0.0900, 0.0625, 0.0400, 0.0225, 0.0100.
3. **Add.** Σ(n/N)² = 0.2250.
4. **Subtract from 1.** Index = 1 − 0.2250 = 0.775, so **0.78** to 2 decimal places.
5. **Site 2: proportions.** 48/60 = 0.800; 4/60 = 0.0667; 3/60 = 0.0500; 3/60 = 0.0500; 2/60 = 0.0333.
6. **Squares.** 0.6400, 0.0044, 0.0025, 0.0025, 0.0011. Sum = 0.6506.
7. **Index** = 1 − 0.6506 = 0.349, so **0.35**.

**Interpretation.** Both sites have the same **composition** and the same **richness** (five species). Site 1 is far more diverse because individuals are spread evenly. At Site 2, species P makes up 80% of the catch, so two beetles picked at random would usually both be P. A possible next question: is one species out-competing the others at Site 2?

**Check.** Each index lies between 0 and 1, and the more even site has the higher value, as expected.

## Worked example 2: is the difference real? Using error bars

**Question.** In a grassland, a student tests whether a tall grass, species Y, competes with a small herb, species X. She clears Y from five plots and leaves five similar plots as controls. After one season she measures the dry mass of X in each plot (g m⁻²).

| Plots | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Control (Y present) | 42 | 38 | 45 | 40 | 35 |
| Y removed | 61 | 55 | 66 | 58 | 60 |

Calculate mean ± 2 SE for each group and decide whether removing Y changed the growth of X.

**Control.**

1. Mean = 200 ÷ 5 = **40.0 g m⁻²**.
2. Deviations from the mean: 2, −2, 5, 0, −5. Squares: 4, 4, 25, 0, 25. Sum = 58.
3. s = √(58 ÷ 4) = 3.81 g m⁻².
4. SE = s ÷ √n = 3.81 ÷ √5 = 1.70 g m⁻². 2 SE = 3.41.
5. Interval: 40.0 ± 3.4, from **36.6 to 43.4 g m⁻²**.

**Y removed.**

1. Mean = 300 ÷ 5 = **60.0 g m⁻²**.
2. Deviations: 1, −5, 6, −2, 0. Squares: 1, 25, 36, 4, 0. Sum = 66.
3. s = √(66 ÷ 4) = 4.06 g m⁻²; SE = 4.06 ÷ √5 = 1.82; 2 SE = 3.63.
4. Interval: 60.0 ± 3.6, from **56.4 to 63.6 g m⁻²**.

**Decision.** The two intervals do not overlap (the control's top, 43.4, is well below the removal plots' bottom, 56.4). So the means are **probably different**: removing Y raised the mass of X by 50% ((60.0 − 40.0) ÷ 40.0 × 100). This supports the idea that Y competes with X, perhaps for light, since Y is tall.

**A contrast.** In the same plots, a third species, Z, had means of 12.8 g m⁻² (control) and 13.8 g m⁻² (Y removed), with intervals 11.1–14.5 and 12.1–15.5. These overlap widely, so the data give **no evidence** that Y affects Z. That is not proof of no effect; a larger sample might reveal a small one.

**Limits.** Non-overlapping error bars suggest a real difference but are not a formal statistical test. Clearing Y also disturbs the soil, so a better control would disturb the soil in the control plots in the same way.

## Common misconceptions

- **"A community is all the living and non-living things in an area."** That is an *ecosystem*. A community is only the interacting populations of different species.
- **"More species always means a higher diversity index."** Evenness matters too. Five species with one dominant can score lower than three species in equal numbers.
- **"Simpson's index: 1 − Σ(n/N), without squaring."** Without squaring, Σ(n/N) is always 1, so the index would always be 0.
- **"Predators keep prey numbers low all the time."** Predator and prey numbers rise and fall together in a cycle, with the predator peak lagging behind the prey peak.
- **"Commensalism and mutualism are the same."** In mutualism both species gain (+/+). In commensalism only one gains; the other is unaffected (+/0).
- **"Parasites always kill their host."** Most parasites feed on a living host for a long time; killing it quickly would end their food supply.
- **"Competition only happens between different species."** Members of the same species compete too (that was density dependence in Topic 8.4). This topic focuses on competition between species.
- **"Overlapping error bars prove there is no difference."** They mean the data do not show a difference; a small real effect may be hidden by variation or a small sample.

## Where this leads

Interactions between species decide how stable a community is. Topic 8.6 builds on this: [Biodiversity](/advanced-course-resources/biology/8-6-biodiversity-study-guide/) explains why diverse ecosystems recover better from change and why removing a keystone species can make a community collapse. Test yourself with the [practice questions](/advanced-course-resources/biology/8-5-community-ecology-practice/), then use the [revision notes](/advanced-course-resources/biology/8-5-community-ecology-revision-notes/) and the [checklist](/advanced-course-resources/biology/8-5-community-ecology-checklist/) to consolidate.
