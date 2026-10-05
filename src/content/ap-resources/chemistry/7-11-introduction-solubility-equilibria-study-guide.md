---
resourceId: "mb-ap-chem-7.11-study-guide"
title: "Introduction to Solubility Equilibria: Study Guide (Chemistry 7.11)"
description: "Write K_sp expressions for sparingly soluble salts, calculate molar solubility from K_sp and K_sp from solubility data, and compare how soluble different salts are."
course: "chemistry"
unit: 7
topics: ["7.11"]
resourceType: "study-guide"
prerequisites:
  - "Writing equilibrium constant expressions and leaving out pure solids (Topic 7.4)"
  - "Comparing Q with K to predict the direction of change (Topic 7.10)"
  - "Precipitation reactions and the ions that are always soluble (Topic 4.7)"
prerequisiteResources: ["mb-ap-chem-7.10-study-guide"]
learningObjectives:
  - "Describe dissolving a salt as a reversible process that reaches a dynamic equilibrium in a saturated solution"
  - "Write the K_sp expression for any ionic solid from its formula"
  - "Calculate the molar solubility of a salt, in mol L⁻¹ and in g L⁻¹, from its K_sp"
  - "Calculate K_sp from a measured solubility or from the measured concentration of one ion"
  - "Rank salts by solubility, using K_sp directly only when the ion ratios match"
  - "Link K_sp values greater than 1 to the salts you know are soluble"
skills: ["5"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Molar masses: Ag 107.87, Cl 35.45 g mol⁻¹. K_sp of AgCl = 1.8 × 10⁻¹⁰ at 25 °C. Salts named with letters (Z, Q) are fictional. Use the xʸ or ˣ√ key for roots and keep unrounded values to the end"
related: ["mb-ap-chem-7.11-revision-notes", "mb-ap-chem-7.11-practice", "mb-ap-chem-7.11-checklist"]
next: "mb-ap-chem-7.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A saturated solution in contact with undissolved salt is a dynamic equilibrium: the salt dissolves and precipitates at equal rates."
  - "K_sp is the product of the ion concentrations at equilibrium, each raised to its coefficient. The solid is left out."
  - "Molar solubility s is the moles of salt that dissolve per litre of saturated solution. For MₓAᵧ, K_sp = (xs)ˣ(ys)ʸ."
  - "Smaller K_sp means less soluble only when the salts have the same ion ratio. Otherwise, calculate s for each."
  - "K_sp greater than 1 matches a soluble salt, such as any sodium, potassium, ammonium or nitrate salt."
faqs:
  - question: "Is molar solubility the same as K_sp?"
    answer: "No. Molar solubility s is a concentration in mol L⁻¹: how much salt dissolves. K_sp is an equilibrium constant built from the ion concentrations. For a 1:1 salt K_sp = s², so s is the square root of K_sp, not K_sp itself."
  - question: "Why does the amount of solid at the bottom not matter?"
    answer: "A pure solid has a constant 'concentration', so it is left out of the K_sp expression. Once the solution is saturated, adding more solid gives you more solid at the bottom, not more ions in solution."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Dissolving is an equilibrium too

In [Topic 4.7](/advanced-course-resources/chemistry/4-7-types-chemical-reactions-study-guide/) you sorted ionic compounds into "soluble" and "forms a precipitate". That is a useful first picture, but it is too sharp. Even a classic precipitate such as silver chloride dissolves a little. Put solid AgCl in water and a tiny amount of it breaks up into ions:

AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)

At first only dissolving happens. As ions build up in the water, some of them meet at the surface of the solid and join the lattice again: that is precipitation. The rate of precipitation rises as the ion concentrations rise. Eventually the two rates are equal. From then on the concentrations of Ag⁺ and Cl⁻ stay constant, even though ions keep leaving and rejoining the solid. This is a **dynamic equilibrium**, just like the gas-phase equilibria earlier in this unit.

A solution in this state is **saturated**. The test for a saturated solution is simple: undissolved solid stays in contact with the solution and its amount no longer changes.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="sat-title sat-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sat-title">A saturated solution of silver chloride</title>
<desc id="sat-desc">A beaker of water with a layer of solid silver chloride at the bottom. Silver ions and chloride ions are spread through the water above it. A solid upward arrow from the solid is labelled dissolving; a dashed downward arrow back to the solid is labelled precipitating. A note says that at equilibrium the two rates are equal, so the ion concentrations stay constant.</desc>
<defs>
<pattern id="hatch711" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2"/></pattern>
<marker id="ar711" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<path d="M40 30 V230 H300 V30" fill="none" stroke="#1d2b44" stroke-width="3"/>
<line x1="42" y1="60" x2="298" y2="60" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 4"/>
<text x="170" y="52" text-anchor="middle" font-size="12" fill="#1d2b44">water surface</text>
<rect x="42" y="200" width="256" height="28" fill="url(#hatch711)" stroke="#1d2b44" stroke-width="1.5"/>
<text x="170" y="252" text-anchor="middle" font-size="13" fill="#1d2b44">undissolved AgCl(s)</text>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<circle cx="70" cy="90" r="13" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="70" y="94">Ag⁺</text>
<circle cx="120" cy="130" r="13" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="3 2"/><text x="120" y="134">Cl⁻</text>
<circle cx="250" cy="95" r="13" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="3 2"/><text x="250" y="99">Cl⁻</text>
<circle cx="265" cy="160" r="13" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="265" y="164">Ag⁺</text>
<circle cx="80" cy="170" r="13" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="3 2"/><text x="80" y="174">Cl⁻</text>
<circle cx="215" cy="125" r="13" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="215" y="129">Ag⁺</text>
</g>
<path d="M155 195 V115" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ar711)"/>
<path d="M180 115 V193" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#ar711)"/>
<text x="150" y="105" text-anchor="end" font-size="12" fill="#1d2b44">dissolving</text>
<text x="186" y="105" font-size="12" fill="#1d2b44">precipitating</text>
<g font-size="14" fill="#1d2b44">
<text x="330" y="70" font-weight="600">At equilibrium:</text>
<text x="330" y="96">rate of dissolving = rate of precipitating</text>
<text x="330" y="124">[Ag⁺] and [Cl⁻] stay constant</text>
<text x="330" y="152">K_sp = [Ag⁺][Cl⁻]</text>
<text x="330" y="180">The solid does not appear in K_sp,</text>
<text x="330" y="200">but some must be present.</text>
</g>
</svg>
<figcaption>Figure 1. A saturated AgCl solution. Solid arrow: ions leave the lattice (dissolving). Dashed arrow: ions rejoin it (precipitating). Ag⁺ ions are drawn with solid outlines and Cl⁻ ions with dashed outlines.</figcaption>
</figure>

## The solubility-product constant, K_sp

Because dissolving is a reversible reaction at equilibrium, you can write an equilibrium constant for it. It is called the **solubility-product constant**, **K_sp**. Write it exactly as you learned in Topic 7.4:

1. Write the dissolving equation with the solid on the left and the separate aqueous ions on the right.
2. Multiply the equilibrium ion concentrations together, each raised to the power of its coefficient.
3. Leave out the solid. A pure solid has no concentration term in K.

| Salt | Dissolving equation | K_sp expression |
|---|---|---|
| AgCl | AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq) | [Ag⁺][Cl⁻] |
| ZF₂ (fictional) | ZF₂(s) ⇌ Z²⁺(aq) + 2 F⁻(aq) | [Z²⁺][F⁻]² |
| Ag₂CO₃ | Ag₂CO₃(s) ⇌ 2 Ag⁺(aq) + CO₃²⁻(aq) | [Ag⁺]²[CO₃²⁻] |
| M₃(PO₄)₂ (any 3:2 salt) | M₃(PO₄)₂(s) ⇌ 3 M²⁺(aq) + 2 PO₄³⁻(aq) | [M²⁺]³[PO₄³⁻]² |

The name says what it is: a **product** of ion concentrations. There is no denominator, because the only "reactant" is the solid. Like every K, the value of K_sp depends on temperature, and tables quote it at a stated temperature, usually 25 °C.

## Molar solubility and how it links to K_sp

The **molar solubility**, s, is the number of moles of the salt that dissolve to make one litre of saturated solution. Its unit is mol L⁻¹ (M). To link s to K_sp, follow the formula:

- If s mol of ZF₂ dissolves per litre, it releases s mol of Z²⁺ and **2s** mol of F⁻ per litre.
- So K_sp = [Z²⁺][F⁻]² = (s)(2s)² = 4s³.

The two places students lose marks are the **coefficient inside the bracket** (2s, not s) and the **power outside** (squared). For a general salt MₓAᵧ:

K_sp = (xs)ˣ (ys)ʸ

| Ion ratio | Example formula | [cation], [anion] | K_sp in terms of s |
|---|---|---|---|
| 1:1 | AgCl | s, s | s² |
| 1:2 or 2:1 | ZF₂, Ag₂CO₃ | s and 2s | 4s³ |
| 1:3 | MX₃ | s, 3s | 27s⁴ |
| 3:2 or 2:3 | M₃(PO₄)₂ | 3s, 2s | 108s⁵ |

Do not learn the right-hand column by heart. Build it each time from the dissolving equation; it takes ten seconds and you cannot get the numbers wrong.

<figure>
<svg viewBox="0 0 640 170" role="img" aria-labelledby="ksp-map-title ksp-map-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ksp-map-title">Moving between K_sp, molar solubility and solubility in grams per litre</title>
<desc id="ksp-map-desc">Three boxes in a row: K_sp, molar solubility s in moles per litre, and solubility in grams per litre. From K_sp to s, write ion concentrations in terms of s and solve for s. From s back to K_sp, substitute the ion concentrations into the K_sp expression. From s to grams per litre multiply by molar mass M; from grams per litre back to s divide by M.</desc>
<defs><marker id="b711" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="10" y="55" width="150" height="60" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="85" y="82" text-anchor="middle" font-size="16" font-weight="600" fill="#1d2b44">K_sp</text>
<text x="85" y="102" text-anchor="middle" font-size="13" fill="#1d2b44">(no unit)</text>
<rect x="245" y="55" width="150" height="60" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="320" y="82" text-anchor="middle" font-size="16" font-weight="600" fill="#1d2b44">Molar solubility, s</text>
<text x="320" y="102" text-anchor="middle" font-size="13" fill="#1d2b44">mol L⁻¹</text>
<rect x="480" y="55" width="150" height="60" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="555" y="82" text-anchor="middle" font-size="16" font-weight="600" fill="#1d2b44">Solubility</text>
<text x="555" y="102" text-anchor="middle" font-size="13" fill="#1d2b44">g L⁻¹</text>
<path d="M162 72 H240" stroke="#1d2b44" stroke-width="2" marker-end="url(#b711)"/>
<path d="M243 100 H165" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#b711)"/>
<path d="M397 72 H475" stroke="#1d2b44" stroke-width="2" marker-end="url(#b711)"/>
<path d="M478 100 H400" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#b711)"/>
<text x="202" y="30" text-anchor="middle" font-size="13" fill="#1d2b44">solve (xs)ˣ(ys)ʸ</text>
<text x="202" y="46" text-anchor="middle" font-size="13" fill="#1d2b44">= K_sp for s</text>
<text x="202" y="140" text-anchor="middle" font-size="13" fill="#1d2b44">substitute ion</text>
<text x="202" y="156" text-anchor="middle" font-size="13" fill="#1d2b44">concentrations</text>
<text x="437" y="45" text-anchor="middle" font-size="14" fill="#1d2b44">× M</text>
<text x="437" y="140" text-anchor="middle" font-size="14" fill="#1d2b44">÷ M</text>
</svg>
<figcaption>Figure 2. Solid arrows go from K_sp towards grams per litre; dashed arrows go back. Molar solubility is always the middle step, just as moles are in Topic 1.1.</figcaption>
</figure>

## Worked example 1: solubility from K_sp

**Question.** At 25 °C, K_sp for silver chloride is 1.8 × 10⁻¹⁰. Calculate the molar solubility of AgCl, and its solubility in grams per litre. (Ag 107.87, Cl 35.45 g mol⁻¹.)

1. Dissolving equation: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). Each mole that dissolves gives 1 mol Ag⁺ and 1 mol Cl⁻.
2. Let the molar solubility be s. At equilibrium [Ag⁺] = s and [Cl⁻] = s.
3. K_sp = [Ag⁺][Cl⁻] = s², so s = √(1.8 × 10⁻¹⁰) = 1.342 × 10⁻⁵ mol L⁻¹.
4. Molar mass: M(AgCl) = 107.87 + 35.45 = 143.32 g mol⁻¹.
5. Solubility in g L⁻¹ = 1.342 × 10⁻⁵ mol L⁻¹ × 143.32 g mol⁻¹ = 1.92 × 10⁻³ g L⁻¹.

**Answer.** s = 1.3 × 10⁻⁵ mol L⁻¹, which is 1.9 × 10⁻³ g L⁻¹ (2 significant figures, matching K_sp).

**Interpretation.** Under 2 mg of AgCl dissolves in a whole litre of water. That is why it counts as "insoluble" in Topic 4.7, but it is not zero: the solution above a silver chloride precipitate always contains some Ag⁺ and Cl⁻ ions.

## Worked example 2: K_sp from a measured solubility

**Question.** A student stirs excess solid ZF₂ (a fictional metal fluoride, M = 120.0 g mol⁻¹) with water at 25 °C until no more dissolves. She filters off the solid and evaporates exactly 250.0 mL of the clear saturated solution. The dry residue has a mass of 0.0360 g. Calculate K_sp for ZF₂ at 25 °C.

1. Moles dissolved: n = 0.0360 g ÷ 120.0 g mol⁻¹ = 3.000 × 10⁻⁴ mol.
2. Molar solubility: s = 3.000 × 10⁻⁴ mol ÷ 0.2500 L = 1.200 × 10⁻³ mol L⁻¹.
3. Ion concentrations from ZF₂(s) ⇌ Z²⁺(aq) + 2 F⁻(aq): [Z²⁺] = s = 1.200 × 10⁻³ M and [F⁻] = 2s = 2.400 × 10⁻³ M.
4. K_sp = [Z²⁺][F⁻]² = (1.200 × 10⁻³)(2.400 × 10⁻³)² = 6.91 × 10⁻⁹.

**Answer.** K_sp = 6.91 × 10⁻⁹ (3 significant figures).

**Check.** 4s³ = 4 × (1.200 × 10⁻³)³ = 6.91 × 10⁻⁹, the same. Two common wrong answers show why step 3 matters: forgetting the 2 in front of F⁻ gives s³ = 1.73 × 10⁻⁹ (four times too small); forgetting to square [F⁻] gives 2.88 × 10⁻⁶.

The same idea works if you are given the concentration of **one ion** instead of s. If an analysis showed [F⁻] = 2.400 × 10⁻³ M in the saturated solution, then s = [F⁻] ÷ 2 = 1.200 × 10⁻³ M, and you continue from step 3.

## Worked example 3: which salt is most soluble?

**Question.** Three fictional salts of the metal Q have these K_sp values at 25 °C: QX, 2.0 × 10⁻⁹; QY₂, 3.2 × 10⁻¹¹; Q₃W₂, 1.08 × 10⁻²³. Rank them from most to least soluble in water.

You cannot rank them by K_sp alone, because the expressions have different forms (s², 4s³, 108s⁵). Calculate s for each.

| Salt | K_sp in terms of s | Working | s (mol L⁻¹) |
|---|---|---|---|
| QX | s² | √(2.0 × 10⁻⁹) | 4.5 × 10⁻⁵ |
| QY₂ | 4s³ | ∛(3.2 × 10⁻¹¹ ÷ 4) = ∛(8.0 × 10⁻¹²) | 2.0 × 10⁻⁴ |
| Q₃W₂ | (3s)³(2s)² = 108s⁵ | ⁵√(1.08 × 10⁻²³ ÷ 108) = ⁵√(1.0 × 10⁻²⁵) | 1.0 × 10⁻⁵ |

**Answer.** Most soluble QY₂ > QX > Q₃W₂ least soluble.

**Interpretation.** QY₂ has a K_sp about 60 times *smaller* than QX, yet it is about 4.5 times *more* soluble. A small number raised to a higher power gives a much smaller product, so K_sp values only compare directly when the salts release ions in the same ratio. For two 1:1 salts, the smaller K_sp is always the less soluble salt; for a 1:1 salt against a 1:2 salt, you must calculate.

## Connecting K_sp to the solubility rules

Topic 4.7 told you that every sodium, potassium, ammonium and nitrate salt is soluble. K_sp puts a number on that statement. For a salt that dissolves freely, the ion concentrations in a saturated solution are large (often several mol L⁻¹), so the product of those concentrations is large too. As a rule of thumb for this course:

- **K_sp > 1:** a soluble salt. All the salts covered by the Topic 4.7 rule fall here.
- **K_sp much less than 1** (often 10⁻⁴ or smaller, and for some salts far smaller): a sparingly soluble salt, the kind that forms a precipitate when its ions are mixed.

You will not be asked to memorise further solubility rules; if a question needs a K_sp, it gives you one.

## Will a precipitate form? Using Q (Topic 7.10 applied)

The reaction quotient from [Topic 7.10](/advanced-course-resources/chemistry/7-10-reaction-quotient-le-ch-teliers-study-guide/) works for dissolving too. Calculate Q = [Ag⁺][Cl⁻] using the concentrations **just after mixing**, before any reaction:

- Q < K_sp: the solution is not saturated; no precipitate forms (more solid could dissolve).
- Q = K_sp: the solution is exactly saturated.
- Q > K_sp: there are too many ions; the reverse reaction (precipitation) happens until Q falls to K_sp.

**Example.** Mix 50.0 mL of 2.0 × 10⁻⁴ M AgNO₃ with 50.0 mL of 4.0 × 10⁻⁴ M NaCl. The volume doubles, so each concentration halves: [Ag⁺] = 1.0 × 10⁻⁴ M and [Cl⁻] = 2.0 × 10⁻⁴ M. Q = 2.0 × 10⁻⁸, which is about 110 times larger than K_sp = 1.8 × 10⁻¹⁰, so AgCl precipitates. With solutions 100 times more dilute, Q would be 2.0 × 10⁻¹², below K_sp, and the mixture would stay clear.

## Assumptions in these calculations

- The salt dissolves completely into the separate ions shown in the equation, and those ions do not react further with water. (Ions that do react, such as weak-acid anions, come up in Unit 8.)
- The solution is at the temperature the K_sp refers to.
- Undissolved solid is present, so the solution really is saturated.

These are the assumptions of the simple model used in this course. Measured solubilities of real salts can differ from the K_sp prediction when they are not met.

## Common misconceptions

- **"Insoluble means none dissolves."** Every ionic solid dissolves to some extent. "Insoluble" in Topic 4.7 means K_sp is very small.
- **"Smaller K_sp always means less soluble."** Only for salts with the same ion ratio. Worked example 3 shows a smaller K_sp with a larger solubility.
- **Writing [F⁻] = s for ZF₂.** Two fluoride ions are released per formula unit, so [F⁻] = 2s, and that 2 is then squared.
- **Putting the solid in the expression.** K_sp has no denominator; the solid is left out.
- **"Adding more solid increases the ion concentrations."** Once the solution is saturated, extra solid just sits at the bottom. Only a temperature change alters K_sp.
- **Confusing s with K_sp.** s is a concentration with a unit (mol L⁻¹); K_sp is an equilibrium constant. For AgCl, s = 1.3 × 10⁻⁵ M but K_sp = 1.8 × 10⁻¹⁰.
- **Mixing up units of solubility.** Check whether a question wants mol L⁻¹ or g L⁻¹, and use the molar mass to switch.

## Where this leads

Next, [Topic 7.12](/advanced-course-resources/chemistry/7-12-common-ion-effect-study-guide/) asks what happens to the solubility when one of the salt's ions is already in the water. Later, Topic 8.11 links solubility to pH and Unit 9 links it to free energy. Try the [practice questions](/advanced-course-resources/chemistry/7-11-introduction-solubility-equilibria-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/7-11-introduction-solubility-equilibria-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/7-11-introduction-solubility-equilibria-checklist/) to consolidate.
