---
resourceId: "mb-ap-chem-5.6-study-guide"
title: "Reaction Energy Profile: Study Guide (Chemistry 5.6)"
description: "Learn to draw and read the energy profile of an elementary reaction: reaction coordinate, transition state, forward and reverse activation energy, overall energy change and the Arrhenius idea."
course: "chemistry"
unit: 5
topics: ["5.6"]
resourceType: "study-guide"
prerequisites:
  - "The collision model and Maxwell–Boltzmann distributions (Topic 5.5)"
  - "Bond breaking needs energy; bond forming releases energy"
prerequisiteResources: ["mb-ap-chem-5.5-study-guide"]
learningObjectives:
  - "Describe an elementary reaction as bonds breaking and forming along a reaction coordinate"
  - "Draw a labelled energy profile for an elementary reaction, showing reactants, transition state and products"
  - "Read the forward activation energy, reverse activation energy and overall energy change from a profile, and calculate any one from the other two"
  - "Describe the transition state as the highest-energy arrangement, with bonds partly broken and partly formed"
  - "Explain, using the Arrhenius equation qualitatively, why rate rises with temperature and why a larger activation energy makes a reaction more sensitive to temperature"
skills: ["3", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "none-needed"
calculatorNote: "Profile calculations are additions and subtractions in kJ mol⁻¹. Arrhenius values in Worked example 3 are background only"
related: ["mb-ap-chem-5.6-revision-notes", "mb-ap-chem-5.6-practice", "mb-ap-chem-5.6-checklist"]
next: "mb-ap-chem-5.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "An energy profile plots energy against the reaction coordinate: reactants, up to a single peak (the transition state), down to products."
  - "Forward activation energy = energy of transition state − energy of reactants. Overall energy change ΔH = energy of products − energy of reactants."
  - "Reverse activation energy = energy of transition state − energy of products, so Eₐ(reverse) = Eₐ(forward) − ΔH."
  - "The transition state is the highest-energy arrangement of atoms, with old bonds partly broken and new bonds partly formed. It cannot be isolated."
  - "Arrhenius equation: k = A e^(−Eₐ/RT). Higher temperature gives a larger k; a larger Eₐ gives a smaller k that is more sensitive to temperature. You will not be asked to calculate with it."
faqs:
  - question: "Is the transition state the same as an intermediate?"
    answer: "No. A transition state sits at the top of a peak and lasts only as long as one molecular vibration; it cannot be isolated. An intermediate sits in a dip between two peaks in a multistep reaction and has a real, if short, lifetime. A single elementary step has a transition state but no intermediate."
  - question: "Does a negative ΔH make a reaction fast?"
    answer: "No. Speed depends on the activation energy, not on ΔH. A strongly exothermic reaction can still be very slow if its peak is high."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Bonds break, bonds form

In Topic 5.5 you saw that a successful collision needs enough energy and the right orientation. Now look *inside* one successful collision. During an elementary step, some bonds in the reactants break and new bonds form. For example, in the step

OH⁻ + CH₃Br → CH₃OH + Br⁻

the C–Br bond breaks while a new C–O bond forms. These changes do not happen at one instant. As the hydroxide ion approaches, the C–O distance shrinks and the C–Br distance grows. The atoms pass through a whole series of arrangements on the way from reactants to products.

The **reaction coordinate** is the axis along which you plot this progress. It is not time and it is not a single bond length. It is a way of squeezing a complicated set of atomic motions (bonds stretching, angles bending, atoms moving closer) into one line from "reactants" on the left to "products" on the right.

## The energy profile

An **energy profile** (reaction energy diagram) plots the energy of the reacting particles against the reaction coordinate. For one elementary step it has three landmarks:

1. **Reactants** on the left, at a flat level.
2. **The transition state**: the single highest point of the curve.
3. **Products** on the right, at another flat level.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="ep-title ep-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ep-title">Energy profile for the elementary step A + BC → AB + C</title>
<desc id="ep-desc">Energy in kilojoules per mole on the vertical axis, reaction coordinate on the horizontal axis. The curve starts flat at 40 for the reactants A + BC, rises smoothly to a single peak at 125 labelled transition state, then falls to a flat level at minus 15 for the products AB + C. A vertical arrow from the reactant level to the peak is labelled forward activation energy, 85. A vertical arrow from the product level to the peak is labelled reverse activation energy, 140. A downward arrow from the reactant level to the product level is labelled overall energy change, minus 55.</desc>
<defs><marker id="e6a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="285" x2="620" y2="285" stroke="#1d2b44" stroke-width="2" marker-end="url(#e6a)"/>
<line x1="70" y1="285" x2="70" y2="25" stroke="#1d2b44" stroke-width="2" marker-end="url(#e6a)"/>
<line x1="64" y1="226.7" x2="70" y2="226.7" stroke="#1d2b44" stroke-width="1.5"/><text x="60" y="231" text-anchor="end" font-size="12" fill="#1d2b44">0</text>
<line x1="64" y1="160" x2="70" y2="160" stroke="#1d2b44" stroke-width="1.5"/><text x="60" y="164" text-anchor="end" font-size="12" fill="#1d2b44">50</text>
<line x1="64" y1="93.3" x2="70" y2="93.3" stroke="#1d2b44" stroke-width="1.5"/><text x="60" y="97" text-anchor="end" font-size="12" fill="#1d2b44">100</text>
<line x1="160" y1="173.3" x2="552" y2="173.3" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="140" y1="60" x2="490" y2="60" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<path d="M80 173.3 L160 173.3 C220 173.3 250 60 310 60 C370 60 400 246.7 460 246.7 L570 246.7" fill="none" stroke="#1d2b44" stroke-width="3"/>
<line x1="150" y1="171" x2="150" y2="63" stroke="#1d2b44" stroke-width="1.8" marker-start="url(#e6a)" marker-end="url(#e6a)"/>
<text x="157" y="98" font-size="13" fill="#1d2b44">Eₐ(forward)</text>
<text x="157" y="114" font-size="13" fill="#1d2b44">= 85</text>
<line x1="480" y1="244" x2="480" y2="63" stroke="#1d2b44" stroke-width="1.8" marker-start="url(#e6a)" marker-end="url(#e6a)"/>
<text x="487" y="112" font-size="13" fill="#1d2b44">Eₐ(reverse)</text>
<text x="487" y="128" font-size="13" fill="#1d2b44">= 140</text>
<line x1="545" y1="176" x2="545" y2="244" stroke="#1d2b44" stroke-width="1.8" marker-end="url(#e6a)"/>
<text x="552" y="205" font-size="13" fill="#1d2b44">ΔH</text>
<text x="552" y="221" font-size="13" fill="#1d2b44">= −55</text>
<text x="310" y="48" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Transition state (125)</text>
<text x="118" y="195" text-anchor="middle" font-size="13" fill="#1d2b44">A + BC (40)</text>
<text x="515" y="268" text-anchor="middle" font-size="13" fill="#1d2b44">AB + C (−15)</text>
<text x="345" y="310" text-anchor="middle" font-size="14" fill="#1d2b44">Reaction coordinate</text>
<text x="22" y="155" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 22 155)">Energy (kJ mol⁻¹)</text>
</svg>
<figcaption>Figure 1. Energy profile for an elementary step with invented values. Dashed lines extend the reactant level and the transition-state level so the arrows can be read. The arrows show differences in energy, not positions on the axis.</figcaption>
</figure>

Three energy gaps can be read from any profile:

| Gap | From → to | Name |
|---|---|---|
| Reactants → transition state | climb on the left | **Forward activation energy, Eₐ(forward)** |
| Products → transition state | climb on the right | **Reverse activation energy, Eₐ(reverse)** |
| Reactants → products | net change | **Overall energy change, ΔH** (negative if products are lower) |

Because all three are measured to the same three levels, they are linked:

**Eₐ(reverse) = Eₐ(forward) − ΔH**

If the products lie lower than the reactants (ΔH negative, exothermic), the reverse climb is the bigger one. If they lie higher (ΔH positive, endothermic), the forward climb is bigger.

## The transition state

The **transition state** is the arrangement of atoms at the very top of the peak. Old bonds are partly broken and new bonds are partly formed, so it has the highest energy of any arrangement along the path. For OH⁻ + CH₃Br, the transition state has the O atom and the Br atom on opposite sides of the carbon, each joined to it by a partial bond: [HO···CH₃···Br]⁻, where ··· means a bond that is only partly there.

Two properties matter:

- The transition state is **not a substance**. It exists for roughly the time of one molecular vibration and cannot be isolated or stored.
- Reaching it is the whole challenge. The activation energy is exactly the energy that colliding particles need to get from reactants to the transition state. Once there, they can roll down to products (or back to reactants).

This links back to Topic 5.5: the area beyond Eₐ on a Maxwell–Boltzmann curve is the fraction of collisions with enough energy to reach the transition state.

## Why there is a peak at all

Breaking a bond costs energy; forming a bond releases it. If the old bond broke completely *before* the new bond began to form, the particles would have to climb the full bond energy, and Eₐ would be enormous. In a real elementary step the two overlap: as the new bond starts to form, it pays back some of the energy spent stretching the old one. The peak is where the cost of weakening the old bond is greatest compared with the payback from the new one. That is why activation energies are usually much smaller than the energy of the bond that breaks.

## Drawing a profile: what every sketch needs

When a question asks you to "draw" or "sketch" an energy profile for one elementary step, check for each of these:

- Both axes labelled: energy (kJ mol⁻¹) and reaction coordinate.
- Reactant and product levels labelled with the species, at the correct relative heights (products lower if ΔH is negative).
- **One** smooth peak, labelled transition state.
- An arrow for Eₐ(forward) from the reactant level to the top of the peak, not from the axis.
- An arrow for ΔH from the reactant level to the product level, if asked.

## Worked example 1: reading a profile

**Question.** Use Figure 1 to find (a) the forward activation energy, (b) the overall energy change, and (c) the reverse activation energy. (d) Is the forward step exothermic or endothermic?

1. Read the three levels: reactants 40, transition state 125, products −15 kJ mol⁻¹.
2. (a) Eₐ(forward) = 125 − 40 = **85 kJ mol⁻¹**.
3. (b) ΔH = −15 − 40 = **−55 kJ mol⁻¹**.
4. (c) Eₐ(reverse) = 125 − (−15) = **140 kJ mol⁻¹**.
5. (d) The products are lower than the reactants, so the forward step is **exothermic**: more energy is released forming the new bond than is used breaking the old one.

**Check.** Eₐ(forward) − ΔH = 85 − (−55) = 140 kJ mol⁻¹, which matches (c). Notice the trap in the numbers: the transition state is *at* 125, but the activation energy is the *difference* of 85. The level of the axis zero is arbitrary; only differences have meaning.

## Worked example 2: sketching a profile from data

**Question.** An elementary step has Eₐ(forward) = 92 kJ mol⁻¹ and ΔH = +35 kJ mol⁻¹. Find Eₐ(reverse) and sketch the energy profile.

1. Eₐ(reverse) = Eₐ(forward) − ΔH = 92 − 35 = **57 kJ mol⁻¹**.
2. Set the reactants at 0 for convenience. Then the transition state is at 92 and the products at +35.
3. Sketch: a flat reactant level on the left; one smooth peak at 92; a flat product level on the right, **higher** than the reactants (endothermic).
4. Label: both axes (energy and reaction coordinate), reactants, products, transition state; an arrow from reactants up to the peak for Eₐ(forward); an arrow from reactants to products for ΔH.

**Check.** One peak only (it is a single elementary step); the right-hand climb (57) is smaller than the left-hand climb (92), as it must be when the products are higher. A sketch with two humps would describe a multistep reaction, which is a later topic.

## Temperature and the Arrhenius equation

Topic 5.5 explained the effect of temperature with Maxwell–Boltzmann curves. The **Arrhenius equation** puts the same idea into one expression for the rate constant:

**k = A e^(−Eₐ/RT)**

- **e^(−Eₐ/RT)** is (approximately) the fraction of collisions with enough energy to reach the transition state. It grows quickly as T rises and shrinks quickly as Eₐ rises.
- **A** collects the other factors from the collision model: how often the particles collide and what share of collisions have a suitable orientation.
- **T** is in kelvin, and **R** is the gas constant (8.314 J mol⁻¹ K⁻¹), so Eₐ must be in J mol⁻¹ when used.

Your exam will not ask you to calculate with this equation. You do need to use it to explain three things:

1. **Rate rises with temperature.** A larger T makes −Eₐ/RT less negative, so k is larger.
2. **A higher peak means a slower step.** At the same temperature (and similar A), a larger Eₐ gives a smaller k.
3. **A higher peak means a step more sensitive to temperature.** When Eₐ is large, the fraction that can reach the transition state is tiny, and a small temperature rise multiplies it by a large factor.

## Worked example 3: comparing two steps

**Question.** Steps P and Q have similar values of A. Step P has Eₐ = 40 kJ mol⁻¹; step Q has Eₐ = 100 kJ mol⁻¹. (a) Which step is faster at 298 K? (b) Which step's rate increases by the greater factor when the temperature rises to 308 K? Explain both with the energy profile.

1. (a) **Step P.** Its peak is lower, so a much larger fraction of collisions have enough energy to reach its transition state. With similar A, its k is larger.
2. (b) **Step Q.** Its transition state sits far out in the tail of the Maxwell–Boltzmann curve. Warming the gas thickens that tail by a larger factor than it thickens the region near P's lower Eₐ.

**Background (not assessed).** With equal A, the Arrhenius equation gives k(308 K)/k(298 K) ≈ 1.7 for step P and ≈ 3.7 for step Q, so the same 10 K rise more than triples the rate of the high-barrier step but does not double the other.

## Common misconceptions

- **"The activation energy is the height of the transition state on the axis."** It is the *difference* between the reactant level and the transition-state level.
- **"An exothermic reaction must be fast."** ΔH says nothing about speed. Only Eₐ (and A) control the rate constant.
- **"The transition state is an intermediate."** A transition state is a peak that cannot be isolated; an intermediate is a dip between peaks in a multistep reaction.
- **"Heating the reaction lowers the peak."** The profile does not change with temperature. More collisions have enough energy to reach the same peak.
- **"The forward and reverse activation energies are equal."** They differ by ΔH: Eₐ(reverse) = Eₐ(forward) − ΔH.
- **"The reaction coordinate is time."** It shows progress through the atomic rearrangement, not the clock.
- **"Bonds break first, then new bonds form."** In a single elementary step the breaking and forming overlap; that is why the transition state has partial bonds.

## Where this leads

Topic 5.7 introduces reaction mechanisms: sequences of elementary steps, each with its own peak on a combined profile. Continue with [Introduction to Reaction Mechanisms](/advanced-course-resources/chemistry/5-7-introduction-reaction-mechanisms-study-guide/). Later, catalysts will be shown as a new pathway with a lower peak, and Unit 6 will connect ΔH to bond energies. Now try the [practice questions](/advanced-course-resources/chemistry/5-6-reaction-energy-profile-practice/), then use the [revision notes](/advanced-course-resources/chemistry/5-6-reaction-energy-profile-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/5-6-reaction-energy-profile-checklist/).
