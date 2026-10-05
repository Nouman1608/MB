---
resourceId: "mb-ap-chem-7.4-study-guide"
title: "Calculating the Equilibrium Constant: Study Guide (Chemistry 7.4)"
description: "Calculate Kc or Kp from measured equilibrium concentrations or partial pressures, including cases where only one species is measured and you must use the reaction stoichiometry."
course: "chemistry"
unit: 7
topics: ["7.4"]
resourceType: "study-guide"
prerequisites:
  - "Writing Kc and Kp expressions, leaving out solids and liquids (Topic 7.3)"
  - "Mole ratios from a balanced equation and molarity, n = cV"
  - "Partial pressures and Dalton's law of partial pressures"
prerequisiteResources: ["mb-ap-chem-7.3-study-guide"]
learningObjectives:
  - "Recognise from data when a system has reached equilibrium"
  - "Calculate Kc from equilibrium concentrations and Kp from equilibrium partial pressures"
  - "Use a stoichiometry (ICE) table to find all equilibrium values from starting amounts and one measured equilibrium value"
  - "Convert moles to concentrations and a total pressure to partial pressures before substituting"
  - "Explain how one equilibrium concentration must change when another changes, with K fixed"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Concentrations in mol L⁻¹ and partial pressures in atm; K is written without units. Keep unrounded values until the final step"
related: ["mb-ap-chem-7.4-revision-notes", "mb-ap-chem-7.4-practice", "mb-ap-chem-7.4-checklist"]
next: "mb-ap-chem-7.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "K is calculated by putting equilibrium concentrations (for Kc) or equilibrium partial pressures (for Kp) into the expression from the balanced equation."
  - "You know a system is at equilibrium when the measured concentrations or pressures stay constant over time."
  - "If you know the starting amounts and one equilibrium value, an ICE table and the mole ratios give every other equilibrium value."
  - "Convert moles to mol L⁻¹ before using Kc; never put starting values into K."
  - "With K fixed, the powers in the expression tell you how much one concentration must change when another changes."
faqs:
  - question: "Can I calculate K from moles instead of concentrations?"
    answer: "Not in general. Kc needs concentrations in mol L⁻¹. Moles only give the right answer by luck, for example when the volume is 1.00 L or when the powers on top and bottom add up to the same total. Divide by the volume first."
  - question: "Why do two experiments at the same temperature give the same K?"
    answer: "K depends only on the reaction and the temperature. Different starting amounts lead to different equilibrium concentrations, but they always combine in the expression to give the same K, within experimental error."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From measurements to a number

In Topic 7.3 you learned to write the expression for K. In this topic you put real measurements into it. The idea is simple:

> Measure the concentrations (or partial pressures) of the species **at equilibrium**, substitute them into the expression from the balanced equation, and calculate.

Chemists measure equilibrium amounts in several ways. A coloured species can be measured with a spectrophotometer, because absorbance is proportional to concentration (Topic 3.13). The pressure of a gas mixture can be read from a gauge. A sample can be removed and titrated. Whatever the method, the numbers are only useful if they are taken **at equilibrium**.

## How do you know it is at equilibrium?

A system is at equilibrium when its concentrations or partial pressures **stop changing**. In an experiment, you take readings over time and wait until they are constant. Figure 1 shows a reaction approaching equilibrium. The readings to use for K are the ones on the flat part of the curves.

<figure>
<svg viewBox="0 0 700 300" role="img" aria-labelledby="eq-time-title eq-time-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="eq-time-title">Concentrations against time as a reaction reaches equilibrium</title>
<desc id="eq-time-desc">Graph of concentration in mol per litre, from 0 to 0.40, against time in minutes, from 0 to 60, for the reaction CH4 plus 2 H2S forming CS2 plus 4 H2. H2S falls from 0.400 to 0.360. CH4 falls from 0.200 to 0.180. H2 rises from 0 to 0.080. CS2 rises from 0 to 0.020. All four curves change quickly at first and become flat after about 40 minutes. The region from 40 to 60 minutes is shaded and labelled: equilibrium, concentrations constant, use these values for K.</desc>
<rect x="413.3" y="40" width="166.7" height="210" fill="#fdf6e3" stroke="none"/>
<text x="496.7" y="100" text-anchor="middle" font-size="12" fill="#1d2b44">Equilibrium:</text>
<text x="496.7" y="116" text-anchor="middle" font-size="12" fill="#1d2b44">concentrations constant,</text>
<text x="496.7" y="132" text-anchor="middle" font-size="12" fill="#1d2b44">use these values for K</text>
<line x1="80" y1="250" x2="590" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="250" x2="80" y2="30" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="80" y1="250" x2="80" y2="256" stroke="#1d2b44"/><text x="80" y="270">0</text>
<line x1="163.3" y1="250" x2="163.3" y2="256" stroke="#1d2b44"/><text x="163.3" y="270">10</text>
<line x1="246.7" y1="250" x2="246.7" y2="256" stroke="#1d2b44"/><text x="246.7" y="270">20</text>
<line x1="330" y1="250" x2="330" y2="256" stroke="#1d2b44"/><text x="330" y="270">30</text>
<line x1="413.3" y1="250" x2="413.3" y2="256" stroke="#1d2b44"/><text x="413.3" y="270">40</text>
<line x1="496.7" y1="250" x2="496.7" y2="256" stroke="#1d2b44"/><text x="496.7" y="270">50</text>
<line x1="580" y1="250" x2="580" y2="256" stroke="#1d2b44"/><text x="580" y="270">60</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="250" x2="80" y2="250" stroke="#1d2b44"/><text x="70" y="254">0</text>
<line x1="74" y1="197.5" x2="80" y2="197.5" stroke="#1d2b44"/><text x="70" y="201.5">0.10</text>
<line x1="74" y1="145" x2="80" y2="145" stroke="#1d2b44"/><text x="70" y="149">0.20</text>
<line x1="74" y1="92.5" x2="80" y2="92.5" stroke="#1d2b44"/><text x="70" y="96.5">0.30</text>
<line x1="74" y1="40" x2="80" y2="40" stroke="#1d2b44"/><text x="70" y="44">0.40</text>
</g>
<text x="335" y="292" text-anchor="middle" font-size="13" fill="#1d2b44">Time (min)</text>
<text x="22" y="145" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 22 145)">Concentration (mol L⁻¹)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="10 5" points="80.0,40.0 96.7,43.8 113.3,46.9 130.0,49.5 146.7,51.6 163.3,53.3 180.0,54.7 196.7,55.8 213.3,56.8 230.0,57.5 246.7,58.2 263.3,58.7 280.0,59.1 296.7,59.4 313.3,59.7 330.0,60.0 346.7,60.1 363.3,60.3 380.0,60.4 396.7,60.5 413.3,60.6 430.0,60.7 446.7,60.7 463.3,60.8 480.0,60.8 496.7,60.9 513.3,60.9 530.0,60.9 546.7,60.9 563.3,60.9 580.0,60.9"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,145.0 96.7,146.9 113.3,148.5 130.0,149.7 146.7,150.8 163.3,151.6 180.0,152.3 196.7,152.9 213.3,153.4 230.0,153.8 246.7,154.1 263.3,154.3 280.0,154.5 296.7,154.7 313.3,154.9 330.0,155.0 346.7,155.1 363.3,155.1 380.0,155.2 396.7,155.3 413.3,155.3 430.0,155.3 446.7,155.4 463.3,155.4 480.0,155.4 496.7,155.4 513.3,155.4 530.0,155.5 546.7,155.5 563.3,155.5 580.0,155.5"/>
<polyline fill="none" stroke="#b5532a" stroke-width="2.5" stroke-dasharray="4 4" points="80.0,250.0 96.7,242.4 113.3,236.2 130.0,231.1 146.7,226.9 163.3,223.5 180.0,220.7 196.7,218.4 213.3,216.5 230.0,214.9 246.7,213.7 263.3,212.7 280.0,211.8 296.7,211.1 313.3,210.6 330.0,210.1 346.7,209.7 363.3,209.4 380.0,209.1 396.7,208.9 413.3,208.8 430.0,208.6 446.7,208.5 463.3,208.4 480.0,208.3 496.7,208.3 513.3,208.2 530.0,208.2 546.7,208.2 563.3,208.1 580.0,208.1"/>
<polyline fill="none" stroke="#b5532a" stroke-width="2.5" stroke-dasharray="1 4" stroke-linecap="round" points="80.0,250.0 96.7,248.1 113.3,246.5 130.0,245.3 146.7,244.2 163.3,243.4 180.0,242.7 196.7,242.1 213.3,241.6 230.0,241.2 246.7,240.9 263.3,240.7 280.0,240.5 296.7,240.3 313.3,240.1 330.0,240.0 346.7,239.9 363.3,239.9 380.0,239.8 396.7,239.7 413.3,239.7 430.0,239.7 446.7,239.6 463.3,239.6 480.0,239.6 496.7,239.6 513.3,239.6 530.0,239.5 546.7,239.5 563.3,239.5 580.0,239.5"/>
<g font-size="12" fill="#1d2b44">
<text x="588" y="65">H₂S 0.360</text>
<text x="588" y="159">CH₄ 0.180</text>
<text x="588" y="212">H₂ 0.080</text>
<text x="588" y="243">CS₂ 0.020</text>
</g>
</svg>
<figcaption>Figure 1. Concentrations for CH₄(g) + 2H₂S(g) ⇌ CS₂(g) + 4H₂(g) in Worked example 2. Line styles: H₂S long dashes, CH₄ solid, H₂ short dashes, CS₂ dots; each curve is also labelled at its end. After about 40 min nothing changes any more (shaded region), so these are the equilibrium values to put into Kc.</figcaption>
</figure>

Notice two things in the figure. First, the reactants do not run out: both are still present at equilibrium. Second, the changes are linked by the equation. For every 1 mol L⁻¹ of CH₄ used up, 2 mol L⁻¹ of H₂S are used up and 4 mol L⁻¹ of H₂ are made. You will use that link in Worked example 2.

## The method in four steps

1. **Write the balanced equation** with state symbols.
2. **Write the expression** for Kc or Kp, leaving out pure solids and liquids.
3. **Get every equilibrium value in the right form:** mol L⁻¹ for Kc, atm for Kp. Convert moles to concentrations (divide by volume), or a total pressure to partial pressures, if you need to.
4. **Substitute and calculate.** Give K to the number of significant figures in the data, with no unit.

## Worked example 1: substituting measured values

**Question.** (a) For 2NOCl(g) ⇌ 2NO(g) + Cl₂(g), an equilibrium mixture contains [NOCl] = 0.0500 mol L⁻¹, [NO] = 0.0100 mol L⁻¹ and [Cl₂] = 0.00500 mol L⁻¹. Calculate Kc.
(b) For 2NO₂(g) ⇌ 2NO(g) + O₂(g), the equilibrium partial pressures in a vessel are P_NO₂ = 0.400 atm, P_NO = 0.100 atm and P_O₂ = 0.0500 atm. Calculate Kp.

**(a)**
1. Kc = [NO]²[Cl₂] / [NOCl]².
2. Substitute: Kc = (0.0100)² × 0.00500 / (0.0500)².
3. Numerator: 1.00 × 10⁻⁴ × 0.00500 = 5.00 × 10⁻⁷. Denominator: 2.50 × 10⁻³.
4. Kc = 5.00 × 10⁻⁷ ÷ 2.50 × 10⁻³ = **2.00 × 10⁻⁴**.

**(b)**
1. Kp = (P_NO)² × P_O₂ / (P_NO₂)².
2. Substitute: Kp = (0.100)² × 0.0500 / (0.400)² = 5.00 × 10⁻⁴ / 0.160.
3. Kp = **3.13 × 10⁻³**.

**Check.** Both answers are three significant figures, like the data. Neither has a unit. Part (b) used only pressures, because it asks for Kp.

## When only one species is measured: the ICE table

Often you know what you put in at the start, and you measure just **one** species at equilibrium. The balanced equation then tells you how much of everything else changed. An **ICE table** (Initial, Change, Equilibrium) keeps this tidy:

- **I:** starting concentrations (or pressures).
- **C:** the change for each species, in the ratio of the coefficients. Reactants go down (−), products go up (+).
- **E:** I + C for each species.

Work in concentrations from the start. If you are given moles, divide by the volume first.

## Worked example 2: starting amounts plus one measurement

**Question.** 0.400 mol of CH₄ and 0.800 mol of H₂S are sealed in a 2.00 L vessel and heated. The reaction is CH₄(g) + 2H₂S(g) ⇌ CS₂(g) + 4H₂(g). At equilibrium the vessel contains 0.0400 mol of CS₂. Calculate Kc at this temperature.

1. **Concentrations.** [CH₄]₀ = 0.400 ÷ 2.00 = 0.200 mol L⁻¹; [H₂S]₀ = 0.800 ÷ 2.00 = 0.400 mol L⁻¹; [CS₂]ₑ = 0.0400 ÷ 2.00 = 0.0200 mol L⁻¹.
2. **ICE table** (mol L⁻¹). Let the change in CS₂ be +0.0200; the other changes follow the 1 : 2 : 1 : 4 ratio.

| | CH₄ | H₂S | CS₂ | H₂ |
|---|---|---|---|---|
| Initial | 0.200 | 0.400 | 0 | 0 |
| Change | −0.0200 | −0.0400 | +0.0200 | +0.0800 |
| Equilibrium | 0.180 | 0.360 | 0.0200 | 0.0800 |

3. **Expression.** Kc = [CS₂][H₂]⁴ / ([CH₄][H₂S]²).
4. **Substitute.** Numerator: 0.0200 × (0.0800)⁴ = 0.0200 × 4.096 × 10⁻⁵ = 8.192 × 10⁻⁷. Denominator: 0.180 × (0.360)² = 0.180 × 0.1296 = 0.023328.
5. Kc = 8.192 × 10⁻⁷ ÷ 0.023328 = **3.51 × 10⁻⁵**.

**Why each step matters.** Using moles instead of concentrations gives 1.40 × 10⁻⁴, four times too big, because the powers on top (1 + 4 = 5) and bottom (1 + 2 = 3) do not cancel the volume. Using the starting values for CH₄ and H₂S gives 2.56 × 10⁻⁵, which mixes a starting mixture with an equilibrium one and is not K at all.

## Worked example 3: a total pressure with a solid

**Question.** Solid ammonium carbamate is placed in an evacuated flask and heated. It decomposes: NH₂COONH₄(s) ⇌ 2NH₃(g) + CO₂(g). When equilibrium is reached, the total pressure is 0.300 atm and some solid remains. Calculate Kp.

1. **Expression.** The solid is left out: Kp = (P_NH₃)² × P_CO₂.
2. **Partial pressures.** All the gas comes from the solid, in the ratio 2 NH₃ : 1 CO₂. So NH₃ is 2/3 of the total pressure and CO₂ is 1/3: P_NH₃ = 0.200 atm, P_CO₂ = 0.100 atm. (Check: 0.200 + 0.100 = 0.300 atm.)
3. **Substitute.** Kp = (0.200)² × 0.100 = 0.0400 × 0.100 = **4.00 × 10⁻³**.

**Common slip.** Splitting the total pressure in half for each gas (0.150 atm each) ignores the 2 : 1 ratio and gives 3.38 × 10⁻³.

## Reading K as a relationship between variables

K is fixed at a given temperature. So if one equilibrium concentration is different in another experiment, the others must be different in a way that keeps K the same. The powers tell you by how much.

For 2A(g) ⇌ B(g), Kc = [B] / [A]². If a second equilibrium mixture at the same temperature has [A] twice as large, then [A]² is four times as large, so [B] must also be four times as large to keep the ratio equal to Kc.

This is also a good test of your own data. If two experiments at the same temperature give values of K that differ by much more than the measurement uncertainty, one of the calculations (or measurements) is probably wrong.

## Common misconceptions

- **Using starting amounts in K.** Only equilibrium values go into K. Starting values give Q, not K.
- **Using moles instead of concentrations.** Divide by the volume first. It only "works" in special cases.
- **Ignoring the mole ratio in the change row.** If CS₂ goes up by 0.0200, H₂ goes up by 4 × 0.0200, not 0.0200.
- **Getting the signs wrong.** Reactants decrease and products increase when the reaction moves forward from a start with no products.
- **Splitting a total pressure equally.** Partial pressures follow the mole ratio of the gases.
- **Including the solid.** A solid must be present, but it is not in the expression.
- **"More reactant gives a bigger K."** Different starting amounts give different equilibrium concentrations but the same K at the same temperature.
- **Giving K a unit.** In this course K is written as a plain number.

## Where this leads

Next, in [Topic 7.5](/advanced-course-resources/chemistry/7-5-magnitude-equilibrium-constant-study-guide/), you will use the size of K to judge whether a reaction goes almost to completion or barely happens. Later, Topic 7.7 runs this topic's method backwards: you will be given K and starting amounts and asked to find the equilibrium concentrations. If writing the expression still feels shaky, review [Topic 7.3](/advanced-course-resources/chemistry/7-3-reaction-quotient-equilibrium-constant-study-guide/).

Try the [practice questions](/advanced-course-resources/chemistry/7-4-calculating-equilibrium-constant-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/7-4-calculating-equilibrium-constant-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/7-4-calculating-equilibrium-constant-checklist/) to consolidate.
