---
resourceId: "mb-ap-chem-5.5-study-guide"
title: "Collision Model: Study Guide (Chemistry 5.5)"
description: "Learn why only some collisions lead to reaction, how energy and orientation decide success, and how the Maxwell–Boltzmann distribution explains the effect of temperature on rate."
course: "chemistry"
unit: 5
topics: ["5.5"]
resourceType: "study-guide"
prerequisites:
  - "Writing the rate law of an elementary reaction from its equation (Topic 5.4)"
  - "Kinetic energy and temperature: particles in a warmer sample move faster on average (Topic 3.5)"
prerequisiteResources: ["mb-ap-chem-5.4-study-guide"]
learningObjectives:
  - "Explain why reactant particles must collide before any bonds can break and form"
  - "Explain why only a small fraction of collisions succeed, using both collision energy and collision orientation"
  - "Link the rate of an elementary reaction to collision frequency, and so to reactant concentrations"
  - "Use Maxwell–Boltzmann distribution curves to estimate, qualitatively, the fraction of collisions with enough energy to react"
  - "Explain how and why that fraction changes with temperature, connecting the particle scale to the measured rate"
skills: ["6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Rate calculations use simple ratios. The exponential numbers in Worked example 2 are background only; you will not be asked to calculate them"
related: ["mb-ap-chem-5.5-revision-notes", "mb-ap-chem-5.5-practice", "mb-ap-chem-5.5-checklist"]
next: "mb-ap-chem-5.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Particles must collide before bonds can break and new bonds can form. No collision, no reaction."
  - "A collision succeeds only if it has enough energy (at least the activation energy, Eₐ) and a suitable orientation. In most reactions only a small fraction of collisions succeed."
  - "Higher concentration means more collisions per second, so a faster rate. The fraction of collisions that succeed stays the same."
  - "The Maxwell–Boltzmann distribution shows how particle energies are spread out. The area under the curve beyond Eₐ shows the fraction of particles with enough energy."
  - "At a higher temperature the curve flattens and shifts right, so a larger fraction of collisions reach Eₐ. This, much more than the small rise in collision frequency, is why rate rises with temperature."
faqs:
  - question: "Does a higher temperature lower the activation energy?"
    answer: "No. Eₐ is set by the reaction itself. A higher temperature gives more particles enough energy to reach Eₐ; the barrier stays the same height. (A catalyst, which you meet later in this unit, is what provides a route with a lower barrier.)"
  - question: "Why does the area under a Maxwell–Boltzmann curve stay the same when the temperature changes?"
    answer: "The area represents the total number of particles in the sample. Heating the sample does not add particles; it only spreads their energies out, so the curve gets lower and wider."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## No collision, no reaction

In Topic 5.4 you saw that the rate law of an elementary reaction comes straight from its equation. The collision model explains *why*. Bonds can only break and form when the reacting particles are close enough for their electron clouds to interact. In practice, that means they must **collide**.

Think about one step, such as a chlorine atom reacting with an ozone molecule:

Cl + O₃ → ClO + O₂

For this to happen, a Cl atom and an O₃ molecule must meet. During the collision one O–O bond in ozone breaks and a new Cl–O bond forms. Everything this topic says follows from that picture.

But collisions are extremely common. In a gas at room conditions, each molecule collides with others billions of times every second. If every collision produced products, almost every gas reaction would be over in a fraction of a second. Most are not, so most collisions must fail.

## What makes a collision successful

A collision leads to products only when **two conditions are met at the same time**.

1. **Enough energy.** Breaking bonds costs energy. The colliding particles must bring at least a minimum amount of kinetic energy into the collision, called the **activation energy, Eₐ**. In a weaker collision the particles slow down, push apart and separate unchanged.
2. **A suitable orientation.** The particles must meet the right way round, so that the atoms that need to bond actually touch. A collision on the "wrong" end does not rearrange the bonds, however hard it is.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="orient-title orient-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="orient-title">Three collisions between a hydroxide ion and bromomethane</title>
<desc id="orient-desc">Three panels. In each, a hydroxide ion moves towards a bromomethane molecule, drawn as a carbon atom with a bromine atom on its right. Panel 1: the hydroxide ion moves fast, shown by a long arrow, and hits the carbon atom from the left, the side opposite the bromine. Outcome: reaction, methanol and bromide ion form. Panel 2: the hydroxide ion moves fast but hits the bromine end. Outcome: no reaction, wrong orientation. Panel 3: the hydroxide ion approaches the carbon from the correct side but slowly, shown by a short arrow. Outcome: no reaction, energy below the activation energy.</desc>
<defs><marker id="o5a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="5" y="5" width="205" height="250" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="217" y="5" width="205" height="250" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="429" y="5" width="205" height="250" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="107" y="28" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">1. Fast, right side</text>
<text x="319" y="28" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">2. Fast, wrong end</text>
<text x="531" y="28" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">3. Slow, right side</text>
<circle cx="35" cy="110" r="15" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="35" y="115" text-anchor="middle" font-size="12" fill="#1d2b44">OH⁻</text>
<path d="M28 140 H88" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#o5a)"/>
<circle cx="120" cy="110" r="15" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="120" y="115" text-anchor="middle" font-size="13" fill="#1d2b44">C</text>
<line x1="135" y1="110" x2="157" y2="110" stroke="#1d2b44" stroke-width="2"/>
<circle cx="175" cy="110" r="18" fill="#e8ecf2" stroke="#1d2b44" stroke-width="1.5"/><text x="175" y="115" text-anchor="middle" font-size="13" fill="#1d2b44">Br</text>
<text x="107" y="185" text-anchor="middle" font-size="12" fill="#1d2b44">Hits C from the side</text>
<text x="107" y="201" text-anchor="middle" font-size="12" fill="#1d2b44">opposite Br, hard enough</text>
<text x="107" y="235" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">Reaction ✓</text>
<circle cx="263" cy="110" r="15" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="263" y="115" text-anchor="middle" font-size="13" fill="#1d2b44">C</text>
<line x1="278" y1="110" x2="300" y2="110" stroke="#1d2b44" stroke-width="2"/>
<circle cx="318" cy="110" r="18" fill="#e8ecf2" stroke="#1d2b44" stroke-width="1.5"/><text x="318" y="115" text-anchor="middle" font-size="13" fill="#1d2b44">Br</text>
<circle cx="400" cy="110" r="15" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="400" y="115" text-anchor="middle" font-size="12" fill="#1d2b44">OH⁻</text>
<path d="M408 140 H348" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#o5a)"/>
<text x="319" y="185" text-anchor="middle" font-size="12" fill="#1d2b44">Hits the Br end:</text>
<text x="319" y="201" text-anchor="middle" font-size="12" fill="#1d2b44">C is never reached</text>
<text x="319" y="235" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">No reaction ✗</text>
<circle cx="460" cy="110" r="15" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/><text x="460" y="115" text-anchor="middle" font-size="12" fill="#1d2b44">OH⁻</text>
<path d="M453 140 H478" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#o5a)"/>
<circle cx="545" cy="110" r="15" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/><text x="545" y="115" text-anchor="middle" font-size="13" fill="#1d2b44">C</text>
<line x1="560" y1="110" x2="582" y2="110" stroke="#1d2b44" stroke-width="2"/>
<circle cx="600" cy="110" r="18" fill="#e8ecf2" stroke="#1d2b44" stroke-width="1.5"/><text x="600" y="115" text-anchor="middle" font-size="13" fill="#1d2b44">Br</text>
<text x="531" y="185" text-anchor="middle" font-size="12" fill="#1d2b44">Right side, but energy</text>
<text x="531" y="201" text-anchor="middle" font-size="12" fill="#1d2b44">is less than Eₐ</text>
<text x="531" y="235" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">No reaction ✗</text>
</svg>
<figcaption>Figure 1. The elementary step OH⁻ + CH₃Br → CH₃OH + Br⁻ (the three H atoms on carbon are left out). Arrow length shows how fast the ion is moving. Only panel 1 meets both conditions: enough energy and the right orientation.</figcaption>
</figure>

For OH⁻ + CH₃Br, the oxygen must attack the carbon atom from the side opposite the bromine, so that a C–O bond can form as the C–Br bond breaks. A hit on the bromine end, or on one of the hydrogen atoms, cannot do this. Small, round particles (such as single atoms) have few orientation limits. Larger, less symmetrical molecules have more, so a smaller share of their collisions is correctly lined up.

Put together: **only a small fraction of collisions are successful** in most reactions. The rate of an elementary reaction depends on three things:

| Factor | Question it answers | What changes it |
|---|---|---|
| Collision **frequency** | How many collisions happen each second? | Concentration (or gas pressure); temperature, slightly |
| Collision **energy** | What fraction of those collisions reach Eₐ? | Temperature (strongly); the size of Eₐ |
| Collision **orientation** | What fraction are lined up correctly? | The shapes of the particles (fixed for a given reaction) |

## Collision frequency and concentration

If you double the concentration of one reactant, each particle of the other reactant meets it twice as often. Collision frequency doubles, so the rate doubles. The *fraction* of collisions that succeed does not change, because the temperature (energy spread) and the particle shapes (orientation) are the same.

This is the particle-level reason behind the rate law for an elementary step. For A + B → products, collisions need one A and one B, so the collision frequency is proportional to [A] × [B], and rate = k[A][B]. The rate constant k contains the parts that do not depend on concentration: the energy fraction and the orientation fraction.

## Worked example 1: concentration and collision frequency

**Question.** The step Cl + O₃ → ClO + O₂ is elementary. In a gas-phase experiment at constant temperature, its rate is 3.0 × 10⁻⁵ M s⁻¹ (invented data). Predict the rate (a) when [Cl] is doubled, (b) when [Cl] is doubled and [O₃] is tripled, and (c) when only [O₃] is halved. Explain (a) in terms of collisions.

1. The step is elementary and bimolecular, so rate = k[Cl][O₃]. The rate is first order in each reactant.
2. (a) Doubling [Cl] multiplies the rate by 2: 2 × 3.0 × 10⁻⁵ = **6.0 × 10⁻⁵ M s⁻¹**.
3. (b) Multiply by 2 × 3 = 6: 6 × 3.0 × 10⁻⁵ = **1.8 × 10⁻⁴ M s⁻¹**.
4. (c) Multiply by ½: **1.5 × 10⁻⁵ M s⁻¹**.

**Explanation for (a).** With twice as many Cl atoms in the same volume, each O₃ molecule is hit by Cl atoms twice as often, so there are twice as many Cl–O₃ collisions per second. The temperature has not changed, so the same fraction of those collisions has enough energy and the right orientation. Twice as many successful collisions per second means twice the rate.

**Check.** The answers use only ratios, so k is never needed. A common slip in (b) is to add the factors (2 + 3 = 5) instead of multiplying them.

## The Maxwell–Boltzmann distribution

In any sample, particles do not all have the same kinetic energy. Collisions constantly pass energy around, so at any moment a few particles are almost still, most have a middling energy, and a few have a very large energy. The **Maxwell–Boltzmann distribution** is the graph of this spread: number of particles (y-axis) against kinetic energy (x-axis).

Read three features from the curve:

- It starts at zero (no particle has negative energy), rises to a **peak** (the most common energy), then has a long **tail** to the right that approaches zero but never quite reaches it.
- The **total area** under the curve stands for the total number of particles.
- If you mark Eₐ on the energy axis, the **area under the curve to the right of Eₐ** stands for the particles that have at least the activation energy. Its share of the total area is a qualitative estimate of the fraction of collisions energetic enough to react.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="mb-title mb-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mb-title">Maxwell–Boltzmann distributions at two temperatures</title>
<desc id="mb-desc">Graph of number of particles against kinetic energy. A solid curve for the lower temperature T1 rises steeply to a tall peak near the left, then falls with a thin tail. A dashed curve for the higher temperature T2 has a lower peak further to the right and a much thicker tail. A vertical line marks the activation energy Ea, well to the right of both peaks. The area under the T1 curve beyond Ea is small and is filled with dense cross-hatching. The extra area under the T2 curve beyond Ea, above the T1 curve, is filled with diagonal lines; together the two shaded regions show that many more particles have at least Ea at T2; including the tails that continue past the edge of the graph, about three times as many.</desc>
<defs>
<pattern id="mbx" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 0 L6 6 M6 0 L0 6" stroke="#1d2b44" stroke-width="1"/></pattern>
<pattern id="mbd" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1"/></pattern>
<marker id="mba" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<path d="M385 270 L385 214 L394 217 L403 220 L412 222 L421 224 L430 226 L439 229 L448 231 L457 233 L466 234 L475 236 L484 238 L493 240 L502 241 L511 243 L520 244 L529 245 L538 247 L547 248 L556 249 L565 250 L574 251 L583 252 L592 253 L601 254 L610 255 L610 270 Z" fill="url(#mbd)" stroke="none"/>
<path d="M385 270 L385 240 L394 242 L403 244 L412 247 L421 249 L430 250 L439 252 L448 254 L457 255 L466 256 L475 257 L484 258 L493 259 L502 260 L511 261 L520 262 L529 263 L538 263 L547 264 L556 264 L565 265 L574 265 L583 266 L592 266 L601 266 L610 267 L610 270 Z" fill="#ffffff" stroke="none"/>
<path d="M385 270 L385 240 L394 242 L403 244 L412 247 L421 249 L430 250 L439 252 L448 254 L457 255 L466 256 L475 257 L484 258 L493 259 L502 260 L511 261 L520 262 L529 263 L538 263 L547 264 L556 264 L565 265 L574 265 L583 266 L592 266 L601 266 L610 267 L610 270 Z" fill="url(#mbx)" stroke="none"/>
<path d="M70 270 L79 117 L88 74 L97 52 L106 43 L115 40 L124 42 L133 47 L142 54 L151 63 L160 73 L169 83 L178 93 L187 103 L196 114 L205 123 L214 133 L223 142 L232 151 L241 159 L250 167 L259 175 L268 182 L277 188 L286 195 L295 200 L304 206 L313 211 L322 215 L331 220 L340 224 L349 227 L358 231 L367 234 L376 237 L385 240 L394 242 L403 244 L412 247 L421 249 L430 250 L439 252 L448 254 L457 255 L466 256 L475 257 L484 258 L493 259 L502 260 L511 261 L520 262 L529 263 L538 263 L547 264 L556 264 L565 265 L574 265 L583 266 L592 266 L601 266 L610 267" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M70 270 L79 191 L88 165 L97 150 L106 139 L115 133 L124 129 L133 127 L142 126 L151 127 L160 128 L169 130 L178 133 L187 136 L196 139 L205 143 L214 147 L223 151 L232 155 L241 159 L250 163 L259 167 L268 171 L277 175 L286 178 L295 182 L304 186 L313 189 L322 193 L331 196 L340 200 L349 203 L358 206 L367 209 L376 212 L385 214 L394 217 L403 220 L412 222 L421 224 L430 226 L439 229 L448 231 L457 233 L466 234 L475 236 L484 238 L493 240 L502 241 L511 243 L520 244 L529 245 L538 247 L547 248 L556 249 L565 250 L574 251 L583 252 L592 253 L601 254 L610 255" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5"/>
<line x1="70" y1="270" x2="620" y2="270" stroke="#1d2b44" stroke-width="2" marker-end="url(#mba)"/>
<line x1="70" y1="270" x2="70" y2="25" stroke="#1d2b44" stroke-width="2" marker-end="url(#mba)"/>
<line x1="385" y1="60" x2="385" y2="270" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="3 3"/>
<text x="385" y="52" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Eₐ</text>
<text x="128" y="34" font-size="13" fill="#1d2b44">T₁ (lower, solid)</text>
<text x="140" y="205" font-size="13" fill="#1d2b44">T₂ (higher, dashed)</text>
<text x="440" y="200" font-size="12" fill="#1d2b44">Particles with energy ≥ Eₐ</text>
<text x="345" y="300" text-anchor="middle" font-size="14" fill="#1d2b44">Kinetic energy</text>
<text x="25" y="150" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 25 150)">Number of particles</text>
</svg>
<figcaption>Figure 2. Maxwell–Boltzmann distributions for the same sample at two temperatures (the curves are calculated, not sketched). Cross-hatched: particles with at least Eₐ at T₁. Cross-hatched plus diagonal lines: particles with at least Eₐ at T₂, about three times as many once the part of each tail beyond the right edge of the graph is included. Both curves enclose the same total area.</figcaption>
</figure>

## How temperature changes the curve

Heating the sample raises the average kinetic energy. On the graph:

- The peak moves **right** (the most common energy is higher) and gets **lower**.
- The curve becomes **wider and flatter**, with a much thicker tail.
- The total area stays the **same**, because the number of particles has not changed.

The key result is in the tail. Because Eₐ usually lies far out in the tail, a modest temperature rise can make the area beyond Eₐ several times larger. In Figure 2 it grows about threefold.

Temperature also raises the collision frequency a little, because faster particles meet each other more often. But that effect is small. The large increase in rate comes from the much larger **fraction** of collisions with enough energy.

## Worked example 2: why a small temperature rise matters so much

**Question.** An elementary reaction is run at 300 K and then at 320 K, with the same concentrations. Using the collision model, explain why the rate increases, and identify which effect is responsible for most of the increase.

1. **Collision frequency.** At 320 K the particles move faster on average, so they collide slightly more often.
2. **Collision energy.** At 320 K the Maxwell–Boltzmann curve is flatter and shifted to higher energy. A larger area lies beyond Eₐ, so a larger fraction of collisions have at least Eₐ.
3. **Orientation.** Unchanged: the particle shapes are the same.
4. **Conclusion.** More collisions per second, *and* a larger fraction of them succeed, so the rate increases. The second effect is far larger, because Eₐ lies in the tail of the curve, where the area changes fastest.

**Background: the size of the two effects (not assessed).** For a reaction with Eₐ = 60 kJ mol⁻¹, a standard model gives these values:

| Quantity | 300 K | 320 K | Change |
|---|---|---|---|
| Fraction of collisions with energy ≥ Eₐ | about 1 in 2.8 × 10¹⁰ | about 1 in 6.2 × 10⁹ | × 4.5 |
| Collision frequency (relative) | 1 | 1.033 | + 3.3% |

You do not need these numbers. They show why exam answers should give the energy fraction as the main reason for the faster rate. They also show how small the fraction of energetic collisions can be.

## Linking the particle scale to what you measure

In the lab you never see a collision. You see a colour fade, a gas volume grow or a pH change, and you turn that into a rate. A strong answer joins the two scales in one chain:

**observed change** (rate doubles, reaction speeds up) ← **number of successful collisions per second** ← **frequency × fraction with enough energy × fraction correctly oriented**.

Then say which link changed and which did not. For a concentration change, only the frequency changes. For a temperature change, the energy fraction changes most, and the frequency a little. For a change of reactant (a different molecule with a different shape), the orientation fraction and Eₐ can both change. An answer that names only one link, such as "more collisions", is usually incomplete.

## Common misconceptions

- **"Every collision causes a reaction."** No. Most collisions fail because they lack enough energy, the right orientation, or both.
- **"A faster rate at high temperature is mainly due to more collisions."** Collision frequency rises only slightly. The main cause is the larger *fraction* of collisions with energy at least Eₐ.
- **"Raising the temperature lowers the activation energy."** Eₐ does not change with temperature. More particles reach it.
- **"Increasing concentration gives the particles more energy."** Concentration changes how *often* particles collide, not the energy of each collision. The fraction that succeeds is unchanged.
- **"At a higher temperature the peak gets taller."** It gets lower and moves right. The area must stay the same, so a wider curve must be lower.
- **"All particles at a given temperature have the same energy."** Temperature measures the *average* kinetic energy. The Maxwell–Boltzmann curve shows a wide spread at every temperature.
- **"A hard enough collision always works."** Not if the orientation is wrong (Figure 1, panel 2). Energy and orientation are both needed.

## Where this leads

Next, Topic 5.6 follows the energy of the colliding particles *through* a single collision: the [reaction energy profile](/advanced-course-resources/chemistry/5-6-reaction-energy-profile-study-guide/) shows Eₐ as the climb from reactants to the transition state, and the Arrhenius equation turns this topic's temperature argument into an equation. Later in the unit, catalysts change the picture by offering a route with a lower Eₐ. Now try the [practice questions](/advanced-course-resources/chemistry/5-5-collision-model-practice/), then use the [revision notes](/advanced-course-resources/chemistry/5-5-collision-model-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/5-5-collision-model-checklist/).
