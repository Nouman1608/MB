---
resourceId: "mb-ap-chem-4.6-study-guide"
title: "Introduction to Titration: Study Guide (Chemistry 4.6)"
description: "Learn how a titration measures the amount of an unknown substance, how the equivalence point differs from the endpoint, and how to find the equivalence point from amounts."
course: "chemistry"
unit: 4
topics: ["4.6"]
resourceType: "study-guide"
prerequisites:
  - "Molarity and moles in solution, n = M × V"
  - "Stoichiometry with mole ratios (Topic 4.5)"
  - "Writing balanced and net ionic equations (Topics 4.1 and 4.2)"
prerequisiteResources: ["mb-ap-chem-4.5-study-guide"]
learningObjectives:
  - "Describe what a titration measures and the roles of the analyte, the titrant and the indicator"
  - "Distinguish the equivalence point from the endpoint of a titration"
  - "Identify the equivalence point from the amounts of titrant and analyte, using the mole ratio of a reaction that goes to completion"
  - "Calculate an unknown concentration or amount from titration data"
  - "Represent titration data on a graph with suitable scale and units, and read the equivalence point from it"
skills: ["3", "5"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Burette volumes are read to 0.01 mL, so keep 4 significant figures where the data allow; convert mL to L before using n = M × V"
related: ["mb-ap-chem-4.6-revision-notes", "mb-ap-chem-4.6-practice", "mb-ap-chem-4.6-checklist"]
next: "mb-ap-chem-4.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A titration finds the amount of an analyte by reacting it with a titrant of known concentration."
  - "The equivalence point is reached when the titrant added has exactly used up the analyte, in the mole ratio of the equation."
  - "The endpoint is the observable change (such as a colour change) that signals the equivalence point. A good method makes the two very close."
  - "At equivalence: n(titrant) = M × V, then the mole ratio gives n(analyte)."
  - "M₁V₁ = M₂V₂ works only for a 1:1 reaction. Always use the balanced equation."
faqs:
  - question: "Is the equivalence point always at pH 7?"
    answer: "No. It is at pH 7 for a strong acid with a strong base at 25 °C, but not for titrations involving weak acids or bases. You will study those in Unit 8. In this topic the equivalence point is defined by amounts, not by pH."
  - question: "Do titrations have to be acid–base reactions?"
    answer: "No. Any reaction that is fast, goes to completion and has a known equation can be used, including redox and precipitation reactions."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What a titration does

Suppose you have a solution and you want to know how much of one particular substance is dissolved in it. That substance is the **analyte**. In a titration you add a second solution, the **titrant**, a little at a time from a burette. The titrant contains a species whose concentration you know exactly, and that species reacts with the analyte:

- **specifically**: it reacts with the analyte and with nothing else in the sample;
- **quantitatively**: the reaction goes to completion, following one known balanced equation.

Because you know the titrant's concentration and you measure the volume you add, you know the moles of titrant used. The balanced equation then converts that to moles of analyte. A titration is simply Topic 4.5 stoichiometry done with a burette.

The usual equipment is:

- a **pipette** to deliver an exact volume of the analyte solution (for example 25.00 mL) into a conical flask;
- a **burette** to add the titrant and measure the volume used, read to 0.01 mL;
- a way of seeing when the reaction is complete, usually an **indicator** that changes colour.

## Equivalence point and endpoint

These two terms sound alike, but they mean different things.

- **Equivalence point:** the point at which the titrant added has used up all of the analyte, with nothing left over on either side. The moles of titrant and analyte are in exactly the ratio of the balanced equation. This is a chemical fact about amounts. You cannot see it directly.
- **Endpoint:** the point at which you *observe* a change, such as a colour change, and stop adding titrant. This is what you actually record.

A good titration is designed so that the endpoint happens at, or a tiny fraction of a drop after, the equivalence point. Ways of detecting it include:

- an **acid–base indicator** such as phenolphthalein, which is colourless in acid and turns pink once a slight excess of base is present;
- a **self-indicating titrant**, such as purple permanganate ion, MnO₄⁻, which loses its colour while it reacts and leaves a pale pink tint only when it is in excess;
- a **property of the solution** that changes sharply at equivalence, such as electrical conductivity or pH measured with a meter.

## Finding the equivalence point from amounts

At the equivalence point the analyte has just been used up. That gives a direct calculation.

1. Write the balanced equation for the titration reaction.
2. Moles of titrant at equivalence: n(titrant) = M(titrant) × V(titrant at equivalence, in L).
3. Use the mole ratio: n(analyte) = n(titrant) × (coefficient of analyte / coefficient of titrant).
4. Convert to what you want: concentration = n / V(analyte sample), or mass = n × molar mass.

You can also run this backwards to **predict** where the equivalence point will be. For example, 20.00 mL of 0.125 M HCl contains 0.02000 L × 0.125 mol L⁻¹ = 0.00250 mol of H⁺. HCl and NaOH react 1:1 (H⁺ + OH⁻ → H₂O), so equivalence needs 0.00250 mol of OH⁻. With 0.100 M NaOH that is 0.00250 ÷ 0.100 = 0.02500 L, so **25.00 mL**.

> M₁V₁ = M₂V₂ is a shortcut that only works when the ratio is 1:1. For any other ratio, go through moles.

## Representing a titration on a graph

A titration curve plots a measured property of the solution against the **volume of titrant added**. Figure 1 shows the pH during the titration just described. The axes have labels and units, and the scale on each axis is even, so the steep part can be located accurately.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="ph-curve-title ph-curve-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ph-curve-title">pH against volume of sodium hydroxide added to hydrochloric acid</title>
<desc id="ph-curve-desc">Graph of pH from 0 to 14 on the vertical axis against volume of 0.100 molar sodium hydroxide added, from 0 to 40 millilitres, on the horizontal axis. The curve starts at pH 0.9, rises slowly to about pH 2.6 at 24 millilitres, then rises almost vertically through pH 7 at 25.00 millilitres, which is marked as the equivalence point, to about pH 11 by 25.5 millilitres, then levels off towards pH 12.4 at 40 millilitres. The region before 25 millilitres is labelled acid in excess and the region after is labelled base in excess.</desc>
<line x1="80" y1="250" x2="590" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="250" x2="80" y2="30" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="142.5" y1="250" x2="142.5" y2="255"/><line x1="205" y1="250" x2="205" y2="255"/><line x1="267.5" y1="250" x2="267.5" y2="255"/><line x1="330" y1="250" x2="330" y2="255"/><line x1="392.5" y1="250" x2="392.5" y2="255"/><line x1="455" y1="250" x2="455" y2="255"/><line x1="517.5" y1="250" x2="517.5" y2="255"/><line x1="580" y1="250" x2="580" y2="255"/>
<line x1="75" y1="220" x2="80" y2="220"/><line x1="75" y1="190" x2="80" y2="190"/><line x1="75" y1="160" x2="80" y2="160"/><line x1="75" y1="130" x2="80" y2="130"/><line x1="75" y1="100" x2="80" y2="100"/><line x1="75" y1="70" x2="80" y2="70"/><line x1="75" y1="40" x2="80" y2="40"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="268">0</text><text x="142.5" y="268">5</text><text x="205" y="268">10</text><text x="267.5" y="268">15</text><text x="330" y="268">20</text><text x="392.5" y="268">25</text><text x="455" y="268">30</text><text x="517.5" y="268">35</text><text x="580" y="268">40</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="70" y="254">0</text><text x="70" y="224">2</text><text x="70" y="194">4</text><text x="70" y="164">6</text><text x="70" y="134">8</text><text x="70" y="104">10</text><text x="70" y="74">12</text><text x="70" y="44">14</text>
</g>
<text x="335" y="295" text-anchor="middle" font-size="13" fill="#1d2b44">Volume of 0.100 M NaOH added (mL)</text>
<text x="22" y="140" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 22 140)">pH</text>
<line x1="392.5" y1="250" x2="392.5" y2="145" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<polyline points="80.0,236.5 142.5,233.5 205.0,230.5 267.5,226.8 330.0,221.5 355.0,217.8 380.0,210.3 386.2,205.8 391.2,195.2 392.5,145.0 393.8,94.8 398.8,84.4 405.0,79.9 430.0,73.1 455.0,70.0 517.5,66.1 580.0,64.0" fill="none" stroke="#1d2b44" stroke-width="3"/>
<circle cx="392.5" cy="145" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="402" y="150" font-size="12" fill="#1d2b44">equivalence point: 25.00 mL</text>
<text x="200" y="205" text-anchor="middle" font-size="12" fill="#1d2b44">acid in excess</text>
<text x="500" y="95" text-anchor="middle" font-size="12" fill="#1d2b44">base in excess</text>
</svg>
<figcaption>Figure 1. Titration of 20.00 mL of 0.125 M HCl with 0.100 M NaOH. The equivalence point (circle) sits in the middle of the near-vertical jump, at the volume predicted from amounts. Explaining the exact shape and the pH values is part of Topic 8.5; here, notice where the jump is and why.</figcaption>
</figure>

To link the curve to particles, track the ions in the flask. Na⁺ and Cl⁻ are spectator ions; the reacting species are H⁺ and OH⁻.

| NaOH added | H⁺ left (mol) | OH⁻ in excess (mol) | Na⁺ (mol) | Cl⁻ (mol) | What it means |
|---|---|---|---|---|---|
| 0.00 mL | 0.00250 | 0 | 0 | 0.00250 | only acid |
| 12.50 mL | 0.00125 | 0 | 0.00125 | 0.00250 | half the acid used |
| 25.00 mL | ≈ 0 | ≈ 0 | 0.00250 | 0.00250 | equivalence: a solution of NaCl |
| 30.00 mL | ≈ 0 | 0.00050 | 0.00300 | 0.00250 | base now in excess |

## Worked example 1: an acid with a 1:2 ratio

**Question.** A 25.00 mL sample of dilute sulfuric acid is titrated with 0.1050 M NaOH. The endpoint is reached after 18.62 mL. Find the concentration of the sulfuric acid.

H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)

1. Moles of NaOH used: 0.1050 mol L⁻¹ × 0.01862 L = 0.0019551 mol.
2. Mole ratio: each H₂SO₄ needs 2 NaOH, so n(H₂SO₄) = 0.0019551 ÷ 2 = 0.00097755 mol.
3. Concentration: 0.00097755 mol ÷ 0.02500 L = 0.039102 mol L⁻¹.

**Answer.** 0.03910 M (4 significant figures, matching the data).

**The trap.** Using M₁V₁ = M₂V₂ gives 0.0782 M, twice the true value, because it ignores the 2 in front of NaOH.

## Worked example 2: a self-indicating redox titration

**Question.** An iron supplement tablet (a fictional brand) is dissolved in dilute sulfuric acid so that all its iron is present as Fe²⁺. The solution is titrated with 0.0200 M potassium permanganate. The first permanent pale pink colour appears after 21.45 mL. What mass of iron is in the tablet? Fe = 55.85 g mol⁻¹.

MnO₄⁻(aq) + 5Fe²⁺(aq) + 8H⁺(aq) → Mn²⁺(aq) + 5Fe³⁺(aq) + 4H₂O(l)

1. Moles of MnO₄⁻: 0.0200 mol L⁻¹ × 0.02145 L = 0.000429 mol.
2. Mole ratio: 1 MnO₄⁻ reacts with 5 Fe²⁺, so n(Fe²⁺) = 5 × 0.000429 = 0.002145 mol.
3. Mass of iron: 0.002145 mol × 55.85 g mol⁻¹ = 0.1198 g.

**Answer.** 0.120 g, or about 120 mg of iron per tablet (3 significant figures, limited by 0.0200 M).

**Why the endpoint works.** While Fe²⁺ remains, each drop of purple MnO₄⁻ is used up at once and the colour disappears. At equivalence there is no Fe²⁺ left, so the next drop of permanganate stays unreacted and tints the solution pink. No separate indicator is needed.

## Why "goes to completion" matters

All of the calculations above assume that every mole of titrant added before the equivalence point reacts with the analyte. If the reaction stopped partway, some titrant would sit unreacted in the flask while analyte was still present. The endpoint would then appear at the wrong place, or there would be no sharp change at all, and the mole ratio would no longer link the titre to the analyte. That is why chemists choose titration reactions that are fast and essentially complete: strong acid with strong base, permanganate with iron(II), or silver ions with chloride ions.

## Good practice at the bench

A titration result is only as good as the volumes behind it. Common good habits are:

- **Rinse the burette with the titrant** (and the pipette with the analyte solution) before filling, so any water left inside does not dilute them.
- **Remove air bubbles** from the burette tip before taking the first reading.
- **Read the bottom of the meniscus at eye level**, and record both the start and the final reading to 0.01 mL.
- **Swirl the flask** after each addition, and add the titrant **drop by drop** near the endpoint. A white tile under the flask makes a colour change easier to see.
- **Do a rough titration first**, then repeat accurately until two or more titres agree closely (for example within 0.10 mL). Average the titres that agree.

## How errors move the answer

Titration errors are easier to reason about if you ask one question: **does this change the volume of titrant I record?**

- **Overshooting the endpoint.** If the student in Worked example 2 had added 21.85 mL before stopping, the calculation would give 122.0 mg of iron. Too much titrant recorded means too much analyte calculated.
- **Adding distilled water to the flask.** Rinsing the walls of the conical flask with water does not change the moles of analyte, so the volume of titrant needed is unchanged. Only the moles matter, not the concentration in the flask.

## Common misconceptions

- **"The endpoint and the equivalence point are the same thing."** The equivalence point is defined by amounts. The endpoint is what you see. A good method makes them almost coincide, but a poor indicator choice or overshooting separates them.
- **"At equivalence, equal volumes have been added."** Equal *moles* in the ratio of the equation, not equal volumes. In Figure 1, 20.00 mL of acid needs 25.00 mL of base.
- **"M₁V₁ = M₂V₂ always works."** Only for a 1:1 reaction (Worked example 1).
- **"Equivalence always means pH 7."** True only for strong acid with strong base. Unit 8 explains the other cases.
- **"Adding water to the flask dilutes the analyte, so less titrant is needed."** The moles of analyte do not change, so the titrant volume does not change.
- **"The titrant is the solution in the flask."** The titrant is in the burette and has a known concentration; the analyte is in the flask.

## Where this leads

Topic 4.7, [Types of Chemical Reactions](/advanced-course-resources/chemistry/4-7-types-chemical-reactions-study-guide/), classifies the acid–base, redox and precipitation reactions that titrations rely on. In Unit 8 you will analyse full pH curves, choose indicators and work with weak acids, all built on the amount reasoning here. Try the [practice questions](/advanced-course-resources/chemistry/4-6-introduction-titration-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/4-6-introduction-titration-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/4-6-introduction-titration-checklist/). For the calculation method behind every step, revisit [Stoichiometry](/advanced-course-resources/chemistry/4-5-stoichiometry-study-guide/).

Reading about titrations or using a simulation does not replace the hands-on laboratory work the course requires.
