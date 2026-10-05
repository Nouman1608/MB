---
resourceId: "mb-ap-chem-9.5-study-guide"
title: "Free Energy and Equilibrium: Study Guide (Chemistry 9.5)"
description: "Learn how the standard free energy change and the equilibrium constant say the same thing, how to convert between them with ΔG° = −RT ln K, and how to estimate K from ΔG°."
course: "chemistry"
unit: 9
topics: ["9.5"]
resourceType: "study-guide"
prerequisites:
  - "Calculating ΔG° from ΔH° and ΔS° with ΔG° = ΔH° − TΔS° (Topic 9.3)"
  - "What the size of K tells you about an equilibrium mixture (Topic 7.5)"
  - "Natural logarithms and the exponential function on a calculator"
prerequisiteResources: ["mb-ap-chem-9.4-study-guide"]
learningObjectives:
  - "Explain why a negative ΔG° and a K greater than 1 both mean products are favoured at equilibrium under standard conditions"
  - "Calculate K from ΔG° and ΔG° from K at a given temperature, with consistent units"
  - "Estimate whether K is close to 1 or far from 1 by comparing ΔG° with RT"
  - "Use ΔH°, ΔS° and temperature to predict how ΔG° and K change when the temperature changes"
  - "Justify a claim about thermodynamic favourability with a calculation or a chemical principle"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "R = 8.314 J mol⁻¹ K⁻¹; use ln (natural log), not log; convert ΔG° from kJ to J before dividing by RT; temperature in kelvin"
related: ["mb-ap-chem-9.5-revision-notes", "mb-ap-chem-9.5-practice", "mb-ap-chem-9.5-checklist"]
next: "mb-ap-chem-9.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Thermodynamically favoured (ΔG° < 0) means products are favoured at equilibrium (K > 1) under standard conditions."
  - "The link is ΔG° = −RT ln K, or K = e^(−ΔG°/RT). Use R = 8.314 J mol⁻¹ K⁻¹ and ΔG° in joules."
  - "ΔG° < 0 gives K > 1; ΔG° = 0 gives K = 1; ΔG° > 0 gives K < 1."
  - "Compare ΔG° with RT (about 2.5 kJ mol⁻¹ at 298 K). If ΔG° is many times RT, K is very far from 1."
  - "At 298 K, every 5.7 kJ mol⁻¹ of ΔG° changes K by a factor of about 10."
faqs:
  - question: "If ΔG° is positive, does the reaction not happen at all?"
    answer: "It does happen, but only a little. A positive ΔG° gives K less than 1, so the equilibrium mixture is mostly reactants. K is small, not zero, so some product always forms."
  - question: "Why does the equation use ln and not log?"
    answer: "The relationship comes from the natural logarithm. If you use log (base 10) by mistake, your K or ΔG° will be wrong by a factor linked to 2.303. Use the ln and eˣ keys."
  - question: "Which K does ΔG° give, Kc or Kp?"
    answer: "It gives the K that matches the standard states used for ΔG°: partial pressures in atm for gases and concentrations in mol L⁻¹ for dissolved species. In this course you only need to know that the K from ΔG° is the one written for the balanced equation as given."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Two ways of saying "products are favoured"

You now have two separate tools that describe where a reaction ends up.

- From Unit 7, the **equilibrium constant K**. Products are on the top of the K expression, so a K greater than 1 means the equilibrium mixture contains more products than reactants (in the sense of the expression). See [Topic 7.5](/advanced-course-resources/chemistry/7-5-magnitude-equilibrium-constant-study-guide/).
- From [Topic 9.3](/advanced-course-resources/chemistry/9-3-gibbs-free-energy-thermodynamic-favorability-study-guide/), the **standard Gibbs free energy change ΔG°**. A negative ΔG° means the reaction is **thermodynamically favoured** under standard conditions.

These are not two different facts. They are the same fact in two languages. When a chemist says a process is "thermodynamically favoured" (ΔG° < 0), they mean that, under standard conditions, **products are favoured at equilibrium (K > 1)**.

| ΔG° | K | What the equilibrium mixture looks like |
|---|---|---|
| Negative (ΔG° < 0) | Greater than 1 | Products favoured; the reaction is thermodynamically favoured |
| Zero (ΔG° = 0) | Exactly 1 | Neither side favoured; significant amounts of both |
| Positive (ΔG° > 0) | Less than 1 (but above 0) | Reactants favoured; only a small amount of product forms |

Notice the last row. A positive ΔG° does **not** mean "no reaction". It means K is small. A small K still gives some product, as you saw in Topic 7.5.

## The equation that links ΔG° and K

The exact relationship is:

- **ΔG° = −RT ln K**
- or, rearranged, **K = e^(−ΔG°/RT)**

What each symbol means:

- **ΔG°** is the standard free energy change for the balanced equation, in J mol⁻¹.
- **R** is the gas constant, **8.314 J mol⁻¹ K⁻¹**.
- **T** is the absolute temperature in **kelvin**.
- **ln** is the natural logarithm, and **e** is its base (about 2.718).

Two unit traps catch many students:

1. ΔG° values are usually given in **kJ mol⁻¹**, but R is in **J** mol⁻¹ K⁻¹. Multiply ΔG° by 1000 before you divide by RT. If you forget, ΔG°/RT comes out about a thousand times too small and K looks almost exactly 1.
2. T must be in **kelvin**. 25 °C is 298 K.

Why the minus sign? A negative ΔG° makes −ΔG°/RT positive, and e raised to a positive power is greater than 1. So the minus sign is exactly what makes "negative ΔG°" match "K greater than 1".

The quantity ΔG°/RT has no unit: J mol⁻¹ divided by (J mol⁻¹ K⁻¹ × K) leaves nothing. That is a good check. An exponent must always be a pure number.

## Estimating K without a full calculation

You do not always need a calculator. The CED expects you to make the connection by **estimation** too. The trick is to compare ΔG° with **RT**.

At 298 K, RT = 8.314 × 298 = 2478 J mol⁻¹, which is about **2.5 kJ mol⁻¹**.

- If ΔG° is **close to zero** (a few kJ mol⁻¹ at most, similar in size to RT), then ΔG°/RT is small, and K is **close to 1**. Both reactants and products are present in significant amounts.
- If ΔG° is **much larger than RT** in size (tens of kJ mol⁻¹ or more), then K is **very far from 1**: huge if ΔG° is negative, tiny if ΔG° is positive.

A handy rule at 298 K: RT ln 10 = 2.478 × 2.303 ≈ **5.7 kJ mol⁻¹**. So every 5.7 kJ mol⁻¹ of ΔG° changes K by a **factor of 10**.

| ΔG° at 298 K (kJ mol⁻¹) | ΔG° ÷ RT | K | Interpretation |
|---|---|---|---|
| −40 | −16.1 | about 1 × 10⁷ | Essentially all products |
| −20 | −8.1 | about 3 × 10³ | Strongly product-favoured |
| −5.7 | −2.3 | about 10 | Product-favoured |
| 0 | 0 | 1 | Neither side favoured |
| +5.7 | +2.3 | about 0.1 | Reactant-favoured |
| +20 | +8.1 | about 3 × 10⁻⁴ | Strongly reactant-favoured |
| +40 | +16.1 | about 1 × 10⁻⁷ | Essentially no products |

Look at how quickly K changes. A ΔG° of −40 kJ mol⁻¹ is not an especially large energy for a chemical reaction, yet it gives a K of about ten million. This is why many reactions are described as "going to completion": a ΔG° of a few tens of kJ mol⁻¹ is enough.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="g-k-title g-k-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="g-k-title">How log K depends on ΔG° at 298 K</title>
<desc id="g-k-desc">A straight line graph. The horizontal axis is ΔG° from −30 to +30 kJ per mole. The vertical axis is log K from −6 to +6. The line passes through the origin, where ΔG° is zero and K is 1, and slopes downwards: at ΔG° = −30 kJ per mole log K is about +5.3, and at +30 kJ per mole log K is about −5.3. A label with an arrow to the left half of the line reads products favoured, ΔG° negative and K greater than 1. A label with an arrow to the right half of the line reads reactants favoured, ΔG° positive and K less than 1.</desc>
<line x1="80" y1="160" x2="560" y2="160" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="320" y1="40" x2="320" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="80" y1="156" x2="80" y2="164"/><line x1="160" y1="156" x2="160" y2="164"/><line x1="240" y1="156" x2="240" y2="164"/><line x1="400" y1="156" x2="400" y2="164"/><line x1="480" y1="156" x2="480" y2="164"/><line x1="560" y1="156" x2="560" y2="164"/>
<line x1="316" y1="40" x2="324" y2="40"/><line x1="316" y1="80" x2="324" y2="80"/><line x1="316" y1="120" x2="324" y2="120"/><line x1="316" y1="200" x2="324" y2="200"/><line x1="316" y1="240" x2="324" y2="240"/><line x1="316" y1="280" x2="324" y2="280"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="180">−30</text><text x="160" y="180">−20</text><text x="240" y="180">−10</text><text x="400" y="180">+10</text><text x="480" y="180">+20</text><text x="560" y="180">+30</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="310" y="44">+6</text><text x="310" y="84">+4</text><text x="310" y="124">+2</text><text x="310" y="204">−2</text><text x="310" y="244">−4</text><text x="310" y="284">−6</text>
</g>
<line x1="80" y1="54.8" x2="560" y2="265.2" stroke="#1d2b44" stroke-width="3"/>
<circle cx="320" cy="160" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="330" y="150" font-size="12" fill="#1d2b44">ΔG° = 0, K = 1</text>
<text x="560" y="310" font-size="13" text-anchor="end" fill="#1d2b44">ΔG° (kJ mol⁻¹)</text>
<text x="20" y="30" font-size="13" fill="#1d2b44">log K</text>
<rect x="90" y="215" width="190" height="48" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-dasharray="5 3"/>
<text x="185" y="235" font-size="12" text-anchor="middle" fill="#1d2b44">Products favoured</text>
<text x="185" y="252" font-size="12" text-anchor="middle" fill="#1d2b44">ΔG° &lt; 0, K &gt; 1 (left half)</text>
<path d="M185 213 V110" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#gk-arrow)"/>
<rect x="360" y="55" width="190" height="48" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-dasharray="5 3"/>
<text x="455" y="75" font-size="12" text-anchor="middle" fill="#1d2b44">Reactants favoured</text>
<text x="455" y="92" font-size="12" text-anchor="middle" fill="#1d2b44">ΔG° &gt; 0, K &lt; 1 (right half)</text>
<path d="M455 105 V210" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#gk-arrow)"/>
<defs><marker id="gk-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. At 298 K, log K falls by 1 for every 5.7 kJ mol⁻¹ increase in ΔG°. The line crosses K = 1 (log K = 0) exactly where ΔG° = 0. The dashed boxes and arrows name the two halves of the line.</figcaption>
</figure>

## Where temperature comes in

T appears twice in this topic.

1. **Inside the equation.** For the same ΔG°, a higher T makes ΔG°/RT smaller, so K is a little closer to 1.
2. **Inside ΔG° itself.** From Topic 9.3, ΔG° = ΔH° − TΔS°. When T changes, ΔG° changes, and so does K. This is usually the bigger effect.

So to predict K at a new temperature, first find ΔG° at that temperature, then convert to K. In this course you may assume that ΔH° and ΔS° stay roughly constant over a moderate temperature range.

A useful consequence: when ΔH° and ΔS° have the **same sign**, there is a crossover temperature T = ΔH° ÷ ΔS° at which ΔG° = 0 and K = 1. On one side of it the reaction is product-favoured; on the other side it is reactant-favoured.

## Worked example 1: K from ΔG°

**Question.** For the invented isomerisation P(aq) ⇌ Q(aq), ΔG° = −12.6 kJ mol⁻¹ at 298 K. Calculate K and describe the equilibrium mixture.

1. Convert to joules: ΔG° = −12 600 J mol⁻¹.
2. RT = 8.314 J mol⁻¹ K⁻¹ × 298 K = 2477.6 J mol⁻¹.
3. Exponent: −ΔG°/RT = −(−12 600) ÷ 2477.6 = +5.086 (no unit).
4. K = e^5.086 = **162** (3 significant figures).

**Interpretation.** ΔG° is negative, so K > 1: products are favoured. Because Q and P appear to the first power, K = [Q]/[P] = 162, so at equilibrium there are about 162 Q molecules for every P molecule. The reaction is thermodynamically favoured.

**Estimation check.** 12.6 kJ mol⁻¹ is a little more than 2 × 5.7 kJ mol⁻¹, so K should be a little more than 10² = 100. 162 fits.

**Trap.** If you leave ΔG° in kJ, you get e^(12.6/2477.6) = 1.005, which wrongly suggests that neither side is favoured.

## Worked example 2: ΔG° from K

**Question.** A different invented reaction has K = 3.2 × 10⁻⁴ at 350 K. Calculate ΔG° at 350 K. Is the reaction thermodynamically favoured at this temperature?

1. RT = 8.314 × 350 = 2909.9 J mol⁻¹.
2. ln K = ln(3.2 × 10⁻⁴) = −8.047.
3. ΔG° = −RT ln K = −(2909.9)(−8.047) = +23 417 J mol⁻¹ = **+23.4 kJ mol⁻¹**.

**Interpretation.** ΔG° is positive and K is less than 1, so the reaction is **not** thermodynamically favoured at 350 K: reactants are favoured at equilibrium. The two signs agree, as they must.

**Check the sign.** A K below 1 always has a negative ln K. The minus sign in front of RT then turns it into a positive ΔG°. If your ΔG° came out negative for a K below 1, you dropped a minus sign.

## Worked example 3: how temperature changes K

**Question.** For an invented gas-phase reaction, ΔH° = +45.0 kJ mol⁻¹ and ΔS° = +150 J mol⁻¹ K⁻¹. Assume both stay constant. (a) Calculate ΔG° and K at 298 K and at 400 K. (b) At what temperature is K = 1?

**(a) At 298 K.**
1. ΔG° = ΔH° − TΔS° = 45.0 kJ mol⁻¹ − (298 K)(0.150 kJ mol⁻¹ K⁻¹) = 45.0 − 44.7 = **+0.3 kJ mol⁻¹**.
2. K = e^(−300 / 2477.6) = e^(−0.121) = **0.89**.

ΔG° is tiny compared with RT, so K is close to 1: both reactants and products are present in significant amounts, with reactants very slightly favoured.

**At 400 K.**
1. ΔG° = 45.0 − (400)(0.150) = 45.0 − 60.0 = **−15.0 kJ mol⁻¹**.
2. RT = 8.314 × 400 = 3325.6 J mol⁻¹, so −ΔG°/RT = 15 000 ÷ 3325.6 = 4.51.
3. K = e^4.51 = **91**.

Now products are clearly favoured. Raising the temperature made the −TΔS° term larger, and that outweighed the positive ΔH°.

**(b)** K = 1 when ΔG° = 0, so T = ΔH° ÷ ΔS° = 45.0 kJ mol⁻¹ ÷ 0.150 kJ mol⁻¹ K⁻¹ = **300 K**. Below 300 K reactants are favoured; above it, products are favoured.

**Check.** The answers fit the estimation rule. At 298 K, ΔG° is almost zero, so K ≈ 1. At 400 K, ΔG° is about 4.5 times RT, so K is far enough from 1 to be about 10².

## Common misconceptions

- **"ΔG° > 0 means the reaction does not happen."** It means K < 1. Some product still forms; the equilibrium mixture is mostly reactants.
- **"ΔG° = 0 means nothing happens."** It means K = 1. Forward and reverse reactions still run, and both sides are present in significant amounts at equilibrium.
- **"Thermodynamically favoured means fast."** ΔG° and K say where the reaction ends up, not how quickly it gets there. A favoured reaction can be too slow to observe ([Topic 9.4](/advanced-course-resources/chemistry/9-4-thermodynamic-kinetic-control-study-guide/)).
- **Mixing kJ and J.** Convert ΔG° to J mol⁻¹ before using R = 8.314 J mol⁻¹ K⁻¹. A K that comes out as 1.00something for a ΔG° of several kJ is the warning sign.
- **Using log instead of ln.** The equation needs the natural logarithm. Using log gives a ΔG° that is too small in size by a factor of 2.303.
- **Using degrees Celsius.** T in the equation is always in kelvin.
- **"A negative ΔG° means K is negative."** K is always positive. ΔG° sets whether K is above or below 1, never its sign.
- **"Doubling ΔG° doubles K."** The link is exponential. At 298 K, ΔG° = −5.7 kJ mol⁻¹ gives K ≈ 10, but ΔG° = −11.4 kJ mol⁻¹ gives K ≈ 100, not 20. Doubling ΔG° squares K.

## Where this leads

This topic joins Unit 7 and Unit 9: equilibrium constants and free energy describe the same thing. Next, [Topic 9.6, Free Energy of Dissolution](/advanced-course-resources/chemistry/9-6-free-energy-dissolution-study-guide/), applies these ideas to dissolving a salt, where ΔG° links to K_sp. Later, Topic 9.9 adds a third language, the cell potential E°, which is also tied to ΔG°. Try the [practice questions](/advanced-course-resources/chemistry/9-5-free-energy-equilibrium-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/9-5-free-energy-equilibrium-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/9-5-free-energy-equilibrium-checklist/) to consolidate.
