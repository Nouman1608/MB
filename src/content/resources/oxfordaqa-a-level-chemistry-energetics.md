---
title: "Energetics: Enthalpy Change, Calorimetry, Hess's Law and Bond Enthalpies"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Physical chemistry"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9620"]
syllabusSeries: "Version 5.3 (first teaching 2019, first AS and A-level exams 2020)"
stage: "AS"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-energetics"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-4-1"
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-energetics"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-4-2"
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-energetics"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-4-3"
  - qualification: "a-level"
    topic: "oxfordaqa-a-level-chemistry-energetics"
    subtopic: "oxfordaqa-a-level-chemistry-3-1-4-4"
description: "Standard enthalpy changes of combustion and formation, calorimetry using q = mc∆T, Hess's law calculations, and mean bond enthalpy, for OxfordAQA International AS and A-level Chemistry 9620, section 3.1.4."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-02
featured: false
---

This guide covers **3.1.4, Energetics**, from the Physical chemistry
section of OxfordAQA International AS and A-level Chemistry 9620. It
follows [Molecular shapes, bond polarity and intermolecular
forces](/resources/oxfordaqa-a-level-chemistry-shapes-polarity-and-intermolecular-forces/)
and covers how the energy changes of a reaction can be measured,
defined and calculated.

## Enthalpy change

You need to know that reactions can be endothermic (absorbing heat) or
exothermic (releasing heat), and that enthalpy change (ΔH) is the heat
energy change measured under conditions of constant pressure. Standard
enthalpy changes refer specifically to standard conditions -- 100 kPa
and a stated temperature, conventionally 298 K, shown as ΔH°₂₉₈. You
need to be able to define two standard enthalpy changes precisely:
**standard enthalpy of combustion (ΔcH°)**, the enthalpy change when
one mole of a substance is completely burned in oxygen under standard
conditions, and **standard enthalpy of formation (ΔfH°)**, the
enthalpy change when one mole of a compound is formed from its
constituent elements in their standard states under standard
conditions.

## Calorimetry

You need to use the equation q = mcΔT, where q is heat change, m is
the mass of substance undergoing temperature change ΔT, and c is
specific heat capacity, to calculate the molar enthalpy change for a
reaction and in related calculations. As with the Avogadro constant
and gas constant elsewhere in this specification, you will **not** be
expected to recall the value of specific heat capacity -- it will be
provided in any question that requires it. This subtopic carries
**Required Practical 2**: measuring an enthalpy change, typically by
combining q = mcΔT with a measured temperature change to find the
heat released or absorbed, then converting to a molar quantity using
the moles of substance reacted.

<!-- marlbridge-diagram:chem-b17-calorimetry-heat-accounting -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/chemistry/chem-b17-calorimetry-heat-accounting.svg" aria-label="Open full-size diagram: calorimetry setup and worked heat-accounting example"><img src="/images/learning/chemistry/chem-b17-calorimetry-heat-accounting.svg" width="1528" height="940" alt="Insulated-cup calorimetry and a worked magnesium example: calculate solution heat from mass, specific heat capacity and temperature rise, reverse its sign for reaction heat, convert magnesium mass to moles, and calculate molar enthalpy." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Worked calorimetry example: the solution gains +2.30 kJ, so the exothermic reaction releases −2.30 kJ; divide by the limiting magnesium amount to obtain ΔH ≈ −466 kJ mol⁻¹. The simple calculation neglects cup heat capacity and heat loss.</figcaption>
</figure>
<!-- /marlbridge-diagram:chem-b17-calorimetry-heat-accounting -->

For an acid–metal experiment, measure the acid into the insulated cup, record its starting temperature,
add a weighed amount of metal, replace the lid, stir gently and record the highest temperature. Use the
mass of the reacting solution (often approximated from its volume using density 1.00 g cm⁻³) and the
supplied specific heat capacity. The cup and lid reduce heat exchange; the thermometer bulb should remain
in the liquid and clear of the cup wall and base.

**Worked sign and mole example.** Suppose 0.120 g Mg reacts with 50.0 cm³ of excess 1.00 mol dm⁻³ HCl;
the solution warms from 20.0 °C to 31.0 °C. Take the solution mass as 50.0 g and
`c = 4.18 J g⁻¹ K⁻¹`:

```
q_solution = mcΔT = 50.0 × 4.18 × (31.0 − 20.0) = +2.30 kJ
q_reaction ≈ −q_solution = −2.30 kJ       (the solution gains heat; reaction releases it)
n(Mg) = 0.120 ÷ 24.3 = 0.00494 mol       (Mg is limiting; HCl is in excess)
ΔH ≈ −2.30 ÷ 0.00494 = −466 kJ mol⁻¹
```

The minus sign belongs to the exothermic reaction. This estimate assumes the solution has water's density
and heat capacity and neglects heat absorbed by the cup or lost to the surroundings. Heat loss makes the
measured temperature rise too small, so the calculated exothermic enthalpy is usually less negative than
the true value; a lid, insulation and prompt temperature readings reduce that error.

## Hess's law

You need to use Hess's law to perform calculations, including
calculating enthalpy changes for reactions from enthalpies of
combustion or from enthalpies of formation. Hess's law states that the
total enthalpy change for a reaction is independent of the route taken
between reactants and products, as long as the initial and final
conditions are the same -- meaning an enthalpy change that cannot be
measured directly can be calculated indirectly via an alternative
route of known enthalpy changes, typically drawn as an energy cycle.

## Bond enthalpies

You need to define mean bond enthalpy, and use mean bond enthalpies to
calculate an approximate value of ΔH for reactions in the gaseous
phase. A specific and frequently examined point of understanding is
required here: you need to be able to **explain why values calculated
from mean bond enthalpies differ from those determined using Hess's
law**. Mean bond enthalpies are average values taken across many
different molecules containing a given bond type, so a specific bond
in a specific molecule may have a slightly different actual bond
enthalpy than the mean value used in the calculation -- this makes the
bond-enthalpy method only an approximation, whereas a Hess's law
calculation using measured enthalpies of formation or combustion is
specific to the actual compounds involved in that particular
reaction, rather than an average taken across many different
molecules.

Mean bond enthalpy is the enthalpy change required to break one mole of a specified covalent bond in
gaseous molecules, averaged over different gaseous compounds containing that bond. Bond breaking is
endothermic, so these values are positive. Estimate a gas-phase reaction enthalpy by summing bonds broken
and subtracting bonds formed:

```
H₂(g) + Cl₂(g) → 2HCl(g)
broken: H–H (436) + Cl–Cl (243) = 679 kJ mol⁻¹
formed: 2 × H–Cl (431) = 862 kJ mol⁻¹
ΔH ≈ Σ(bonds broken) − Σ(bonds formed) = 679 − 862 = −183 kJ mol⁻¹
```

The result is for the reaction as written and is approximate because the tabulated H–H, Cl–Cl and H–Cl
values are mean values, not exact bond enthalpies for only these reactants and product.

## A worked example

To find the enthalpy of formation of methane using Hess's law from
enthalpies of combustion: construct a cycle with the direct formation
reaction (C(s) + 2H₂(g) → CH₄(g)) on one side, and an indirect route
via complete combustion of the elements and of methane on the other.
Since Hess's law states both routes must give the same overall
enthalpy change, ΔfH(CH₄) = [ΔcH(C) + 2 × ΔcH(H₂)] − ΔcH(CH₄). This
general pattern -- sum of combustion enthalpies of reactants minus
combustion enthalpy of the product -- applies to any enthalpy of
formation calculated from combustion data, and is worth learning as a
reusable structure rather than re-deriving the cycle from scratch
every time.

## Why energetics matters beyond this subtopic

The enthalpy concepts introduced here are not confined to Physical
chemistry in isolation. Standard enthalpies of formation and
combustion reappear directly whenever a later part of the course asks
you to evaluate the energetics of a specific reaction type, and the
Hess's law cycle method generalises to any situation where a wanted
enthalpy change cannot be measured directly but can be constructed
from known steps. The distinction between a Hess's law value specific to the
compounds actually involved and an approximate, averaged bond-enthalpy
value is also a recurring theme in how this specification treats
experimental versus theoretical data more broadly -- recognising which
type of value a question is asking you to calculate, and why the two
methods can disagree, is a transferable skill rather than a one-off
fact about energetics specifically.

## How to approach it

Learn the precise wording of the standard enthalpy of combustion and
formation definitions, including "one mole," "standard conditions,"
and (for formation) "from its constituent elements in their standard
states" -- definition questions are marked closely against this exact
phrasing. Practise drawing Hess's law energy cycles as a first step in
any indirect enthalpy calculation, since a correctly drawn cycle makes
the arithmetic almost automatic, while attempting the calculation
without one is a common source of sign errors. For bond enthalpy
calculations, remember the reaction must be in the gaseous phase for
mean bond enthalpies to apply directly, and always be ready to explain
the Hess's-law-versus-bond-enthalpy discrepancy in terms of mean
values being averaged across many molecules rather than measured for
the specific bond in the specific reaction being studied.

## Official syllabus

OxfordAQA, *International AS and A-level Chemistry (9620)
specification*, Version 5.3, for International AS and A-level exams
May/June 2020 onwards: [official specification
PDF](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf),
section 3.1.4 "Energetics". Verified 2026-09-02.
