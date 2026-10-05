---
resourceId: "mb-ap-chem-7.5-study-guide"
title: "Magnitude of the Equilibrium Constant: Study Guide (Chemistry 7.5)"
description: "Learn what a very large, very small or middle-sized equilibrium constant tells you about the mixture at equilibrium, and how to use K to justify a claim about it."
course: "chemistry"
unit: 7
topics: ["7.5"]
resourceType: "study-guide"
prerequisites:
  - "Writing Kc and Kp expressions from a balanced equation (Topic 7.3)"
  - "Calculating K from equilibrium concentrations or partial pressures (Topic 7.4)"
  - "Scientific notation and powers of ten"
prerequisiteResources: ["mb-ap-chem-7.4-study-guide"]
learningObjectives:
  - "Explain why a very large K means the equilibrium mixture is mostly products and the reaction goes essentially to completion"
  - "Explain why a very small K means the equilibrium mixture is mostly reactants and the reaction barely proceeds"
  - "Estimate the composition of a simple equilibrium mixture from the size of K"
  - "Use the value of K, with a short calculation, to justify or reject a claim about an equilibrium mixture"
  - "Explain why K says nothing about how fast equilibrium is reached"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Powers of ten and square roots only; K values on this page are invented for practice and are written without units"
related: ["mb-ap-chem-7.5-revision-notes", "mb-ap-chem-7.5-practice", "mb-ap-chem-7.5-checklist"]
next: "mb-ap-chem-7.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "K has products on top and reactants on the bottom, so its size tells you which side the equilibrium mixture favours."
  - "Very large K (much greater than 1): mostly products; the reaction goes essentially to completion."
  - "Very small K (much less than 1): mostly reactants; the reaction barely proceeds, but a tiny amount of product is still there."
  - "K near 1: reactants and products are both present in significant amounts."
  - "K tells you where the reaction ends up, not how fast it gets there."
faqs:
  - question: "How large is \"very large\"?"
    answer: "There is no official cut-off. A common rough guide is that K above about 10³ means mostly products and K below about 10⁻³ means mostly reactants. Exam questions use values far from 1 (such as 10¹⁵ or 10⁻¹²) when they want you to say 'essentially complete' or 'barely proceeds'."
  - question: "Does a small K mean there is no product at all?"
    answer: "No. If there were no product, the K expression would equal zero, not a small number. A small K means the product concentrations are tiny compared with the reactant concentrations, but they are not zero."
  - question: "Does K change if I add more reactant?"
    answer: "No. At a fixed temperature K is constant. Adding reactant changes the concentrations, and the mixture shifts until the ratio in the K expression equals K again (Topics 7.9 and 7.10)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What the size of K tells you

In [Topic 7.4](/advanced-course-resources/chemistry/7-4-calculating-equilibrium-constant-study-guide/) you calculated K from measured concentrations or partial pressures. Now you will read K the other way round: from its **size**, you can say what the equilibrium mixture looks like before doing any detailed calculation.

The key is the shape of the expression. For a reaction aA + bB ⇌ cC + dD:

Kc = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)

Products are on the top and reactants are on the bottom. So:

- If K is **very large**, the top must be much bigger than the bottom. At equilibrium the mixture is **mostly products**. The reaction goes **essentially to completion**.
- If K is **very small**, the top must be much smaller than the bottom. At equilibrium the mixture is **mostly reactants**. The reaction **barely proceeds**.
- If K is **close to 1**, neither side dominates. Reactants and products are **both present in significant amounts**.

The same reasoning works for Kp, which uses partial pressures instead of concentrations. In this course K values are written without units.

| Size of K | What the equilibrium mixture contains | Words to use |
|---|---|---|
| K ≫ 1 (for example 10¹⁰) | almost all products, a trace of reactants | product-favoured; essentially complete |
| K ≈ 1 (roughly 10⁻³ to 10³) | significant amounts of both | neither side strongly favoured |
| K ≪ 1 (for example 10⁻¹⁰) | almost all reactants, a trace of products | reactant-favoured; barely proceeds |

The limits 10⁻³ and 10³ are a rough guide, not a rule. What matters is how far K is from 1, measured in powers of ten.

## Seeing it with particles

The simplest case is a reaction with one reactant particle turning into one product particle, A ⇌ B. Both species are in the same container, so the volume cancels and K is just the ratio of particle numbers:

K = [B] / [A] = (number of B) / (number of A)

<figure>
<svg viewBox="0 0 640 240" role="img" aria-labelledby="k-size-title k-size-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="k-size-title">Equilibrium mixtures for A ⇌ B with three different values of K</title>
<desc id="k-size-desc">Three boxes, each holding 12 particles at equilibrium. A particles are drawn as open circles and B particles as filled squares. Left box, K equals 0.2: 10 A and 2 B, reactant-favoured. Middle box, K equals 1: 6 A and 6 B, both significant. Right box, K equals 5: 2 A and 10 B, product-favoured.</desc>
<rect x="10" y="40" width="200" height="150" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="110" y="28" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">K = 0.2</text>
<circle cx="45" cy="75" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="88" cy="75" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="131" cy="75" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="174" cy="75" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="45" cy="117" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="88" cy="117" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="120" y="106" width="22" height="22" fill="#1d2b44"/>
<circle cx="174" cy="117" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="45" cy="159" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="88" cy="159" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="120" y="148" width="22" height="22" fill="#1d2b44"/>
<circle cx="174" cy="159" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="110" y="212" text-anchor="middle" font-size="13" fill="#1d2b44">10 A, 2 B</text>
<text x="110" y="230" text-anchor="middle" font-size="13" fill="#1d2b44">Reactant-favoured</text>
<rect x="220" y="40" width="200" height="150" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="28" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">K = 1</text>
<circle cx="255" cy="75" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="287" y="64" width="22" height="22" fill="#1d2b44"/>
<circle cx="341" cy="75" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="373" y="64" width="22" height="22" fill="#1d2b44"/>
<rect x="244" y="106" width="22" height="22" fill="#1d2b44"/>
<circle cx="298" cy="117" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="330" y="106" width="22" height="22" fill="#1d2b44"/>
<circle cx="384" cy="117" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="255" cy="159" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="287" y="148" width="22" height="22" fill="#1d2b44"/>
<rect x="330" y="148" width="22" height="22" fill="#1d2b44"/>
<circle cx="384" cy="159" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="212" text-anchor="middle" font-size="13" fill="#1d2b44">6 A, 6 B</text>
<text x="320" y="230" text-anchor="middle" font-size="13" fill="#1d2b44">Both significant</text>
<rect x="430" y="40" width="200" height="150" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="530" y="28" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">K = 5</text>
<rect x="454" y="64" width="22" height="22" fill="#1d2b44"/>
<rect x="497" y="64" width="22" height="22" fill="#1d2b44"/>
<rect x="540" y="64" width="22" height="22" fill="#1d2b44"/>
<rect x="583" y="64" width="22" height="22" fill="#1d2b44"/>
<circle cx="465" cy="117" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="497" y="106" width="22" height="22" fill="#1d2b44"/>
<rect x="540" y="106" width="22" height="22" fill="#1d2b44"/>
<rect x="583" y="106" width="22" height="22" fill="#1d2b44"/>
<rect x="454" y="148" width="22" height="22" fill="#1d2b44"/>
<circle cx="508" cy="159" r="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="540" y="148" width="22" height="22" fill="#1d2b44"/>
<rect x="583" y="148" width="22" height="22" fill="#1d2b44"/>
<text x="530" y="212" text-anchor="middle" font-size="13" fill="#1d2b44">2 A, 10 B</text>
<text x="530" y="230" text-anchor="middle" font-size="13" fill="#1d2b44">Product-favoured</text>
</svg>
<figcaption>Figure 1. Each box is an equilibrium mixture of A (open circles) and B (filled squares) for A ⇌ B. K = number of B ÷ number of A: 2 ÷ 10 = 0.2, 6 ÷ 6 = 1 and 10 ÷ 2 = 5.</figcaption>
</figure>

Now imagine K = 10⁶. To draw it fairly you would need a million B particles for every A particle. In any box you can draw, you would see only B. That is what "essentially to completion" means: the reactant has not vanished, but there is far too little left to notice or to matter in a calculation.

For A ⇌ B you can turn K straight into a percentage. If [B]/[A] = K, the fraction of the material present as B is K / (1 + K).

| K | Percent present as product B | Percent left as reactant A |
|---|---|---|
| 10⁻⁶ | 0.0001 % | 99.9999 % |
| 10⁻² | 0.99 % | 99.0 % |
| 1 | 50 % | 50 % |
| 10² | 99.0 % | 0.99 % |
| 10⁶ | 99.9999 % | 0.0001 % |

Two things stand out. First, a change of K by a factor of 100 on either side of 1 already moves the mixture to about 99 % one side. Second, the table is symmetrical: K = 10⁶ and K = 10⁻⁶ are mirror images. A reaction with a very large K has a reverse reaction with a very small K, which you will see properly in [Topic 7.6](/advanced-course-resources/chemistry/7-6-properties-equilibrium-constant-study-guide/).

## Worked example 1: is the reaction essentially complete?

**Question.** A compound A rearranges into its isomer B in solution: A(aq) ⇌ B(aq), K = 2.4 × 10⁵ at 25 °C (invented value). A solution starts with [A] = 0.150 M (mol L⁻¹) and no B. A student claims, "At equilibrium essentially all of A has turned into B." Use K to justify or reject the claim.

1. **Write the expression.** K = [B] / [A] = 2.4 × 10⁵.
2. **Use the 1 : 1 ratio.** Every A that reacts gives one B, so [A] + [B] = 0.150 M at all times.
3. **Combine.** [B] = 2.4 × 10⁵ × [A], so [A] + 2.4 × 10⁵[A] = 0.150 M.
   [A] = 0.150 M ÷ (1 + 2.4 × 10⁵) = 6.25 × 10⁻⁷ M.
4. **Find B.** [B] = 0.150 M − 6.25 × 10⁻⁷ M = 0.150 M (to 3 significant figures).
5. **Percentage left.** 6.25 × 10⁻⁷ ÷ 0.150 × 100 = 4.2 × 10⁻⁴ % of A is unreacted.

**Answer.** The claim is **justified**. K is very large, so the equilibrium lies far towards B. About 0.0004 % of A remains; [A] ≈ 6.3 × 10⁻⁷ M while [B] ≈ 0.150 M.

**Check.** [B]/[A] = 0.150 ÷ 6.25 × 10⁻⁷ = 2.4 × 10⁵, which is K. Notice the careful wording: "essentially all", not "all". Some A is always present, because the reverse reaction B → A keeps going at equilibrium.

## Worked example 2: how much product does a tiny K allow?

**Question.** A gas AB can decompose: 2 AB(g) ⇌ A₂(g) + B₂(g), Kc = 2.5 × 10⁻⁹ at 400 K (invented value). A sealed flask that started with pure AB reaches equilibrium with [AB] = 0.80 M. Find [A₂] and [B₂] at equilibrium, and explain what the answer shows about the size of K.

1. **Write the expression.** Kc = [A₂][B₂] / [AB]².
2. **Use the equation.** A₂ and B₂ form in a 1 : 1 ratio from pure AB, so [A₂] = [B₂] = x.
3. **Substitute.** 2.5 × 10⁻⁹ = x² / (0.80)² = x² / 0.64.
4. **Solve.** x² = 2.5 × 10⁻⁹ × 0.64 = 1.6 × 10⁻⁹, so x = √(1.6 × 10⁻⁹) = 4.0 × 10⁻⁵ M.

**Answer.** [A₂] = [B₂] = 4.0 × 10⁻⁵ M.

**Interpretation.** The product concentrations are about 20 000 times smaller than [AB] (0.80 ÷ 4.0 × 10⁻⁵ = 2.0 × 10⁴). Making 4.0 × 10⁻⁵ M of A₂ used only 8.0 × 10⁻⁵ M of AB, so the flask started at about 0.80008 M AB and almost none of it reacted. This is what a very small K means: the reaction **barely proceeds**. But the products are **not zero**. If they were, Kc would be 0, not 2.5 × 10⁻⁹.

**Check.** (4.0 × 10⁻⁵)² ÷ 0.64 = 2.5 × 10⁻⁹ ✓.

## Comparing K values fairly

The rough guide works best when you compare reactions whose K expressions have the same shape, such as two reactions that are both A ⇌ B type. Be careful in three situations.

**1. Different numbers of particles on each side.** For P(g) ⇌ 2 R(g), Kc = [R]² / [P]. Suppose Kc = 1.0. Both of these mixtures are at equilibrium:

| [P] (M) | [R] (M) | [R]² / [P] | Ratio [R] / [P] |
|---|---|---|---|
| 1.0 | 1.0 | 1.0 | 1 |
| 0.040 | 0.20 | 1.0 | 5 |

So "K = 1" does not always mean "equal amounts". When the powers in the expression differ, the actual ratio also depends on how concentrated the mixture is. Values of K very far from 1 (such as 10¹² or 10⁻¹²) still tell you clearly which side is favoured, because no sensible concentration can cancel out twelve powers of ten.

**2. Temperature.** K is constant only at one temperature. Always quote K with its temperature, and never compare a K at 300 K with a K at 800 K as though they described the same conditions.

**3. Kc and Kp.** A question may give Kc or Kp. Use the one given, and read "large" or "small" from that value. You will not be asked to convert one into the other in this course.

## K tells you "where", not "how fast"

The size of K is about the **position** of equilibrium: what the mixture looks like once it has stopped changing. It says nothing about the **rate** at which the mixture gets there. Rate depends on activation energy and the mechanism ([Unit 5](/advanced-course-resources/chemistry/5-1-reaction-rates-study-guide/)).

A familiar example: a mixture of hydrogen and oxygen gases can sit at room temperature with no noticeable change, even though the reaction to form water is extremely product-favoured. The activation energy is high, so almost no collisions succeed. A spark supplies enough energy and the mixture can react explosively. The large K was always there; the speed was the problem.

A catalyst works the same way in reverse: it lowers the activation energy, so equilibrium is reached faster, but it does not change K or the final composition of the mixture.

## Common misconceptions

- **"A large K means a fast reaction."** No. K describes the equilibrium mixture, not the rate. A reaction with an enormous K can be too slow to observe.
- **"A small K means no products form."** No. A small K means very little product. If the product concentration were zero, the expression would equal zero.
- **"Essentially complete means the reactant is used up."** No. A trace of reactant always remains, and the forward and reverse reactions keep running at equal rates (Topic 7.1).
- **"K = 1 means equal concentrations."** Only when the expression has the same powers top and bottom, as in A ⇌ B. For P ⇌ 2R, K = 1 can describe many different ratios.
- **"Adding more reactant makes K bigger."** No. Adding a substance changes Q, not K. Only a change of temperature changes K.
- **Comparing K values without thinking about the expression.** A K of 10 for one equation and a K of 100 for an equation with different powers cannot be ranked as "ten times more product-favoured".

## Where this leads

Next, [Topic 7.6](/advanced-course-resources/chemistry/7-6-properties-equilibrium-constant-study-guide/) shows how K changes when you reverse an equation, multiply it or add equations together. Then Topic 7.7 uses K to calculate equilibrium concentrations, often making use of exactly the "very small K" idea from Worked example 2. Try the [practice questions](/advanced-course-resources/chemistry/7-5-magnitude-equilibrium-constant-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/7-5-magnitude-equilibrium-constant-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/7-5-magnitude-equilibrium-constant-checklist/) to consolidate.
