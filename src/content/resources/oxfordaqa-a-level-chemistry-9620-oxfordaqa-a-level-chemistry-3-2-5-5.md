---
title: "OxfordAQA A-Level Chemistry (9620): Variable oxidation states"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Transition metals"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "A"
order: 17.5
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-transition-metals"
    subtopic: "oxfordaqa-a-level-chemistry-3-2-5-5"
description: "OxfordAQA 9620 subtopic 3.2.5.5 in depth: vanadium reduction with electrode potentials, pH and ligand effects, Tollens' reagent and manganate(VII) titrations."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to nouman-ahmed (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **3.2.5.5 Variable oxidation states**, part of section 3.2.5 Transition metals in the OxfordAQA International AS and A-level Chemistry (9620) specification, Version 5.3. It is International A2 content, assessed in Unit 3 (Inorganic 2 and Physical 2) and available again in the synoptic Unit 5. It links closely to electrode potentials (section 3.1.9), because whether one oxidation state can be turned into another is a question about redox potentials.

When you have finished, condense it with the [variable oxidation states revision notes](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-2-5-5-revision-notes/) and test yourself with the [variable oxidation states practice questions](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-2-5-5-practice/). The [transition metals study guide](/resources/oxfordaqa-a-level-chemistry-transition-metals/) covers all of section 3.2.5.

## What the specification asks for

- Transition elements show variable oxidation states.
- Vanadium species in oxidation states IV, III and II are formed by the reduction of vanadate(V) ions by zinc in acidic solution.
- The redox potential for a transition metal ion changing from a higher to a lower oxidation state is influenced by pH and by the ligand.
- The reduction of [Ag(NH₃)₂]⁺ (Tollens' reagent) to metallic silver is used to distinguish between aldehydes and ketones.
- The redox titrations of Fe²⁺ and C₂O₄²⁻ with MnO₄⁻, and calculations for these titrations and similar redox reactions.

## Why oxidation states vary

In the elements titanium to copper, the 4s and 3d sub-levels are close in energy. An atom can lose its 4s electrons and then different numbers of 3d electrons without a large jump in the energy needed, so several oxidation states are stable enough to exist. Typical examples:

| Element | Common oxidation states | Example species |
|---|---|---|
| V | +2, +3, +4, +5 | V²⁺, V³⁺, VO²⁺, VO₂⁺ |
| Cr | +3, +6 | Cr³⁺, Cr₂O₇²⁻ |
| Mn | +2, +4, +7 | Mn²⁺, MnO₂, MnO₄⁻ |
| Fe | +2, +3 | Fe²⁺, Fe³⁺ |
| Cu | +1, +2 | Cu⁺, Cu²⁺ |

To find an oxidation state in an oxo-ion, let each O be −2 and solve for the metal. In VO₂⁺: V + 2(−2) = +1, so V = **+5**. In VO²⁺: V + (−2) = +2, so V = **+4**.

## Vanadium: reduction by zinc

Vanadate(V) ions in acid, written VO₂⁺, are reduced by zinc in three one-electron steps. The colours are how you follow the reaction:

```
VO₂⁺  (yellow, +5) → VO²⁺ (blue, +4) → V³⁺ (green, +3) → V²⁺ (violet, +2)
```

### Using electrode potentials to explain each step

| Half-equation | E⦵ / V |
|---|---|
| VO₂⁺ + 2H⁺ + e⁻ ⇌ VO²⁺ + H₂O | +1.00 |
| VO²⁺ + 2H⁺ + e⁻ ⇌ V³⁺ + H₂O | +0.34 |
| Sn⁴⁺ + 2e⁻ ⇌ Sn²⁺ | +0.15 |
| V³⁺ + e⁻ ⇌ V²⁺ | −0.26 |
| Zn²⁺ + 2e⁻ ⇌ Zn | −0.76 |

A reaction is feasible when the species being reduced is in the half-equation with the **more positive** E⦵ and the reducing agent is in the one with the **less positive** E⦵ (E⦵cell = E⦵(reduced) − E⦵(oxidised) is positive).

### Worked example 1: zinc versus tin(II)

*Explain why zinc reduces vanadium all the way to V²⁺, but tin(II) ions stop at V³⁺.*

```
Zinc (E⦵ = −0.76 V) as reducing agent:
  VO₂⁺ → VO²⁺   E⦵cell = 1.00 − (−0.76) = +1.76 V   feasible
  VO²⁺ → V³⁺    E⦵cell = 0.34 − (−0.76) = +1.10 V   feasible
  V³⁺  → V²⁺    E⦵cell = −0.26 − (−0.76) = +0.50 V  feasible

Tin(II) (E⦵ = +0.15 V) as reducing agent:
  VO₂⁺ → VO²⁺   E⦵cell = 1.00 − 0.15 = +0.85 V      feasible
  VO²⁺ → V³⁺    E⦵cell = 0.34 − 0.15 = +0.19 V      feasible
  V³⁺  → V²⁺    E⦵cell = −0.26 − 0.15 = −0.41 V     not feasible
```

So with tin(II), the final colour is **green** (V³⁺). With zinc it is **violet** (V²⁺). In an open flask, violet V²⁺ is slowly oxidised back towards green by oxygen from the air, so the reduction is usually done with the flask loosely stoppered.

Overall equation for the first step with zinc, from the half-equations (double the vanadium one to balance electrons):

```
2VO₂⁺ + 4H⁺ + Zn → 2VO²⁺ + 2H₂O + Zn²⁺
```

## How pH and ligands change redox potentials

A redox potential is not a fixed property of the metal. It depends on the conditions around the ion.

**pH.** When H⁺ appears on the left of a reduction half-equation, raising [H⁺] shifts that equilibrium to the right, so the electrode potential becomes more positive and the oxidised form becomes a stronger oxidising agent:

```
MnO₄⁻ + 8H⁺ + 5e⁻ ⇌ Mn²⁺ + 4H₂O
```

Manganate(VII) is a much stronger oxidising agent in acid. The reverse is also true: in alkaline conditions, lower oxidation states are oxidised more easily. Green iron(II) hydroxide, precipitated with alkali, darkens to brown on standing in air as it is oxidised to iron(III), whereas acidified Fe²⁺(aq) is oxidised by air only slowly.

**Ligand.** Changing the ligands changes the stability of each oxidation state. Ag⁺(aq) is reduced to silver at +0.80 V, but [Ag(NH₃)₂]⁺ only at +0.37 V, so ammonia makes silver(I) harder to reduce and Tollens' reagent a mild oxidising agent. Cobalt shows the opposite direction: [Co(H₂O)₆]²⁺ is very hard to oxidise to cobalt(III), but in excess ammonia the cobalt(II) complex is oxidised by air to cobalt(III).

## Tollens' reagent

Tollens' reagent is mild enough to oxidise aldehydes but not ketones:

```
[Ag(NH₃)₂]⁺ + e⁻ → Ag + 2NH₃              (reduction)
RCHO + H₂O → RCOOH + 2H⁺ + 2e⁻            (oxidation)
```

Two silver(I) complexes are reduced for each aldehyde molecule oxidised. Warm in a water bath: an aldehyde gives a silver mirror; a ketone gives no change. In the alkaline reagent the acid is formed as its salt.

## Manganate(VII) titrations

### The half-equations

```
MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O          (purple → very pale pink, nearly colourless)
Fe²⁺ → Fe³⁺ + e⁻
C₂O₄²⁻ → 2CO₂ + 2e⁻
```

Combining gives a 1 : 5 ratio of MnO₄⁻ to Fe²⁺ and 2 : 5 for MnO₄⁻ to C₂O₄²⁻. The end point is the first permanent pale pink, so no indicator is needed.

### Choosing the acid

| Acid | Problem |
|---|---|
| Dilute sulfuric acid | None: the correct choice |
| Hydrochloric acid | Cl⁻ is oxidised to Cl₂ by MnO₄⁻, so extra titrant is used and the titre is too large |
| Nitric acid | It is itself an oxidising agent and can oxidise some of the Fe²⁺, so the titre is too small |
| Ethanoic acid | A weak acid gives too little H⁺; brown MnO₂ can form instead of Mn²⁺ |

If too little acid is present, MnO₄⁻ is reduced only to manganese(IV) oxide, MnO₂, a brown solid: MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O. The ratio then changes and the end point is obscured.

### Worked example 2: water of crystallisation

3.475 g of hydrated iron(II) sulfate, FeSO₄·xH₂O, is dissolved in dilute sulfuric acid and made up to 250 cm³. 25.0 cm³ portions need 25.00 cm³ of 0.0100 mol dm⁻³ KMnO₄. Find x. (Mr FeSO₄ = 151.9; Mr H₂O = 18.0)

```
n(MnO₄⁻)          = 0.0100 × 25.00 ÷ 1000 = 2.50 × 10⁻⁴ mol
n(Fe²⁺) in 25.0 cm³ = 5 × 2.50 × 10⁻⁴     = 1.25 × 10⁻³ mol
n(Fe²⁺) in 250 cm³ = 1.25 × 10⁻²          mol
Mr(FeSO₄·xH₂O)    = 3.475 ÷ 0.0125        = 278
x                 = (278 − 151.9) ÷ 18.0  = 7.0
```

So the formula is **FeSO₄·7H₂O**.

### Worked example 3: a similar redox reaction

Hydrogen peroxide is oxidised by acidified manganate(VII): H₂O₂ → O₂ + 2H⁺ + 2e⁻.

*Build the equation, then find the concentration of a hydrogen peroxide solution. 10.0 cm³ is diluted to 250 cm³; 25.0 cm³ of the diluted solution needs 22.40 cm³ of 0.0200 mol dm⁻³ KMnO₄.*

```
Electrons: MnO₄⁻ takes 5, H₂O₂ gives 2 → multiply by 2 and 5
2MnO₄⁻ + 16H⁺ + 5H₂O₂ → 2Mn²⁺ + 8H₂O + 5O₂ + 10H⁺
Cancel H⁺: 2MnO₄⁻ + 6H⁺ + 5H₂O₂ → 2Mn²⁺ + 8H₂O + 5O₂

n(MnO₄⁻)               = 0.0200 × 22.40 ÷ 1000 = 4.48 × 10⁻⁴ mol
n(H₂O₂) in 25.0 cm³    = 4.48 × 10⁻⁴ × 5/2    = 1.12 × 10⁻³ mol
n(H₂O₂) in 250 cm³     = 1.12 × 10⁻² mol (all from the 10.0 cm³ sample)
[H₂O₂] original        = 1.12 × 10⁻² ÷ 0.0100 = 1.12 mol dm⁻³
```

The method transfers to any redox titration: write both half-equations, balance electrons, find the mole ratio, then work through moles.

## Common mistakes

- Using 1 : 5 for manganate(VII) with ethanedioate; it is 2 : 5.
- Forgetting to scale up from the titrated portion to the whole volumetric flask.
- Leaving H⁺ uncancelled on both sides of a combined equation.
- Stating that HCl "reacts with Fe²⁺"; the problem is that Cl⁻ is oxidised by MnO₄⁻.
- Writing VO²⁺ for vanadium(V); vanadium(V) is VO₂⁺ and vanadium(IV) is VO²⁺.
- Subtracting E⦵ values the wrong way round. The species reduced takes the more positive value.

## Exam technique for OxfordAQA command words

- **Deduce** (oxidation state): show the sum of charges.
- **Explain** (feasibility): quote both E⦵ values, calculate E⦵cell, and state feasible or not for each step.
- **Calculate** (titration): label each line with what it is the moles of, and keep 3 or 4 significant figures until the final answer.
- **Suggest** (choice of acid): name the side reaction and its effect on the titre.

## Where this subtopic leads

Variable oxidation states are what make transition metals good catalysts; see the [transition metal catalysts study guide](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-2-5-6/). The vanadium colours are explained in the [formation of coloured ions study guide](/resources/oxfordaqa-a-level-chemistry-9620-oxfordaqa-a-level-chemistry-3-2-5-4/), and E⦵cell is developed in the [electrode potentials study guide](/resources/oxfordaqa-a-level-chemistry-electrode-potentials-and-electrochemical-cells/). Half-equation balancing is revised in the [redox equations study guide](/resources/oxfordaqa-a-level-chemistry-oxidation-reduction-and-redox-equations/).

## Specification reference

OxfordAQA International AS and A-level Chemistry (9620), Version 5.3, for International AS and A-level exams May/June 2020 onwards: section 3.2.5 Transition metals (International A2), subtopic 3.2.5.5 Variable oxidation states.
