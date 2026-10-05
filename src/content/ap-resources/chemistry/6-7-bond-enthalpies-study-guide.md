---
resourceId: "mb-ap-chem-6.7-study-guide"
title: "Bond Enthalpies: Study Guide (Chemistry 6.7)"
description: "Estimate the enthalpy change of a gas-phase reaction from average bond enthalpies: count the bonds broken and formed, find the difference, and explain why the answer is only an estimate."
course: "chemistry"
unit: 6
topics: ["6.7"]
resourceType: "study-guide"
prerequisites:
  - "Drawing Lewis structures, including double and triple bonds (Topic 2.5)"
  - "Bond energy and the potential energy curve for a bond (Topic 2.2)"
  - "Enthalpy of reaction and the sign convention for ΔH (Topic 6.6)"
prerequisiteResources: ["mb-ap-chem-6.6-study-guide"]
learningObjectives:
  - "Explain why breaking a bond needs energy and forming a bond releases energy"
  - "Count every bond broken in the reactants and formed in the products from Lewis structures and coefficients"
  - "Estimate ΔH for a reaction as the energy needed to break bonds minus the energy released forming bonds"
  - "Decide from the two totals whether a reaction is exothermic or endothermic"
  - "Work backwards from a known ΔH to estimate an unknown bond enthalpy"
  - "Explain why bond-enthalpy estimates differ from measured values"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Average bond enthalpies in kJ mol⁻¹ are given in the table on this page; answers are estimates, so round to the nearest kJ"
related: ["mb-ap-chem-6.7-revision-notes", "mb-ap-chem-6.7-practice", "mb-ap-chem-6.7-checklist"]
next: "mb-ap-chem-6.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Breaking a bond always needs energy (endothermic); forming a bond always releases the same amount of energy (exothermic)."
  - "ΔH ≈ Σ(bond enthalpies of bonds broken) − Σ(bond enthalpies of bonds formed). Note the order: broken minus formed."
  - "If more energy is released forming bonds than is needed to break them, ΔH is negative and the reaction is exothermic."
  - "Count bonds from Lewis structures and multiply by the coefficients. A C=C double bond is one bond with its own value, not two C–C bonds."
  - "Bond enthalpies are averages over many molecules and apply to gases, so the result is an estimate, not an exact value."
faqs:
  - question: "Why is it broken minus formed here, when other ΔH formulas are products minus reactants?"
    answer: "Bond enthalpies measure energy put in to break bonds. The reactant bonds are broken (energy in, positive) and the product bonds are formed (energy out, negative), so the reactant total comes first."
  - question: "Do I have to count bonds that do not change?"
    answer: "No. A bond that is present on both sides cancels out. Counting every bond still gives the same answer, so do whichever you find safer."
  - question: "Are bond enthalpies ever negative?"
    answer: "No. A bond enthalpy is the energy needed to break one mole of a bond, which is always positive. The minus sign appears only when you form bonds in the calculation."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Where the energy of a reaction comes from

In [Topic 6.6](/advanced-course-resources/chemistry/6-6-introduction-enthalpy-reaction-study-guide/) you used ΔH to find how much heat a reaction releases or absorbs. This topic answers a deeper question: **why** does a reaction have that energy change? The answer is bonds.

During a reaction, some bonds in the reactant molecules break and new bonds form in the product molecules. Each of these events changes the potential energy of the system:

- **Breaking a bond needs energy.** The two atoms attract each other, so you must do work to pull them apart. Bond breaking is **endothermic**.
- **Forming a bond releases energy.** When two atoms come together to the bond length, the potential energy falls (the bottom of the potential energy curve from Topic 2.2). Bond forming is **exothermic**.

The amount is the same in both directions. If 432 kJ is needed to break one mole of H–H bonds, then 432 kJ is released when one mole of H–H bonds forms.

## Bond enthalpy: an average value

The **bond enthalpy** (or bond energy) of a bond is the energy needed to break one mole of that bond in gaseous molecules, giving gaseous fragments. It is always a positive number, in kJ mol⁻¹.

A C–H bond in methane is not exactly the same as a C–H bond in ethanol: the neighbouring atoms pull on the electrons slightly differently. Tables therefore give an **average bond enthalpy**, taken over many different molecules that contain that bond. Using averages makes the method work for any molecule, but it also means the answer is an **estimate**.

The table below gives the values used on this page (average bond enthalpies from a standard data table).

| Bond | kJ mol⁻¹ | Bond | kJ mol⁻¹ | Bond | kJ mol⁻¹ |
|---|---|---|---|---|---|
| H–H | 432 | C–H | 413 | N–H | 391 |
| H–Cl | 427 | C–C | 347 | N≡N | 941 |
| H–Br | 363 | C=C | 614 | O–H | 467 |
| Cl–Cl | 239 | C≡C | 839 | O=O | 495 |
| Br–Br | 193 | C–O | 358 | C=O (in CO₂) | 799 |

Notice that a C=C double bond (614) is stronger than a C–C single bond (347) but **not** twice as strong. A double bond is a different bond with its own value.

Three patterns in the table link back to Unit 2:

- **More shared electron pairs, stronger bond.** C–C 347, C=C 614, C≡C 839. Triple bonds are also the shortest.
- **Smaller atoms, stronger bond.** H–Cl (427) is stronger than H–Br (363), because the bromine atom is larger and its bonding electrons are further from the nuclei.
- **Very strong bonds make very stable molecules.** N≡N (941) is the strongest bond in this table, which is why nitrogen gas reacts so reluctantly. Any reaction that has to break it pays a large energy cost first.

You will not need to memorise these values. Exam questions supply the bond enthalpies you need, usually in a table like this one. Your job is to pick the right value for each bond and count the bonds correctly.

## The bond-enthalpy method

Picture the reaction happening in two imaginary stages:

1. **Break** every bond in the reactant molecules, giving separate gaseous atoms. Energy goes **in**: + Σ(bonds broken).
2. **Form** every bond in the product molecules from those atoms. Energy comes **out**: − Σ(bonds formed).

Adding the two stages gives the estimate:

> **ΔH ≈ Σ(bond enthalpies of bonds broken) − Σ(bond enthalpies of bonds formed)**

- If **energy released > energy needed**, ΔH is **negative**: the reaction is **exothermic**. The bonds in the products are stronger overall than those in the reactants.
- If **energy needed > energy released**, ΔH is **positive**: the reaction is **endothermic**.

The real reaction does not break every bond first. That does not matter: enthalpy depends only on the start and the end, so any imaginary path between them gives the same ΔH.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="be1-title be1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="be1-title">Bond-breaking and bond-forming steps for hydrogen reacting with chlorine</title>
<desc id="be1-desc">Vertical axis: energy in kilojoules per mole, from minus 200 to 800 in steps of 200. The starting level, H2 gas plus Cl2 gas, is at 0. A solid upward arrow labelled break bonds, plus 671, rises to a high level labelled 2H gas plus 2Cl gas, separate atoms, at 671. A long dashed downward arrow labelled form bonds, minus 854, falls to the final level, 2HCl gas, at minus 183, below the start. A short downward arrow between the starting level and the final level is labelled delta H approximately minus 183.</desc>
<defs><marker id="be1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="90" y1="250" x2="90" y2="25" stroke="#1d2b44" stroke-width="2" marker-end="url(#be1a)"/>
<line x1="84" y1="40.0" x2="90" y2="40.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="44.0" text-anchor="end" font-size="12" fill="#1d2b44">800</text>
<line x1="84" y1="80.0" x2="90" y2="80.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="84.0" text-anchor="end" font-size="12" fill="#1d2b44">600</text>
<line x1="84" y1="120.0" x2="90" y2="120.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="124.0" text-anchor="end" font-size="12" fill="#1d2b44">400</text>
<line x1="84" y1="160.0" x2="90" y2="160.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="164.0" text-anchor="end" font-size="12" fill="#1d2b44">200</text>
<line x1="84" y1="200.0" x2="90" y2="200.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="204.0" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<line x1="84" y1="240.0" x2="90" y2="240.0" stroke="#1d2b44" stroke-width="1.5"/><text x="80" y="244.0" text-anchor="end" font-size="12" fill="#1d2b44">−200</text>
<text x="24" y="140" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 24 140)">Energy (kJ mol⁻¹)</text>
<line x1="110" y1="200.0" x2="230" y2="200.0" stroke="#1d2b44" stroke-width="3"/>
<line x1="230" y1="200.0" x2="600" y2="200.0" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="250" y1="65.8" x2="450" y2="65.8" stroke="#1d2b44" stroke-width="3"/>
<line x1="460" y1="236.6" x2="600" y2="236.6" stroke="#1d2b44" stroke-width="3"/>
<line x1="265" y1="198.0" x2="265" y2="68.8" stroke="#1d2b44" stroke-width="2.2" marker-end="url(#be1a)"/>
<line x1="440" y1="67.8" x2="440" y2="233.6" stroke="#1d2b44" stroke-width="2.2" stroke-dasharray="7 4" marker-end="url(#be1a)"/>
<line x1="575" y1="202.0" x2="575" y2="233.6" stroke="#1d2b44" stroke-width="2" marker-end="url(#be1a)"/>
<text x="170" y="192.0" text-anchor="middle" font-size="13" fill="#1d2b44">H₂(g) + Cl₂(g)</text>
<text x="350" y="57.8" text-anchor="middle" font-size="13" fill="#1d2b44">2H(g) + 2Cl(g): separate atoms</text>
<text x="530" y="256.6" text-anchor="middle" font-size="13" fill="#1d2b44">2HCl(g)</text>
<text x="273" y="125" font-size="13" fill="#1d2b44">break bonds</text>
<text x="273" y="141" font-size="13" fill="#1d2b44">+671</text>
<text x="432" y="125" text-anchor="end" font-size="13" fill="#1d2b44">form bonds</text>
<text x="432" y="141" text-anchor="end" font-size="13" fill="#1d2b44">−854</text>
<text x="568" y="222" text-anchor="end" font-size="12" fill="#1d2b44">ΔH ≈ −183</text>
<text x="350" y="285" text-anchor="middle" font-size="13" fill="#1d2b44">imaginary path: start → atoms → products</text>
</svg>
<figcaption>Figure 1. The bond-enthalpy method as an energy diagram, for H₂(g) + Cl₂(g) → 2HCl(g), in kJ mol⁻¹. The solid arrow up is the energy needed to break the H–H and Cl–Cl bonds (+671). The dashed arrow down is the energy released forming two H–Cl bonds (−854). The products end below the start, so ΔH ≈ −183 kJ mol⁻¹: exothermic.</figcaption>
</figure>

## Counting bonds without mistakes

Most errors in this topic are counting errors, not arithmetic errors. Use this routine:

1. **Draw a Lewis structure** for every reactant and product. You need to see every bond and whether it is single, double or triple.
2. **Make a table** of bond type × number, separately for reactants and products.
3. **Multiply by the coefficients.** 3H₂ means three H–H bonds.
4. **Check the atoms.** Every atom on the left appears on the right, so the bonds you form must use all the atoms you freed.
5. **Optional shortcut.** Cancel bonds that appear unchanged on both sides. The answer is the same, but there is less to add.

Watch three common traps: O₂ has a **double** bond (O=O), N₂ has a **triple** bond (N≡N), and each CO₂ molecule has **two** C=O bonds.

## Worked example 1: hydrogen and chlorine

**Question.** Estimate ΔH for H₂(g) + Cl₂(g) → 2HCl(g). Is the reaction exothermic or endothermic?

1. **Bonds broken** (reactants): 1 H–H + 1 Cl–Cl = 432 + 239 = **671 kJ**.
2. **Bonds formed** (products): 2 H–Cl = 2 × 427 = **854 kJ**.
3. **ΔH ≈ broken − formed** = 671 − 854 = **−183 kJ mol⁻¹**.

**Answer.** About −183 kJ per mole of reaction as written. More energy is released forming the two H–Cl bonds than is needed to break the H–H and Cl–Cl bonds, so the reaction is **exothermic**. Figure 1 shows the same numbers.

**Check.** A value from enthalpies of formation (Topic 6.8) is −184.6 kJ mol⁻¹, so this estimate is very close. Simple diatomic molecules give good estimates because their bond enthalpies are not averaged over many different molecules.

## Worked example 2: adding hydrogen to ethene

**Question.** Estimate ΔH for C₂H₄(g) + H₂(g) → C₂H₆(g).

1. **Lewis structures.** Ethene, H₂C=CH₂, has one C=C bond and four C–H bonds. H₂ has one H–H bond. Ethane, H₃C–CH₃, has one C–C bond and six C–H bonds.
2. **Count every bond.**

| | Bonds | Energy (kJ) |
|---|---|---|
| Broken | 1 C=C + 4 C–H + 1 H–H | 614 + 1652 + 432 = **2698** |
| Formed | 1 C–C + 6 C–H | 347 + 2478 = **2825** |

3. **ΔH ≈** 2698 − 2825 = **−127 kJ mol⁻¹**.

**Shortcut.** Four C–H bonds survive unchanged, so cancel them. Broken: C=C + H–H = 614 + 432 = 1046 kJ. Formed: C–C + 2 C–H = 347 + 826 = 1173 kJ. ΔH ≈ 1046 − 1173 = −127 kJ mol⁻¹, the same answer.

**Interpretation.** The reaction is exothermic. In effect, the second bond of the C=C double bond (about 614 − 347 = 267 kJ) and one H–H bond are replaced by two new C–H bonds, which are stronger in total.

## Worked example 3: making ammonia, and working backwards

**Question.** (a) Estimate ΔH for N₂(g) + 3H₂(g) → 2NH₃(g). (b) A value from enthalpies of formation is −92.2 kJ mol⁻¹. What N–H bond enthalpy would make the estimate match this value exactly?

**(a)**
1. **Bonds broken:** 1 N≡N + 3 H–H = 941 + 3(432) = 941 + 1296 = **2237 kJ**.
2. **Bonds formed:** each NH₃ has 3 N–H bonds and there are 2 molecules, so 6 N–H = 6(391) = **2346 kJ**.
3. **ΔH ≈** 2237 − 2346 = **−109 kJ mol⁻¹** (exothermic).

**(b)** Let the N–H bond enthalpy be x. Then 2237 − 6x = −92.2, so 6x = 2237 + 92.2 = 2329.2 and **x = 388 kJ mol⁻¹** (388.2).

**Interpretation.** The table value of 391 kJ mol⁻¹ is an average over many N–H bonds, not only those in ammonia. A difference of only 3 kJ per bond becomes 17 kJ in the answer, because six bonds form. This is why bond-enthalpy answers are estimates. The same "working backwards" method lets you estimate any one unknown bond enthalpy when ΔH and the other values are known.

## Why the answer is only an estimate

Two reasons account for most of the difference between a bond-enthalpy estimate and a measured value:

- **Averages.** Each table value is averaged over many molecules. The real bond in your molecule may be a little stronger or weaker.
- **Gases only.** Bond enthalpies describe gaseous molecules. If a reactant or product is a liquid or solid, the energy of the intermolecular forces (for example, condensing water vapour to liquid) is not included.

That is why Topic 6.8 uses tables of enthalpies of formation when an accurate value is needed. Bond enthalpies are still useful: they explain **why** a reaction is exothermic or endothermic, and they give a fast estimate for reactions with no measured data.

## Common misconceptions

- **"Breaking bonds releases energy."** It never does. Fuels release energy because the bonds **formed** in the products (for example, C=O and O–H) are stronger in total than the bonds broken.
- **Using formed − broken.** That gives the right size with the wrong sign. The order is broken minus formed.
- **Counting a double bond as two single bonds.** Two C–C bonds would be 694 kJ, but C=C is 614 kJ. Use the value for the bond actually present.
- **Forgetting coefficients or atoms per molecule.** 2NH₃ contains six N–H bonds, not three.
- **Treating O₂ and N₂ as single-bonded.** O₂ has O=O (495) and N₂ has N≡N (941).
- **Expecting an exact match with the measured ΔH.** Averages and states of matter make the estimate differ, sometimes by tens of kJ.
- **Thinking stronger bonds in the reactants make a reaction more exothermic.** Strong reactant bonds cost more energy to break, which makes ΔH **less** negative.

## Where this leads

Next, [Topic 6.8](/advanced-course-resources/chemistry/6-8-enthalpy-formation-study-guide/) shows how to calculate ΔH accurately from tables of standard enthalpies of formation, and Topic 6.9 (Hess's law) explains why any path between the same start and end gives the same ΔH, which is the idea behind Figure 1. Try the [practice questions](/advanced-course-resources/chemistry/6-7-bond-enthalpies-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/6-7-bond-enthalpies-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/6-7-bond-enthalpies-checklist/) to consolidate.
