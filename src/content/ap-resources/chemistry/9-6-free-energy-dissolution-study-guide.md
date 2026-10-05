---
resourceId: "mb-ap-chem-9.6-study-guide"
title: "Free Energy of Dissolution: Study Guide (Chemistry 9.6)"
description: "Learn how the enthalpy and entropy changes of three particle-level factors combine into the free energy of dissolving a salt, and why that makes solubility hard to predict."
course: "chemistry"
unit: 9
topics: ["9.6"]
resourceType: "study-guide"
prerequisites:
  - "Ion–dipole attractions and why ionic solids dissolve in water (Topic 3.10)"
  - "The solubility product K_sp (Topic 7.11)"
  - "ΔG° = ΔH° − TΔS° and ΔG° = −RT ln K (Topics 9.3 and 9.5)"
prerequisiteResources: ["mb-ap-chem-9.5-study-guide"]
learningObjectives:
  - "Describe the three particle-level factors that contribute to the free energy change of dissolving a salt"
  - "Predict the sign of the enthalpy and entropy contributions of each factor"
  - "Explain why a salt can dissolve even when dissolving is endothermic, and why some salts barely dissolve even when dissolving is exothermic"
  - "Link the free energy of dissolution to K_sp and calculate one from the other"
  - "Explain the limits of a simple model for predicting solubility, including the effect of cancelling terms"
skills: ["4", "5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "R = 8.314 J mol⁻¹ K⁻¹; convert kJ to J and °C to K; all salt data on this page are invented for practice"
related: ["mb-ap-chem-9.6-revision-notes", "mb-ap-chem-9.6-practice", "mb-ap-chem-9.6-checklist"]
next: "mb-ap-chem-9.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Three things happen when a salt dissolves: the solid's ion–ion attractions break, the solvent reorganises around the ions, and the ions attract solvent molecules."
  - "Breaking up the solid costs energy (ΔH > 0) but frees the ions (ΔS > 0). Ion–solvent attractions release energy (ΔH < 0) but order the solvent (ΔS < 0)."
  - "ΔG°(dissolution) = ΔH° − TΔS° combines all of these, and ΔG° = −RT ln K_sp links it to solubility."
  - "Large terms of opposite sign nearly cancel, so the overall sign of ΔG° is hard to predict from the particle picture alone."
  - "Endothermic dissolving can still be favoured if the entropy gain is large enough."
faqs:
  - question: "Why do some salts get colder when they dissolve?"
    answer: "For those salts, the energy needed to separate the ions is a little larger than the energy released when the ions attract water. Dissolving is endothermic, so heat flows in from the water and the solution cools. The salt still dissolves because the entropy increase makes ΔG° negative."
  - question: "Does entropy always increase when a solid dissolves?"
    answer: "Not always. Freeing the ions increases entropy, but water molecules held in ordered shells around the ions decrease it. For small or highly charged ions the ordering can win, and the overall entropy change of dissolving is negative."
  - question: "Do I need to calculate lattice energies?"
    answer: "No. This topic asks you to estimate the sign and the relative size of each contribution and to explain why the total is hard to predict. Any numbers you need will be given."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Dissolving as a thermodynamic process

In [Topic 3.10](/advanced-course-resources/chemistry/3-10-solubility-study-guide/) you explained solubility with intermolecular forces and "like dissolves like". In [Topic 7.11](/advanced-course-resources/chemistry/7-11-introduction-solubility-equilibria-study-guide/) you treated dissolving a sparingly soluble salt as an equilibrium with constant K_sp. Now you can join these with free energy.

For a salt MX dissolving in water:

MX(s) ⇌ M⁺(aq) + X⁻(aq)  K = K_sp

The free energy change for this process, ΔG°(dissolution), works like any other ΔG°:

- **ΔG° = ΔH° − TΔS°** (Topic 9.3), and
- **ΔG° = −RT ln K_sp** ([Topic 9.5](/advanced-course-resources/chemistry/9-5-free-energy-equilibrium-study-guide/)).

So a salt with a negative ΔG° of dissolution has K_sp > 1 and is very soluble. A salt with a large positive ΔG° has a tiny K_sp and is only sparingly soluble. The question for this topic is: **what decides ΔH° and ΔS° for dissolving, and why is the result so hard to predict?**

## Three factors at the particle level

The CED describes dissolving in terms of three factors. Each one has an enthalpy part and an entropy part.

| Factor | What happens to the particles | ΔH contribution | ΔS contribution |
|---|---|---|---|
| 1. Breaking up the solid | Ions are pulled apart, overcoming the ion–ion attractions that hold the lattice together | **Positive** and large: attractions are overcome | **Positive**: ions leave a fixed, ordered lattice and can spread through the whole solution |
| 2. Reorganising the solvent | Some water–water hydrogen bonds are broken to make room, and water molecules turn to face the ions in shells | Usually **positive**: some solvent–solvent attractions are lost | Usually **negative**: water molecules near the ions are held in more ordered arrangements |
| 3. Ion–solvent attractions | Each ion is surrounded by water molecules attracted to it (ion–dipole) | **Negative** and large: new attractions form | Closely tied to factor 2: the same attractions hold water molecules in place |

Two patterns matter most:

- **Enthalpy.** Factor 1 costs a lot of energy; factor 3 gives back a lot. ΔH° of dissolving is the small difference between two large numbers. It can be positive (endothermic dissolving) or negative (exothermic dissolving).
- **Entropy.** Factor 1 increases entropy; factors 2 and 3 decrease it. Again the total can go either way.

### How the size and charge of the ions matter

- **Small or highly charged ions** (for example 2+, 3+ or 2− ions) attract each other strongly in the solid, so factor 1 needs more energy. They also attract water strongly, so factor 3 releases more energy. In addition, they hold more water molecules more tightly, so the ordering in factor 2 is larger and the entropy change of dissolving is less positive, or even negative.
- **Large ions with a single charge** attract water less strongly. Fewer water molecules are ordered, so the entropy gain from freeing the ions usually wins: ΔS° of dissolving is positive.

This is one reason why many salts made of two highly charged ions, such as many carbonates and phosphates with 2+ or 3+ metal ions, are only sparingly soluble.

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="diss-title diss-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="diss-title">Enthalpy picture of dissolving a salt, not to scale</title>
<desc id="diss-desc">An enthalpy level diagram. The starting level, solid MX plus water, is near the bottom. A long upward arrow labelled factor 1, break ion–ion attractions, enthalpy change large and positive, entropy change positive, leads to a high level labelled separated ions plus water. A long downward arrow labelled factors 2 and 3, solvent reorganises and ion–dipole attractions form, enthalpy change large and negative, entropy change usually negative, leads to the final level, dissolved ions, which is drawn slightly above the starting level. A short arrow between the starting and final levels is labelled ΔH of dissolution, small; here slightly positive.</desc>
<line x1="60" y1="240" x2="250" y2="240" stroke="#1d2b44" stroke-width="3"/>
<text x="155" y="262" font-size="13" text-anchor="middle" fill="#1d2b44">MX(s) + water</text>
<line x1="200" y1="50" x2="460" y2="50" stroke="#1d2b44" stroke-width="3"/>
<text x="330" y="40" font-size="13" text-anchor="middle" fill="#1d2b44">M⁺ and X⁻ separated + water (imaginary step)</text>
<line x1="400" y1="215" x2="590" y2="215" stroke="#1d2b44" stroke-width="3"/>
<text x="495" y="237" font-size="13" text-anchor="middle" fill="#1d2b44">M⁺(aq) + X⁻(aq)</text>
<path d="M230 238 V56" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#diss-arrow)"/>
<text x="40" y="120" font-size="12" fill="#1d2b44">Factor 1: break</text>
<text x="40" y="136" font-size="12" fill="#1d2b44">ion–ion attractions</text>
<text x="40" y="152" font-size="12" fill="#1d2b44">ΔH ≫ 0, ΔS &gt; 0</text>
<path d="M430 52 V209" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 4" marker-end="url(#diss-arrow)"/>
<text x="445" y="110" font-size="12" fill="#1d2b44">Factors 2 and 3: solvent</text>
<text x="445" y="126" font-size="12" fill="#1d2b44">reorganises, ion–dipole</text>
<text x="445" y="142" font-size="12" fill="#1d2b44">attractions form</text>
<text x="445" y="158" font-size="12" fill="#1d2b44">ΔH ≪ 0, ΔS usually &lt; 0</text>
<path d="M258 240 H410 V221" stroke="#1d2b44" stroke-width="1.5" fill="none" marker-end="url(#diss-arrow)"/>
<text x="300" y="290" font-size="12" fill="#1d2b44">ΔH°(dissolution): small difference,</text>
<text x="300" y="306" font-size="12" fill="#1d2b44">here slightly positive</text>
<defs><marker id="diss-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. The solid arrow (factor 1) and the dashed arrow (factors 2 and 3) are both large, so the overall ΔH° of dissolving is a small difference. Drawn for an endothermic case; for other salts the final level sits below the start. The diagram shows enthalpy only; the entropy signs are written on the arrows.</figcaption>
</figure>

## Why predictions are hard: cancellation

The CED stresses one idea: you can estimate the **sign and relative size** of each contribution, but predicting the **total** ΔG° of dissolution is difficult. The reason is cancellation.

- In enthalpy, a large positive term (factor 1) is nearly cancelled by a large negative term (factor 3). A small percentage error in either can flip the sign of ΔH°.
- In entropy, the positive term (freeing the ions) is partly cancelled by the negative term (ordering the solvent).
- Then ΔH° and −TΔS° can themselves have opposite signs and partly cancel again.

So the particle picture explains **why** a salt behaves as it does once you know the data. It is much weaker at predicting the result in advance. This is the "degree to which a model describes" a system that the course asks you to judge.

## Temperature and solubility

Because ΔG° = ΔH° − TΔS°, temperature changes ΔG° of dissolution and therefore K_sp.

- If dissolving is **endothermic** (ΔH° > 0), K_sp **increases** as the temperature rises: the salt becomes more soluble.
- If dissolving is **exothermic** (ΔH° < 0), K_sp **decreases** as the temperature rises.

This follows from K = e^(−ΔH°/RT + ΔS°/R), assuming ΔH° and ΔS° are roughly constant: only the ΔH° term depends on T. It matches Le Chatelier's principle, with heat treated as a reactant for an endothermic process.

## Worked example 1: an endothermic salt that still dissolves

**Question.** For the invented salt MX, ΔH°(dissolution) = +18.0 kJ mol⁻¹ and ΔS°(dissolution) = +70.0 J mol⁻¹ K⁻¹. (a) Calculate ΔG° and K_sp at 298 K. (b) Explain the signs of ΔH° and ΔS° at the particle level. (c) Predict, with a calculation, how K_sp changes at 323 K.

**(a)**
1. ΔG° = ΔH° − TΔS° = 18.0 − (298)(0.0700) = 18.0 − 20.86 = **−2.86 kJ mol⁻¹**.
2. K_sp = e^(−ΔG°/RT) = e^(2860 / 2477.6) = e^1.154 = **3.17**.

ΔG° is negative and K_sp > 1, so dissolving is thermodynamically favoured: MX is very soluble, even though dissolving it absorbs heat.

**(b)** ΔH° is positive, so the energy needed to separate the ions (factor 1) and to break some water–water attractions (factor 2) is slightly more than the energy released by the new ion–dipole attractions (factor 3). ΔS° is positive, so the entropy gained by freeing the ions from the lattice is larger than the entropy lost as water molecules are ordered around them. This suggests the ions are not small or highly charged.

**(c)** At 323 K: ΔG° = 18.0 − (323)(0.0700) = 18.0 − 22.61 = −4.61 kJ mol⁻¹. RT = 8.314 × 323 = 2685.4 J mol⁻¹, so K_sp = e^(4610 / 2685.4) = e^1.717 = **5.57**. K_sp increases, so MX is more soluble in warm water, as expected for endothermic dissolving.

## Worked example 2: exothermic, yet barely soluble

**Question.** Two invented 1:1 salts are compared at 298 K.

| Salt | Ions | ΔH°(dissolution) | ΔS°(dissolution) |
|---|---|---|---|
| A | large, charges +1 and −1 | +5.0 kJ mol⁻¹ | +40 J mol⁻¹ K⁻¹ |
| B | small, charges +2 and −2 | −10.0 kJ mol⁻¹ | −120 J mol⁻¹ K⁻¹ |

(a) Calculate ΔG° and K_sp for each salt. (b) Explain why B, which dissolves exothermically, is far less soluble than A.

**(a)**
- Salt A: ΔG° = 5.0 − (298)(0.040) = 5.0 − 11.92 = **−6.92 kJ mol⁻¹**; K_sp = e^(6920/2477.6) = e^2.793 = **16.3**.
- Salt B: ΔG° = −10.0 − (298)(−0.120) = −10.0 + 35.76 = **+25.8 kJ mol⁻¹**; K_sp = e^(−25 760/2477.6) = e^(−10.40) = **3.05 × 10⁻⁵**.

**(b)** Enthalpy alone would wrongly suggest that B is the more soluble salt. The difference is entropy. B's small, doubly charged ions attract water molecules very strongly and hold many of them in ordered shells (factors 2 and 3). This ordering outweighs the entropy gained by freeing the ions, so ΔS° is strongly negative. At 298 K, −TΔS° = +35.8 kJ mol⁻¹, which more than cancels the favourable ΔH° of −10.0 kJ mol⁻¹. For A, the large singly charged ions order fewer water molecules, ΔS° is positive, and −TΔS° = −11.9 kJ mol⁻¹ outweighs the small positive ΔH°.

**Check.** The difference in ΔG° is 25.8 − (−6.9) = 32.7 kJ mol⁻¹. At 298 K each 5.7 kJ mol⁻¹ is a factor of 10, and 32.7 ÷ 5.7 ≈ 5.7, so the K_sp values should differ by about 10⁵·⁷ ≈ 5 × 10⁵. They do: 16.3 ÷ (3.05 × 10⁻⁵) ≈ 5 × 10⁵.

## Worked example 3: how far does the enthalpy-only model go?

**Question.** Dissolving ammonium nitrate, NH₄NO₃, in water is strongly endothermic: the solution becomes noticeably colder, which is why it is used in some instant cold packs. A student says: "Since dissolving NH₄NO₃ absorbs heat, it cannot be thermodynamically favoured." Explain the degree to which an enthalpy-only model describes this process.

**Answer.**
1. **What the model gets right.** The positive ΔH° correctly tells you that the attractions broken (ion–ion in the solid, some water–water hydrogen bonds) need more energy than the new ion–dipole attractions release. This explains why the solution cools.
2. **Where it fails.** NH₄NO₃ in fact dissolves readily in water. So ΔG° of dissolution must be negative. Since ΔH° > 0, the only way this can happen is a positive ΔS° large enough that TΔS° > ΔH°.
3. **Particle-level reason.** The large, singly charged ions NH₄⁺ and NO₃⁻ leave an ordered lattice and spread through the solution, a large entropy gain. They order relatively few water molecules, so the entropy loss from factor 2 is smaller.
4. **Conclusion.** An enthalpy-only model explains the temperature change but not the solubility. You need both ΔH° and ΔS° (through ΔG°) to explain whether a salt dissolves.

## Common misconceptions

- **"Endothermic dissolving means the salt is insoluble."** Not if ΔS° is positive and large enough. Cold-pack salts dissolve readily.
- **"Exothermic dissolving means the salt is soluble."** Not if ΔS° is strongly negative, as for many salts of small, highly charged ions (Worked example 2).
- **"Dissolving always increases entropy."** Freeing ions increases entropy, but ordering water around ions decreases it. The total can be negative.
- **"Breaking the lattice releases energy."** Separating ions always needs energy. Energy is released when the ions are attracted to water molecules.
- **"Dissolving breaks covalent bonds inside polyatomic ions."** NH₄⁺, NO₃⁻ and SO₄²⁻ stay intact; only the attractions between ions are overcome.
- **"A positive ΔG° of dissolution means none of the salt dissolves."** It means K_sp < 1. A small amount always dissolves.
- **"Hot water always dissolves more salt."** That is true only when dissolving is endothermic. When it is exothermic, K_sp falls as temperature rises.

## Where this leads

This topic used free energy to explain a physical process. Next, [Topic 9.7, Coupled Reactions](/advanced-course-resources/chemistry/9-7-coupled-reactions-study-guide/), shows how a reaction with a positive ΔG° can be driven by joining it to one with a large negative ΔG°. Try the [practice questions](/advanced-course-resources/chemistry/9-6-free-energy-dissolution-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/9-6-free-energy-dissolution-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/9-6-free-energy-dissolution-checklist/) to consolidate.
