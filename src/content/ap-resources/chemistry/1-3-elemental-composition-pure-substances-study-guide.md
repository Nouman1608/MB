---
resourceId: "mb-ap-chem-1.3-study-guide"
title: "Elemental Composition of Pure Substances: Study Guide (Chemistry 1.3)"
description: "Learn how molecules and formula units differ, why a pure compound always has the same mass ratio of elements, and how to turn mass data into an empirical formula."
course: "chemistry"
unit: 1
topics: ["1.3"]
resourceType: "study-guide"
prerequisites:
  - "Converting a mass into moles with n = m / M"
  - "Calculating molar mass from a formula"
prerequisiteResources: ["mb-ap-chem-1.2-study-guide"]
learningObjectives:
  - "Tell apart substances made of separate molecules and substances described by a formula unit"
  - "Use the law of definite proportions to predict or check the mass of an element in a pure sample"
  - "Calculate the percentage by mass of each element in a compound from its formula"
  - "Work out an empirical formula from percentage composition or from measured masses"
  - "Explain why mass composition gives the empirical formula but not, on its own, the molecular formula"
skills: ["2", "5"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Use the molar masses from the periodic table you are given; keep at least four significant figures in mole ratios before you decide on whole numbers"
related: ["mb-ap-chem-1.3-revision-notes", "mb-ap-chem-1.3-practice", "mb-ap-chem-1.3-checklist"]
next: "mb-ap-chem-1.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Some pure substances are made of separate molecules (H₂O); others are atoms or ions held in a fixed ratio, described by a formula unit (NaCl)."
  - "Law of definite proportions: every pure sample of a compound has the same mass ratio of its elements. Water is always 11.19% hydrogen by mass."
  - "The empirical formula is the lowest whole-number ratio of atoms. Glucose, C₆H₁₂O₆, has the empirical formula CH₂O."
  - "To find an empirical formula: grams of each element → moles → divide by the smallest → whole numbers."
  - "Mass composition fixes the atom ratio only, so different compounds can share one empirical formula."
faqs:
  - question: "Is the empirical formula always different from the molecular formula?"
    answer: "No. For water (H₂O) and carbon dioxide (CO₂) the two are the same, because the subscripts already have no common factor. They differ for compounds such as glucose (C₆H₁₂O₆, empirical formula CH₂O)."
  - question: "Why do I assume a 100 g sample when I am given percentages?"
    answer: "It makes each percentage equal to a mass in grams. 40.0% carbon becomes 40.0 g of carbon. Any sample size gives the same ratio, so 100 g is just the easiest choice."
  - question: "Does the law of definite proportions work for mixtures?"
    answer: "No. A mixture such as salt water can have any proportion of its parts. The law applies only to a pure compound. Mixtures are the subject of Topic 1.4."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What a pure substance is made of

A pure substance contains only one kind of particle. But "particle" means different things for different substances, and the formula tells you which.

- **Molecular substances** are made of separate molecules. Each molecule is a small group of atoms joined together. Water is made of H₂O molecules; each one has exactly 2 hydrogen atoms and 1 oxygen atom. Carbon dioxide is made of CO₂ molecules. The formula tells you what one molecule contains.
- **Substances described by a formula unit** have no separate molecules. Their atoms or ions are held together in a large, continuous structure, in a **fixed proportion**. Sodium chloride is a lattice of Na⁺ and Cl⁻ ions in a 1 : 1 ratio. Silicon dioxide, SiO₂, is a network of Si and O atoms in a 1 : 2 ratio. Here the formula describes the **ratio** of the particles, and the smallest group with that ratio is called a **formula unit**.

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="pure-title pure-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pure-title">Molecules compared with a lattice described by a formula unit</title>
<desc id="pure-desc">Left panel: three separate water molecules, each drawn as one circle labelled O joined to two circles labelled H, with space between the molecules. Each molecule has a dashed outline around it. Right panel: a four by three grid of touching circles, alternately labelled Na plus and Cl minus. There are no gaps or outlines separating groups. A note below says the formula NaCl gives the 1 to 1 ratio, not a separate particle.</desc>
<text x="160" y="22" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Molecular substance: water, H₂O</text>
<g stroke="#1d2b44" stroke-width="2">
<line x1="70" y1="80" x2="45" y2="105"/><line x1="70" y1="80" x2="95" y2="105"/>
<line x1="210" y1="70" x2="185" y2="95"/><line x1="210" y1="70" x2="235" y2="95"/>
<line x1="140" y1="160" x2="115" y2="185"/><line x1="140" y1="160" x2="165" y2="185"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="70" cy="80" r="18"/><circle cx="45" cy="105" r="11"/><circle cx="95" cy="105" r="11"/>
<circle cx="210" cy="70" r="18"/><circle cx="185" cy="95" r="11"/><circle cx="235" cy="95" r="11"/>
<circle cx="140" cy="160" r="18"/><circle cx="115" cy="185" r="11"/><circle cx="165" cy="185" r="11"/>
</g>
<g font-size="13" text-anchor="middle" fill="#1d2b44">
<text x="70" y="85">O</text><text x="45" y="109">H</text><text x="95" y="109">H</text>
<text x="210" y="75">O</text><text x="185" y="99">H</text><text x="235" y="99">H</text>
<text x="140" y="165">O</text><text x="115" y="189">H</text><text x="165" y="189">H</text>
</g>
<g fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4">
<rect x="25" y="52" width="92" height="72" rx="10"/><rect x="165" y="42" width="92" height="72" rx="10"/><rect x="95" y="132" width="92" height="72" rx="10"/>
</g>
<line x1="320" y1="10" x2="320" y2="220" stroke="#1d2b44" stroke-width="1"/>
<text x="480" y="22" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Formula unit: sodium chloride, NaCl</text>
<g stroke="#1d2b44" stroke-width="2">
<rect x="380" y="45" width="200" height="150" fill="#fdf6e3"/>
</g>
<g font-size="12" text-anchor="middle" fill="#1d2b44" stroke="#1d2b44" stroke-width="1.5">
<circle cx="405" cy="70" r="22" fill="#ffffff"/><circle cx="455" cy="70" r="22" fill="#ffffff"/><circle cx="505" cy="70" r="22" fill="#ffffff"/><circle cx="555" cy="70" r="22" fill="#ffffff"/>
<circle cx="405" cy="120" r="22" fill="#ffffff"/><circle cx="455" cy="120" r="22" fill="#ffffff"/><circle cx="505" cy="120" r="22" fill="#ffffff"/><circle cx="555" cy="120" r="22" fill="#ffffff"/>
<circle cx="405" cy="170" r="22" fill="#ffffff"/><circle cx="455" cy="170" r="22" fill="#ffffff"/><circle cx="505" cy="170" r="22" fill="#ffffff"/><circle cx="555" cy="170" r="22" fill="#ffffff"/>
</g>
<g font-size="12" text-anchor="middle" fill="#1d2b44">
<text x="405" y="74">Na⁺</text><text x="455" y="74">Cl⁻</text><text x="505" y="74">Na⁺</text><text x="555" y="74">Cl⁻</text>
<text x="405" y="124">Cl⁻</text><text x="455" y="124">Na⁺</text><text x="505" y="124">Cl⁻</text><text x="555" y="124">Na⁺</text>
<text x="405" y="174">Na⁺</text><text x="455" y="174">Cl⁻</text><text x="505" y="174">Na⁺</text><text x="555" y="174">Cl⁻</text>
</g>
<text x="480" y="215" text-anchor="middle" font-size="13" fill="#1d2b44">NaCl = 1 Na⁺ : 1 Cl⁻ ratio, not a separate particle</text>
</svg>
<figcaption>Figure 1. Left: water is made of separate molecules (dashed outlines). Right: sodium chloride is a continuous lattice, which in reality extends in three dimensions; its formula only gives the 1 : 1 ratio of ions.</figcaption>
</figure>

Both kinds of substance have a **fixed composition**. That fixed composition is what the rest of this topic is about.

## The law of definite proportions

Take water from a tap, from melted ice or from a reaction in the lab. If it is pure, every sample has the same mass ratio of oxygen to hydrogen. This is the **law of definite proportions**: in any pure sample of a compound, the masses of its elements are always in the same ratio.

The reason is the formula. Every H₂O molecule contains 2 H atoms (2 × 1.008 = 2.016 amu) and 1 O atom (16.00 amu). Adding more molecules adds more of both in the same ratio.

| Mass of pure water | Mass of hydrogen | Mass of oxygen | Ratio O : H |
|---|---|---|---|
| 9.00 g | 1.007 g | 7.993 g | 7.94 : 1 |
| 250.0 g | 27.98 g | 222.0 g | 7.94 : 1 |
| 1000 g | 111.9 g | 888.1 g | 7.94 : 1 |

### Percentage by mass from a formula

The percentage by mass of an element is the mass of that element in one mole of the compound, divided by the molar mass, times 100.

> % of element = (number of atoms in the formula × atomic mass) ÷ molar mass × 100

For water: M = 2(1.008) + 16.00 = 18.016 g mol⁻¹.

- % H = 2.016 ÷ 18.016 × 100 = **11.19%**
- % O = 16.00 ÷ 18.016 × 100 = **88.81%**

The percentages add to 100%, which is a quick check.

### Same elements, different compound

Hydrogen peroxide, H₂O₂, is also made of hydrogen and oxygen. But its formula is different, so its mass ratio is different: % H = 2.016 ÷ 34.016 × 100 = 5.93%, and the O : H mass ratio is 15.87 : 1, about twice the value for water. Measuring the mass ratio is therefore a way to tell compounds apart, or to test whether a sample is the compound it claims to be.

A **mixture** does not follow this law. Salt water can be 1% salt or 20% salt. If a sample's composition does not match the fixed value for the pure compound, the sample is either a different compound or not pure. You will meet mixtures and purity in Topic 1.4.

## The empirical formula

The **empirical formula** lists the elements in a compound with the **lowest whole-number ratio** of their atoms.

| Compound | Formula | Divide by | Empirical formula |
|---|---|---|---|
| Glucose | C₆H₁₂O₆ | 6 | CH₂O |
| Hydrogen peroxide | H₂O₂ | 2 | HO |
| Butane | C₄H₁₀ | 2 | C₂H₅ |
| Water | H₂O | (no common factor) | H₂O |

Notice two things:

- For a molecular substance, the **molecular formula** gives the actual number of atoms in one molecule. The empirical formula is the molecular formula with all subscripts divided by their highest common factor. Sometimes the two are the same (water).
- For a substance described by a formula unit, such as NaCl or SiO₂, the formula is already the lowest ratio. It is an empirical formula.

The key link for this topic: **the elemental composition by mass fixes the empirical formula**. Glucose (C₆H₁₂O₆) and methanal (CH₂O) have exactly the same percentage composition (40.00% C, 6.71% H, 53.29% O) because they share the empirical formula CH₂O. Mass data alone cannot tell them apart. To get the molecular formula you also need the molar mass. That extra step is background here; it is not part of the Topic 1.3 objective.

## From mass data to an empirical formula

A formula is a ratio of **atoms**, but an analysis gives you **masses**. Atoms of different elements have different masses, so you must convert each mass into moles before you compare.

<figure>
<svg viewBox="0 0 640 200" role="img" aria-labelledby="emp-title emp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="emp-title">Four steps from mass data to an empirical formula</title>
<desc id="emp-desc">Four boxes joined by arrows from left to right. Box 1: mass of each element in grams; if you have percentages, assume 100 g. Arrow labelled divide by atomic mass. Box 2: moles of each element. Arrow labelled divide by the smallest. Box 3: mole ratio. Arrow labelled multiply if not whole. Box 4: empirical formula, whole numbers.</desc>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<rect x="5" y="60" width="130" height="80" rx="6"/>
<rect x="170" y="60" width="130" height="80" rx="6" fill="#fdf6e3"/>
<rect x="335" y="60" width="130" height="80" rx="6" fill="#fdf6e3"/>
<rect x="500" y="60" width="135" height="80" rx="6"/>
</g>
<g font-size="14" text-anchor="middle" fill="#1d2b44">
<text x="70" y="88" font-weight="600">1. Grams</text><text x="70" y="108" font-size="12">of each element</text><text x="70" y="126" font-size="12">(% → assume 100 g)</text>
<text x="235" y="95" font-weight="600">2. Moles</text><text x="235" y="115" font-size="12">of each element</text>
<text x="400" y="95" font-weight="600">3. Mole ratio</text><text x="400" y="115" font-size="12">smallest = 1</text>
<text x="567" y="95" font-weight="600">4. Formula</text><text x="567" y="115" font-size="12">whole numbers</text>
</g>
<g stroke="#1d2b44" stroke-width="2">
<path d="M137 100 H166" marker-end="url(#e1)"/><path d="M302 100 H331" marker-end="url(#e1)"/><path d="M467 100 H496" marker-end="url(#e1)"/>
</g>
<g font-size="12" text-anchor="middle" fill="#1d2b44">
<text x="152" y="45">÷ atomic</text><text x="152" y="58">mass</text>
<text x="317" y="45">÷ the</text><text x="317" y="58">smallest</text>
<text x="482" y="45">× 2, 3…</text><text x="482" y="58">if needed</text>
</g>
<text x="320" y="180" text-anchor="middle" font-size="13" fill="#1d2b44">Steps 2 and 3 are where atoms are counted: never compare grams directly.</text>
<defs><marker id="e1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 2. The route from mass data to an empirical formula. The shaded boxes are amounts in moles, which is where atoms are compared.</figcaption>
</figure>

### Turning a ratio into whole numbers

Real data rarely give perfect whole numbers. Keep four significant figures in each ratio, then:

| Ratio ends in about… | Multiply every number by | Example |
|---|---|---|
| .00 (within about 0.05) | 1 | 1 : 1.99 → 1 : 2 |
| .50 | 2 | 1 : 1.50 → 2 : 3 |
| .33 or .67 | 3 | 1 : 1.33 → 3 : 4 |
| .25 or .75 | 4 | 1 : 1.25 → 4 : 5 |
| .20, .40, .60 or .80 | 5 | 1 : 2.40 → 5 : 12 |

Do not round 1.50 up to 2 or 1.33 down to 1. Those decimals are telling you to multiply.

## Worked example 1: from percentage composition

**Question.** Analysis of a pure liquid shows 54.53% carbon, 9.15% hydrogen and 36.32% oxygen by mass. Find its empirical formula.

1. Assume a 100 g sample: 54.53 g C, 9.15 g H, 36.32 g O.
2. Convert each mass to moles:
   - C: 54.53 g ÷ 12.01 g mol⁻¹ = 4.540 mol
   - H: 9.15 g ÷ 1.008 g mol⁻¹ = 9.077 mol
   - O: 36.32 g ÷ 16.00 g mol⁻¹ = 2.270 mol
3. Divide by the smallest (2.270 mol):
   - C: 4.540 ÷ 2.270 = 2.000
   - H: 9.077 ÷ 2.270 = 3.999
   - O: 2.270 ÷ 2.270 = 1.000
4. The ratio is 2 : 4 : 1, already whole numbers.

**Answer.** The empirical formula is **C₂H₄O**.

**Check.** Work the percentages back from the formula. M(C₂H₄O) = 2(12.01) + 4(1.008) + 16.00 = 44.052 g mol⁻¹, so % C = 24.02 ÷ 44.052 × 100 = 54.53%. This matches the data.

**Why step 2 matters.** If you compare the percentages directly, carbon (54.53) looks like the "main" element and hydrogen (9.15) looks minor. In fact there are about twice as many H atoms as C atoms. Hydrogen atoms are light, so many of them add up to only a small mass.

## Worked example 2: from measured masses

**Question.** A student heats 2.794 g of iron wire in a stream of oxygen until it has all reacted. The solid oxide formed has a mass of 3.994 g. Find the empirical formula of the oxide.

1. Mass of oxygen that combined: 3.994 g − 2.794 g = 1.200 g.
2. Moles of each element:
   - Fe: 2.794 g ÷ 55.85 g mol⁻¹ = 0.05003 mol
   - O: 1.200 g ÷ 16.00 g mol⁻¹ = 0.07500 mol
3. Divide by the smallest (0.05003 mol):
   - Fe: 1.000
   - O: 0.07500 ÷ 0.05003 = 1.499
4. 1.499 is close to 1.5, so multiply both numbers by 2: Fe 2.000, O 2.998, so 2 : 3.

**Answer.** The empirical formula is **Fe₂O₃**.

**Interpretation.** The oxide is 2.794 ÷ 3.994 × 100 = 69.95% iron by mass. The formula Fe₂O₃ gives 69.94% iron, so the data fit. By the law of definite proportions, any pure sample of this oxide will have about 70% iron, whatever its size.

**The trap.** Rounding 1.499 to 1 gives FeO. FeO is a real compound, but it is 77.73% iron, which does not match the measured 69.95%. Always check that rounding changes each number by only a few hundredths.

## Asking a testable question

Composition data can start an investigation. Suppose two white powders are both labelled "calcium carbonate". A testable question is one that a measurement can answer, for example: "Do the two powders have the same percentage of calcium by mass?" A question such as "Which powder is better?" cannot be tested, because "better" is not something you can measure. The law of definite proportions tells you what result to expect: if both are pure CaCO₃, both should be 40.04% calcium by mass.

## Common misconceptions

- **"Definite proportions means equal amounts."** No. The law says the mass ratio is fixed, not that the masses are equal. Water is 11.19% hydrogen, not 50%.
- **"Percentages are the atom ratio."** Mass percentages must be converted to moles before you compare them. 54.53% C and 9.15% H give twice as many H atoms as C atoms.
- **Rounding 1.5 to 2 (or 1.33 to 1).** Multiply the whole ratio by 2, 3 or 4 instead.
- **Dividing by atomic number instead of atomic mass.** Moles come from mass ÷ molar mass. Atomic numbers (6 for C, 8 for O) give the wrong ratio.
- **"NaCl is a molecule."** Sodium chloride has no separate molecules. NaCl is a formula unit: it gives the 1 : 1 ratio of ions in the lattice.
- **"The empirical formula is the real formula."** It is only the simplest ratio. C₂H₂ and C₆H₆ are different compounds with the same empirical formula, CH, and the same composition by mass.
- **Forgetting the mass of the second element.** When a metal reacts with oxygen, the mass of oxygen is the increase in mass, not the final mass.

## Where this leads

Next, Topic 1.4 uses the same ideas for mixtures, where composition can vary and elemental analysis can show how pure a sample is: see [Composition of Mixtures](/advanced-course-resources/chemistry/1-4-composition-mixtures-study-guide/). Mole conversions come from [Topic 1.1](/advanced-course-resources/chemistry/1-1-moles-and-molar-mass-study-guide/) and average atomic masses from [Topic 1.2](/advanced-course-resources/chemistry/1-2-mass-spectra-elements-study-guide/). Try the [practice questions](/advanced-course-resources/chemistry/1-3-elemental-composition-pure-substances-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/1-3-elemental-composition-pure-substances-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/1-3-elemental-composition-pure-substances-checklist/) to consolidate.
