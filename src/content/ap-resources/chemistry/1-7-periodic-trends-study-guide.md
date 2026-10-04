---
resourceId: "mb-ap-chem-1.7-study-guide"
title: "Periodic Trends: Study Guide (Chemistry 1.7)"
description: "Explain trends in atomic and ionic radius, ionization energy, electron affinity and electronegativity using Coulomb's law, shielding and effective nuclear charge."
course: "chemistry"
unit: 1
topics: ["1.7"]
resourceType: "study-guide"
prerequisites:
  - "Writing ground-state electron configurations for atoms and ions (Topic 1.5)"
  - "Coulomb's law: attraction grows with charge and falls with distance (Topic 1.5)"
  - "Linking photoelectron spectra to shells and subshells (Topic 1.6)"
prerequisiteResources: ["mb-ap-chem-1.6-study-guide"]
learningObjectives:
  - "Explain why elements in the same group have similar properties, using their outer electron configurations"
  - "Use Coulomb's law, the shell model, shielding and effective nuclear charge to explain trends across a period and down a group"
  - "Explain trends in atomic radius, ionic radius, ionization energy, electron affinity and electronegativity"
  - "Explain the dips in first ionization energy at groups 13 and 16"
  - "Estimate a missing value for an element from the values of its neighbours on the periodic table"
skills: ["4", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Only simple averaging is needed. Ionization energies are in kJ mol⁻¹; electronegativities (Pauling scale) have no unit"
related: ["mb-ap-chem-1.7-revision-notes", "mb-ap-chem-1.7-practice", "mb-ap-chem-1.7-checklist"]
next: "mb-ap-chem-1.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Every trend comes from one idea: Coulomb's law. Outer electrons are held more strongly when the effective nuclear charge is larger and when they are closer to the nucleus."
  - "Across a period, nuclear charge rises but shielding by core electrons stays about the same, so atoms get smaller and hold their electrons more tightly."
  - "Down a group, each new shell puts the outer electrons farther from the nucleus, so atoms get larger and hold their outer electrons less tightly."
  - "First ionization energy dips at groups 13 and 16: a new, higher-energy p subshell starts, and then the first paired p electron feels extra repulsion."
  - "You can estimate a missing value by using the trend between neighbouring elements in the same group or period."
faqs:
  - question: "Do I have to give a numerical effective nuclear charge?"
    answer: "No. The course treats trends qualitatively. A simple estimate (nuclear charge minus core electrons) is a useful way to compare atoms in the same period, but you explain trends in words using Coulomb's law."
  - question: "What is the difference between electron affinity and electronegativity?"
    answer: "Electron affinity is a measured energy change when an isolated gaseous atom gains an electron. Electronegativity describes how strongly an atom attracts the shared electrons in a covalent bond, on a scale with no unit."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why the periodic table repeats

If you list the elements in order of atomic number, similar properties come back at regular intervals. Lithium, sodium and potassium are all soft, reactive metals. Fluorine, chlorine and bromine all form 1− ions. This repeating pattern is called **periodicity**, and the periodic table is built around it.

The reason is electronic structure:

- Elements in the same **group** have the same pattern of **valence electrons**. Lithium is [He] 2s¹, sodium is [Ne] 3s¹ and potassium is [Ar] 4s¹. The outer electron is the one that takes part in reactions, so the three metals react in similar ways.
- Each **period** fills one new outer shell. A period ends at a noble gas, where the shell's s and p subshells are completely filled.
- The **blocks** of the table match the subshell being filled: s-block (groups 1–2), p-block (groups 13–18), d-block (transition metals).

So the table's shape is not arbitrary. Moving along a row adds one proton and one electron at a time. Moving down a column adds one whole shell. Filled shells (noble gases) and the start of a new subshell show up as sudden changes in the data, as you will see in Figure 2.

You need to write configurations that follow the aufbau order. Writing the configurations of elements that break that order (such as chromium and copper) is not assessed in this course.

## The model behind every trend

You will explain all four trends in this topic with the same three ideas.

**1. Coulomb's law.** The force between two charges is F ∝ q₁q₂ / r². For an atom, q₁ is the positive charge the outer electron "feels" from the nucleus, q₂ is the electron's charge and r is its distance from the nucleus. Bigger charge means stronger attraction. Greater distance means weaker attraction, and fast: doubling r cuts the force to one quarter.

**2. The shell model.** Electrons occupy shells (n = 1, 2, 3 …). Electrons in a higher shell are, on average, farther from the nucleus.

**3. Shielding and effective nuclear charge.** Core electrons (those in inner shells) sit between the nucleus and the valence electrons. They repel the valence electrons and cancel part of the nuclear charge. This is **shielding**. The net positive charge a valence electron feels is the **effective nuclear charge**, Z_eff.

A simple estimate is Z_eff ≈ (number of protons) − (number of core electrons).

| Atom | Protons | Core electrons | Simple Z_eff estimate |
|---|---|---|---|
| Na | 11 | 10 | +1 |
| Mg | 12 | 10 | +2 |
| Cl | 17 | 10 | +7 |
| K | 19 | 18 | +1 |

This estimate ignores the small shielding that electrons in the same shell give each other, so real values are lower. It is good enough to compare atoms in the same period.

From these ideas you get two rules:

- **Across a period (left to right):** protons are added, but the new electrons go into the same shell. Core shielding stays the same, so Z_eff rises. The outer electrons are pulled closer and held more tightly.
- **Down a group:** Z_eff stays roughly the same (Na and K both about +1), but each step adds a shell. The outer electrons are farther away and held less tightly.

<figure>
<svg viewBox="0 0 640 380" role="img" aria-labelledby="trend-map-title trend-map-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="trend-map-title">Summary of periodic trends across a period and down a group</title>
<desc id="trend-map-desc">A rectangle stands for the main-group periodic table. A solid arrow along the top points right, for moving across a period: effective nuclear charge rises and the outer shell stays the same, so atomic radius decreases, first ionization energy increases, electronegativity increases and usually more energy is released when an electron is added. A dashed arrow down the left side points down, for moving down a group: a new shell is added farther from the nucleus, so atomic radius increases, first ionization energy decreases, electronegativity decreases and usually less energy is released when an electron is added.</desc>
<defs><marker id="pt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="150" y="75" width="475" height="290" rx="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M160 50 H615" stroke="#1d2b44" stroke-width="3" marker-end="url(#pt-arrow)"/>
<text x="387" y="36" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Across a period: Z_eff rises, same outer shell</text>
<path d="M120 85 V355" stroke="#1d2b44" stroke-width="3" stroke-dasharray="8 5" marker-end="url(#pt-arrow)"/>
<text x="16" y="180" font-size="14" font-weight="600" fill="#1d2b44">Down a</text>
<text x="16" y="199" font-size="14" font-weight="600" fill="#1d2b44">group:</text>
<text x="16" y="220" font-size="13" fill="#1d2b44">new shell,</text>
<text x="16" y="238" font-size="13" fill="#1d2b44">farther out</text>
<text x="170" y="105" font-size="14" font-weight="600" fill="#1d2b44">Across a period (solid arrow)</text>
<text x="180" y="128" font-size="13" fill="#1d2b44">• atomic radius decreases</text>
<text x="180" y="148" font-size="13" fill="#1d2b44">• first ionization energy increases</text>
<text x="180" y="168" font-size="13" fill="#1d2b44">• electronegativity increases</text>
<text x="180" y="188" font-size="13" fill="#1d2b44">• usually more energy released on gaining an electron</text>
<text x="170" y="225" font-size="14" font-weight="600" fill="#1d2b44">Down a group (dashed arrow)</text>
<text x="180" y="248" font-size="13" fill="#1d2b44">• atomic radius increases</text>
<text x="180" y="268" font-size="13" fill="#1d2b44">• first ionization energy decreases</text>
<text x="180" y="288" font-size="13" fill="#1d2b44">• electronegativity decreases</text>
<text x="180" y="308" font-size="13" fill="#1d2b44">• usually less energy released on gaining an electron</text>
<text x="170" y="345" font-size="12" fill="#1d2b44">Noble gases are left out of the electronegativity and electron affinity trends.</text>
</svg>
<figcaption>Figure 1. The general direction of each trend. Every arrow is explained by Coulomb's law: a larger effective nuclear charge or a smaller distance means a stronger attraction for the outer electrons.</figcaption>
</figure>

## Atomic radius

Atomic radius is half the distance between the nuclei of two bonded atoms of the same element. You compare sizes; you do not need to memorise values.

- **Across a period, radius decreases.** Z_eff rises, so the same outer shell is pulled in more tightly. Chlorine is smaller than sodium even though it has more electrons.
- **Down a group, radius increases.** Each element has one more occupied shell than the one above it, and shielding by the extra core electrons cancels most of the extra nuclear charge.

## Ionic radius

- **Cations are smaller than their atoms.** Sodium loses its 3s electron to form Na⁺ (1s² 2s² 2p⁶). The whole n = 3 shell is gone, and the remaining electrons are held by the same 11 protons.
- **Anions are larger than their atoms.** Chlorine gains an electron to form Cl⁻. The nuclear charge is unchanged, but the extra electron adds electron–electron repulsion, so the electron cloud spreads out.
- **Isoelectronic ions** have the same number of electrons. In such a series, the ion with **more protons is smaller**, because the same electron cloud is pulled by a larger nuclear charge (see Worked example 1).

## Ionization energy

The **first ionization energy** is the energy needed to remove the most loosely held electron from one mole of gaseous atoms: X(g) → X⁺(g) + e⁻. A larger value means the electron is held more strongly.

<figure>
<svg viewBox="0 0 640 360" role="img" aria-labelledby="ie-graph-title ie-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ie-graph-title">First ionization energy of elements 3 to 18</title>
<desc id="ie-graph-desc">Line graph of first ionization energy in kilojoules per mole against atomic number from lithium to argon. Period 2 values: Li 520, Be 899, B 801, C 1086, N 1402, O 1314, F 1681, Ne 2081. Period 3 values: Na 496, Mg 738, Al 578, Si 787, P 1012, S 1000, Cl 1251, Ar 1521. Each period rises from the group 1 metal to the noble gas, with small dips at group 13 (B and Al) and group 16 (O and S). The value falls sharply from neon to sodium.</desc>
<g stroke="#c9cfd8" stroke-width="1">
<line x1="80" y1="248" x2="610" y2="248"/><line x1="80" y1="196" x2="610" y2="196"/><line x1="80" y1="144" x2="610" y2="144"/><line x1="80" y1="92" x2="610" y2="92"/><line x1="80" y1="40" x2="610" y2="40"/>
</g>
<line x1="80" y1="300" x2="615" y2="300" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="300" x2="80" y2="35" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="304">0</text><text x="72" y="252">500</text><text x="72" y="200">1000</text><text x="72" y="148">1500</text><text x="72" y="96">2000</text><text x="72" y="44">2500</text>
</g>
<text x="20" y="170" font-size="13" fill="#1d2b44" transform="rotate(-90 20 170)" text-anchor="middle">First ionization energy (kJ mol⁻¹)</text>
<text x="345" y="345" font-size="13" fill="#1d2b44" text-anchor="middle">Atomic number, Z (3 to 18)</text>
<polyline points="80,245.9 115.3,206.5 150.7,216.7 186,187.1 221.3,154.2 256.7,163.3 292,125.2 327.3,83.6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polyline points="362.7,248.4 398,223.2 433.3,239.9 468.7,218.2 504,194.8 539.3,196 574.7,169.9 610,141.8" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<line x1="327.3" y1="83.6" x2="362.7" y2="248.4" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<g fill="#1d2b44">
<circle cx="80" cy="245.9" r="4"/><circle cx="115.3" cy="206.5" r="4"/><circle cx="150.7" cy="216.7" r="4"/><circle cx="186" cy="187.1" r="4"/><circle cx="221.3" cy="154.2" r="4"/><circle cx="256.7" cy="163.3" r="4"/><circle cx="292" cy="125.2" r="4"/><circle cx="327.3" cy="83.6" r="4"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<rect x="358.7" y="244.4" width="8" height="8"/><rect x="394" y="219.2" width="8" height="8"/><rect x="429.3" y="235.9" width="8" height="8"/><rect x="464.7" y="214.2" width="8" height="8"/><rect x="500" y="190.8" width="8" height="8"/><rect x="535.3" y="192" width="8" height="8"/><rect x="570.7" y="165.9" width="8" height="8"/><rect x="606" y="137.8" width="8" height="8"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="266">Li</text><text x="115.3" y="196">Be</text><text x="150.7" y="236">B</text><text x="186" y="177">C</text><text x="221.3" y="144">N</text><text x="256.7" y="183">O</text><text x="292" y="115">F</text><text x="327.3" y="73">Ne</text>
<text x="362.7" y="270">Na</text><text x="398" y="213">Mg</text><text x="433.3" y="260">Al</text><text x="468.7" y="208">Si</text><text x="504" y="184">P</text><text x="539.3" y="216">S</text><text x="574.7" y="159">Cl</text><text x="610" y="131">Ar</text>
</g>
</svg>
<figcaption>Figure 2. First ionization energies (kJ mol⁻¹, rounded) for lithium to argon. Period 2: solid line and filled circles; period 3: dashed line and open squares. Both periods rise overall, dip at group 13 (B, Al) and group 16 (O, S), and peak at the noble gas.</figcaption>
</figure>

**The general trends.** First ionization energy increases across a period (Z_eff rises and the electron is closer) and decreases down a group (the electron is in a shell farther from the nucleus). Compare Li 520 with Na 496 kJ mol⁻¹, or Ne 2081 with Ar 1521 kJ mol⁻¹. The sharp fall from Ne to Na is the start of a new shell.

**The two dips.** These are where the data test whether you understand the model, not just the arrow.

- **Group 2 → group 13 (Be → B, Mg → Al).** Boron's outer electron is in a 2p subshell; beryllium's is in 2s. A 2p electron is higher in energy and, on average, slightly farther from the nucleus and more shielded by the 2s electrons. It is easier to remove, even though boron has one more proton. Photoelectron spectra (Topic 1.6) show the same thing: the 2p peak sits at lower binding energy than the 2s peak.
- **Group 15 → group 16 (N → O, P → S).** Nitrogen has three 2p electrons, one in each 2p orbital. In oxygen the fourth 2p electron must share an orbital with another electron. The two electrons in the same orbital repel each other, so one of them is easier to remove. This extra repulsion outweighs the extra proton.

**Successive ionization energies.** Removing a second, third, … electron always takes more energy, because each electron leaves a more positive ion behind. The huge jump comes when the next electron must come from a full inner shell. For magnesium the values are 738, 1451 and 7733 kJ mol⁻¹: the third electron comes from the n = 2 shell, much closer to the nucleus and shielded only by the two 1s electrons. This is why magnesium forms Mg²⁺ and never Mg³⁺ in its compounds.

## Electron affinity

**Electron affinity** describes the energy change when an electron is added to one mole of gaseous atoms: X(g) + e⁻ → X⁻(g). For most elements energy is released. Data tables use different sign conventions, so always ask "how much energy is released?"

- **Across a period**, more energy is usually released: the incoming electron feels a larger Z_eff. The halogens release the most in each period.
- **Down a group**, less energy is usually released: the added electron goes into a shell farther from the nucleus.
- **Low points** match the ionization-energy dips. In group 2 the new electron must enter a higher-energy p subshell; in group 15 it must pair up in a half-filled p subshell; in group 18 it must start a new shell. These atoms release less energy than their neighbours, and some release none.

One well-known exception: chlorine releases more energy than fluorine. The fluorine atom is so small that the added electron is crowded by the other 2p electrons. You do not need to memorise electron affinity values.

## Electronegativity

**Electronegativity** is how strongly an atom in a covalent bond attracts the shared pair of electrons. On the Pauling scale it has no unit. Fluorine is the highest at 3.98.

- **Across a period, electronegativity increases.** A larger Z_eff pulls the bonding pair more strongly.
- **Down a group, electronegativity decreases.** The bonding pair is farther from the nucleus and more shielded.
- Diagonal comparisons need care. Oxygen (3.44) is more electronegative than chlorine (3.16), even though chlorine has a larger simple Z_eff, because oxygen's bonding electrons are in the n = 2 shell, much closer to its nucleus.

Noble gases are usually left out, because most form no compounds.

## Using trends to estimate missing values

Periodicity lets you estimate a property when you have no data. Use neighbours in the same group (or period), check which way the trend goes, and place your estimate in between. An estimate is a reasoned prediction, so give an approximate value and the trend that justifies it.

## Worked example 1: ordering isoelectronic ions by size

**Question.** Put O²⁻, F⁻, Na⁺ and Mg²⁺ in order of increasing radius, and explain the order.

1. Count electrons: O²⁻ has 8 + 2 = 10, F⁻ has 9 + 1 = 10, Na⁺ has 11 − 1 = 10, Mg²⁺ has 12 − 2 = 10. All four have the configuration 1s² 2s² 2p⁶, so they are isoelectronic.
2. The electrons are in the same shells and shield each other in the same way. The only difference is the number of protons: 8, 9, 11, 12.
3. By Coulomb's law, more protons pull the same electron cloud closer.

**Answer.** Mg²⁺ < Na⁺ < F⁻ < O²⁻.

**Check.** The anions are larger than the cations, as expected: the anions have fewer protons than electrons, while the cations have more protons than electrons.

## Worked example 2: explaining a dip in ionization energy

**Question.** The first ionization energies of nitrogen and oxygen are 1402 and 1314 kJ mol⁻¹. Explain why oxygen's value is lower, even though oxygen has a larger nuclear charge. Then explain why fluorine's value (1681 kJ mol⁻¹) is higher than oxygen's.

1. Configurations: N is 1s² 2s² 2p³; O is 1s² 2s² 2p⁴.
2. In nitrogen, each 2p electron is alone in its own orbital. In oxygen, two of the 2p electrons share one orbital.
3. The paired electrons repel each other. This repulsion raises the energy of one of them, so it is easier to remove. The effect is larger than the effect of one extra proton, so oxygen's first ionization energy is lower.
4. From oxygen to fluorine, the electron removed is in the same 2p subshell and both atoms have paired 2p electrons. Fluorine has one more proton but the same core (1s²), so Z_eff is larger and the electron is held more strongly. The normal trend resumes.

**Answer.** Electron–electron repulsion in the first doubly occupied 2p orbital lowers oxygen's value; from O to F, the rise in Z_eff with no change in shell raises the value again.

**Why the wording matters.** "Half-filled subshells are stable" is a label, not an explanation. Name the cause: repulsion between paired electrons in the same orbital.

## Worked example 3: estimating a value from neighbours

**Question.** The first ionization energies of chlorine and iodine are 1251 and 1008 kJ mol⁻¹. Bromine lies between them in group 17. Estimate bromine's first ionization energy and justify your estimate.

1. Bromine's outer electrons are in the n = 4 shell: farther out than chlorine's (n = 3), closer in than iodine's (n = 5).
2. Its value should therefore lie between the two. A simple estimate is the mean: (1251 + 1008) ÷ 2 = 1129.5, or about 1130 kJ mol⁻¹.

**Answer.** About 1130 kJ mol⁻¹, lower than chlorine's and higher than iodine's because bromine's outer electron is in an intermediate shell.

**Check.** The measured value is 1140 kJ mol⁻¹. The estimate is within about 1%, which is good for a trend-based estimate. Any value clearly between the two neighbours, with the shell argument, is a sound answer.

## Common misconceptions

- **"More electrons make a bigger atom."** Across a period, electrons are added but atoms shrink, because they go into the same shell while Z_eff rises.
- **"Atoms want a full shell, so they give away electrons easily."** Removing an electron always needs energy. Explain trends with attractions and repulsions, not with what atoms "want".
- **Using "more shielding" across a period.** Core shielding is about the same across a period. The change is the nuclear charge.
- **Explaining a dip with "half-filled is stable".** Name the cause: the start of a higher-energy p subshell (group 13) or repulsion between paired electrons (group 16).
- **Mixing up electron affinity and electronegativity.** The first is a measured energy change for an isolated atom; the second describes attraction for shared electrons in a bond.
- **Giving only a trend as an explanation.** "Ionization energy increases across a period" describes the pattern. An explanation needs the reason: more protons, same shell, similar shielding, so a stronger attraction.

## Where this leads

Periodic trends explain why metals in groups 1 and 2 form positive ions and why halogens form negative ions. Next, in [Topic 1.8, Valence Electrons and Ionic Compounds](/advanced-course-resources/chemistry/1-8-valence-electrons-ionic-compounds-study-guide/), you will use them to predict the formulas of ionic compounds. In Unit 2, electronegativity differences decide whether a bond is ionic, polar covalent or nonpolar. Try the [practice questions](/advanced-course-resources/chemistry/1-7-periodic-trends-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/1-7-periodic-trends-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/1-7-periodic-trends-checklist/) to consolidate. If photoelectron spectra still feel shaky, revisit [Topic 1.6](/advanced-course-resources/chemistry/1-6-photoelectron-spectroscopy-study-guide/).
