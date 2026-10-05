---
resourceId: "mb-ap-chem-7.7-study-guide"
title: "Calculating Equilibrium Concentrations: Study Guide (Chemistry 7.7)"
description: "Use Q and K to decide which way a reaction goes, then set up an ICE table to calculate equilibrium concentrations or partial pressures, with shortcuts for very small K."
course: "chemistry"
unit: 7
topics: ["7.7"]
resourceType: "study-guide"
prerequisites:
  - "Writing Kc and Kp expressions and calculating Q (Topic 7.3)"
  - "Calculating K from equilibrium data (Topic 7.4)"
  - "What very large and very small K values mean (Topic 7.5)"
  - "Converting moles and volume into concentration (Topic 3.7)"
prerequisiteResources: ["mb-ap-chem-7.6-study-guide"]
learningObjectives:
  - "Compare Q with K to predict whether a mixture reacts forwards, backwards or not at all"
  - "Describe dynamic equilibrium in terms of equal forward and reverse rates"
  - "Set up an ICE table with changes in the ratio of the coefficients"
  - "Calculate equilibrium concentrations or partial pressures from initial values and K"
  - "Use the perfect-square and small-x shortcuts, and check when the small-x shortcut is valid"
  - "Sketch a concentration–time graph for the approach to equilibrium with a labelled, scaled axis"
skills: ["3", "5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "K has no units in this course; keep unrounded values of x until the final step and check your answer by substituting back into K"
related: ["mb-ap-chem-7.7-revision-notes", "mb-ap-chem-7.7-practice", "mb-ap-chem-7.7-checklist"]
next: "mb-ap-chem-7.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "First compare Q with K. Q < K: net forward reaction. Q > K: net reverse reaction. Q = K: already at equilibrium."
  - "At equilibrium the forward and reverse rates are equal, not zero, so concentrations stay constant while both reactions continue."
  - "An ICE table (Initial, Change, Equilibrium) tracks every species. The changes are in the ratio of the coefficients."
  - "Substitute the equilibrium row into the K expression and solve for x. Then check by putting your answers back into K."
  - "If K is very small, x is tiny compared with the starting amount and can be dropped from (c − x). Check that x is under about 5% of c."
faqs:
  - question: "Can I put moles straight into the ICE table?"
    answer: "Only if you convert them before you use Kc. Kc uses concentrations in mol L⁻¹, so divide each amount by the volume of the container first. Partial pressures in atm go into Kp."
  - question: "What if neither shortcut works?"
    answer: "Rearrange the equation into the form ax² + bx + c = 0 and solve it with the quadratic formula or your calculator. Keep the root that gives no negative concentration."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## The question this topic answers

In Topic 7.4 you were given the concentrations **at** equilibrium and you calculated K. Now you work the other way round. You know:

- the **balanced equation**,
- the **initial** concentrations (or partial pressures), and
- the value of **K** at the temperature of the experiment.

You must predict the concentrations, or partial pressures, of every species **once equilibrium is reached**. Every problem of this type follows the same two steps:

1. Compare **Q** with **K** to find which way the reaction will go.
2. Use an **ICE table** to track how far it goes, then solve for the unknown.

## Step 1: compare Q with K

The reaction quotient Q has exactly the same form as K, but you fill it with the concentrations you have **now**, not the equilibrium ones (Topic 7.3). A mixture always moves so that Q gets closer to K.

| Comparison | What happens next | Why |
|---|---|---|
| **Q < K** | Net **forward** reaction: reactants are used up, products form | The ratio of products to reactants is too small, so products must increase (and reactants decrease) until Q = K |
| **Q > K** | Net **reverse** reaction: products are used up, reactants form | The ratio of products to reactants is too large, so products must decrease (and reactants increase) until Q = K |
| **Q = K** | No net change: the mixture is already at equilibrium | Forward and reverse rates are already equal |

Two special cases come up often:

- If there are **no products** at the start, Q = 0, so Q < K and the reaction must go forwards.
- If there are **no reactants** at the start, Q cannot be calculated (division by zero) and you can treat it as infinitely large. The reaction must go backwards.

### What "at equilibrium" really means

When Q = K, the reaction has not stopped. Particles still collide and react in both directions. The **forward rate equals the reverse rate**, so every species is made as fast as it is used up. The result is that concentrations, and therefore the proportion of reactants to products, stay constant. This is **dynamic equilibrium**. A flat line on a concentration–time graph means "no net change", not "no reaction".

## Step 2: the ICE table

An ICE table has three rows under the balanced equation:

- **I – Initial:** the concentrations you start with (in mol L⁻¹ for Kc, atm for Kp).
- **C – Change:** how each one changes, written in terms of one unknown, x.
- **E – Equilibrium:** Initial + Change.

The Change row follows the **coefficients**. For a reaction 2 G + H ⇌ 3 J going forwards, if H falls by x then G falls by 2x and J rises by 3x. Use a minus sign for the side being used up and a plus sign for the side being formed. Which side is which comes from Step 1.

Three rules keep the table correct:

- **Concentrations, not moles.** If you are given moles and a volume, divide first: c = n / V.
- **Leave out pure solids and liquids.** They do not appear in K, so they do not need a row of concentrations.
- **Kc with concentrations, Kp with partial pressures.** Do not mix them. Converting between Kc and Kp is not assessed in this course, but you must use whichever one the question gives.

Then substitute the Equilibrium row into the K expression, solve for x and work out each equilibrium value. Finally, **check**: put your answers back into the K expression. You should get K back, to within rounding.

## Representing the approach to equilibrium

A concentration–time graph shows the same story as the ICE table. Figure 1 shows the reaction in Worked example 1 below.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="ice-graph-title ice-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ice-graph-title">Concentrations approaching equilibrium for X₂ + Y₂ ⇌ 2XY</title>
<desc id="ice-graph-desc">Graph of concentration in mol per litre, from 0 to 0.30 in steps of 0.05, against time in seconds, from 0 to 60. A dashed curve for X₂ and Y₂ (which overlap) starts at 0.200 and falls to 0.057, levelling off at about 30 seconds. A solid curve for XY starts at 0 and rises to 0.286, also levelling off at about 30 seconds. The XY curve rises by twice as much as the X₂ curve falls. A dotted vertical line at 30 seconds is labelled equilibrium reached. After that both curves are flat.</desc>
<rect x="0" y="0" width="640" height="320" fill="#ffffff"/>
<g stroke="#d5dae3" stroke-width="1">
<path d="M70 30 H600 M70 66.7 H600 M70 103.3 H600 M70 140 H600 M70 176.7 H600 M70 213.3 H600"/>
</g>
<path d="M70 30 V250 H600" fill="none" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="254">0</text><text x="62" y="217">0.05</text><text x="62" y="181">0.10</text><text x="62" y="144">0.15</text><text x="62" y="107">0.20</text><text x="62" y="71">0.25</text><text x="62" y="34">0.30</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="268">0</text><text x="158" y="268">10</text><text x="247" y="268">20</text><text x="335" y="268">30</text><text x="423" y="268">40</text><text x="512" y="268">50</text><text x="600" y="268">60</text>
</g>
<text x="335" y="295" text-anchor="middle" font-size="14" fill="#1d2b44">Time (s)</text>
<text x="18" y="140" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 18 140)">Concentration (mol L⁻¹)</text>
<path d="M335 30 V250" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="340" y="24" font-size="12" fill="#1d2b44">equilibrium reached</text>
<path d="M70 250 C140 120, 220 48, 335 40.5 H600" fill="none" stroke="#1d2b44" stroke-width="3"/>
<path d="M70 103.3 C140 170, 220 205, 335 208.1 H600" fill="none" stroke="#1d2b44" stroke-width="3" stroke-dasharray="9 6"/>
<text x="470" y="58" font-size="13" fill="#1d2b44">[XY] = 0.286 (solid)</text>
<text x="420" y="198" font-size="13" fill="#1d2b44">[X₂] = [Y₂] = 0.057 (dashed)</text>
</svg>
<figcaption>Figure 1. An invented run of Worked example 1. The time scale is illustrative; the concentration scale is to scale. XY rises by 0.286 mol L⁻¹ while X₂ falls by 0.143 mol L⁻¹, because the coefficients are 2 and 1. Both lines become flat when Q = K.</figcaption>
</figure>

When you sketch a graph like this, check four things:

- The vertical axis is labelled with the quantity and its **units** (mol L⁻¹ for concentration, atm for pressure) and has an **even scale**.
- Each curve **starts** at its initial value and **ends** at its equilibrium value.
- The sizes of the changes are in the **ratio of the coefficients**.
- All the curves become flat **at the same time**, because equilibrium is reached by the whole mixture at once.

## Worked example 1: a perfect square

**Question.** The fictional gases X₂ and Y₂ react: X₂(g) + Y₂(g) ⇌ 2 XY(g), with Kc = 25.0 at a fixed temperature. A flask starts with [X₂] = [Y₂] = 0.200 mol L⁻¹ and no XY. Calculate the equilibrium concentrations.

1. **Direction.** There is no XY, so Q = 0 < K. The reaction goes forwards.
2. **ICE table.**

| | X₂ | Y₂ | 2 XY |
|---|---|---|---|
| I (mol L⁻¹) | 0.200 | 0.200 | 0 |
| C (mol L⁻¹) | −x | −x | +2x |
| E (mol L⁻¹) | 0.200 − x | 0.200 − x | 2x |

3. **Substitute.** Kc = [XY]² / ([X₂][Y₂]) = (2x)² / (0.200 − x)² = 25.0
4. **Solve.** Both sides are perfect squares, so take the square root: 2x / (0.200 − x) = 5.00. Then 2x = 1.00 − 5x, so 7x = 1.00 and x = 0.1429 mol L⁻¹.
5. **Equilibrium values.** [XY] = 2x = **0.286 mol L⁻¹**; [X₂] = [Y₂] = 0.200 − 0.1429 = **0.0571 mol L⁻¹**.

**Check.** (0.2857)² / (0.05714)² = 25.0. ✓ The square root step is only allowed because the top and bottom are both squares. Use the positive root: the negative one would give a negative concentration.

## Worked example 2: a very small K

**Question.** The fictional gas A₂ splits into atoms: A₂(g) ⇌ 2 A(g), with Kc = 4.0 × 10⁻⁶. A 0.500 L flask starts with 0.250 mol of A₂ and no A. Calculate [A] at equilibrium.

1. **Concentration first.** [A₂] = 0.250 mol ÷ 0.500 L = 0.500 mol L⁻¹.
2. **Direction.** No A, so Q = 0 < K: forwards.
3. **ICE table.**

| | A₂ | 2 A |
|---|---|---|
| I (mol L⁻¹) | 0.500 | 0 |
| C (mol L⁻¹) | −x | +2x |
| E (mol L⁻¹) | 0.500 − x | 2x |

4. **Substitute.** Kc = (2x)² / (0.500 − x) = 4.0 × 10⁻⁶.
5. **Small-x shortcut.** K is tiny, so very little A₂ splits (Topic 7.5). Assume x is so small that 0.500 − x ≈ 0.500. Then 4x² = 4.0 × 10⁻⁶ × 0.500 = 2.0 × 10⁻⁶, so x² = 5.0 × 10⁻⁷ and x = 7.07 × 10⁻⁴ mol L⁻¹.
6. **Answer.** [A] = 2x = **1.4 × 10⁻³ mol L⁻¹** (2 significant figures, matching K). [A₂] = 0.500 − 0.000707 = 0.499 mol L⁻¹, almost unchanged.

**Check the shortcut.** x is 7.07 × 10⁻⁴ ÷ 0.500 × 100 = 0.14% of the starting value, far below 5%. Solving the full quadratic gives x = 7.066 × 10⁻⁴, a difference of under 0.1%. The shortcut is safe here. If x had come out larger than about 5% of the starting value, you would need to solve the quadratic instead.

## Worked example 3: Q > K, using partial pressures

**Question.** Two fictional isomers interconvert in the gas phase: E(g) ⇌ F(g), with Kp = 3.0. A container starts with P_E = 0.20 atm and P_F = 1.00 atm. Find the equilibrium partial pressures.

1. **Direction.** Qp = P_F / P_E = 1.00 / 0.20 = 5.0. Since Q > K, the reaction goes **backwards**: F is used up and E forms.
2. **ICE table** (signs set by step 1).

| | E | F |
|---|---|---|
| I (atm) | 0.20 | 1.00 |
| C (atm) | +x | −x |
| E (atm) | 0.20 + x | 1.00 − x |

3. **Substitute and solve.** (1.00 − x) / (0.20 + x) = 3.0, so 1.00 − x = 0.60 + 3x, 4x = 0.40 and x = 0.10 atm.
4. **Answer.** P_E = **0.30 atm**, P_F = **0.90 atm**.

**Check.** 0.90 / 0.30 = 3.0. ✓ The total pressure stays at 1.20 atm, which makes sense: one molecule of E becomes one molecule of F, so the number of gas molecules does not change.

**What if you set the signs the wrong way?** If you assume a forward reaction (−x for E, +x for F), the algebra still works and you get x = −0.10. A negative x is the algebra telling you the reaction went the other way. Checking Q first avoids the confusion.

## Choosing a method

| Situation | Method |
|---|---|
| Both sides of the K expression are perfect squares | Take the square root (Worked example 1) |
| K is very small compared with the starting concentration c | Assume c − x ≈ c, then check x is under 5% of c (Worked example 2) |
| Expression is linear in x | Rearrange directly (Worked example 3) |
| K is very large | Let the reaction go to completion on paper, then let a small amount come back (see Practice Q7) |
| None of these | Solve the quadratic |

## Common misconceptions

- **"Put the initial concentrations into K."** Initial values give Q, not K. Only equilibrium values satisfy K.
- **"Every species changes by x."** The changes follow the coefficients. For 2 XY the change is 2x, and it is squared in the K expression as (2x)².
- **"Equilibrium means equal concentrations."** It means constant concentrations. In Worked example 1 there is five times as much XY as X₂ at equilibrium.
- **"At equilibrium the reactions stop."** Both reactions continue at equal rates. Nothing changes overall, but particles still react.
- **Using moles instead of concentrations in Kc.** Divide by the volume first unless the question says the volume is 1.00 L.
- **Using the small-x shortcut when K is not small.** If x comes out bigger than about 5% of the starting value, or bigger than the starting value itself, the shortcut has failed.
- **Assuming the reaction always goes forwards.** Always compare Q with K first. Starting with products can make the reaction run backwards.
- **Including solids or liquids in the ICE table.** Pure solids and liquids do not appear in K, so their amounts do not enter the calculation.

## Where this leads

Next, [Topic 7.8](/advanced-course-resources/chemistry/7-8-representations-equilibrium-study-guide/) shows the same calculations with particle diagrams: you count particles in a box instead of reading concentrations from a table. Q-versus-K reasoning returns in Topics 7.9 and 7.10 on Le Châtelier's principle, and ICE tables are the main tool for weak acids, weak bases and buffers in Unit 8. Try the [practice questions](/advanced-course-resources/chemistry/7-7-calculating-equilibrium-concentrations-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/7-7-calculating-equilibrium-concentrations-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/7-7-calculating-equilibrium-concentrations-checklist/) to consolidate.
