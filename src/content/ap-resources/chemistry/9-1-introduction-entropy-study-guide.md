---
resourceId: "mb-ap-chem-9.1-study-guide"
title: "Introduction to Entropy: Study Guide (Chemistry 9.1)"
description: "Learn what entropy measures, why it rises when matter or energy spreads out, and how to predict the sign and relative size of ΔS for phase changes, gases and reactions."
course: "chemistry"
unit: 9
topics: ["9.1"]
resourceType: "study-guide"
prerequisites:
  - "Particle pictures of solids, liquids and gases (Topic 3.3)"
  - "The Maxwell–Boltzmann distribution and how it changes with temperature (Topic 3.5)"
  - "Writing balanced equations with state symbols"
prerequisiteResources: ["mb-ap-chem-8.11-study-guide"]
learningObjectives:
  - "Describe entropy as a measure of how spread out matter and energy are in a system"
  - "Predict the sign of ΔS for phase changes, changes in gas volume and changes in temperature"
  - "Predict the sign of ΔS for a reaction by comparing moles of gas on each side of the balanced equation"
  - "Compare the relative size of entropy changes for different processes and justify the ranking at the particle level"
  - "Use the kinetic-energy distribution of a gas to explain why entropy rises with temperature"
skills: ["6"]
studyMinutes: 35
difficulty: "foundation"
calculator: "none-needed"
calculatorNote: "This topic is about predicting signs and ranking sizes; the few data values quoted are standard molar entropies at 298 K in J K⁻¹ mol⁻¹"
related: ["mb-ap-chem-9.1-revision-notes", "mb-ap-chem-9.1-practice", "mb-ap-chem-9.1-checklist"]
next: "mb-ap-chem-9.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Entropy, S, measures how spread out (dispersed) the matter and the energy of a system are. ΔS > 0 means more dispersal."
  - "Solid → liquid → gas: ΔS is positive at each step, and much larger for liquid → gas than for solid → liquid."
  - "A gas that expands into a larger volume at constant temperature gains entropy; a gas that is compressed loses it."
  - "Raising the temperature widens the spread of particle kinetic energies, so the entropy of a substance increases."
  - "For a reaction, compare moles of gas: more moles of gas in the products usually means ΔS > 0. Equal moles of gas means ΔS is small and its sign cannot be predicted by counting."
faqs:
  - question: "Is entropy just another word for disorder?"
    answer: "Disorder is a rough picture that often gives the right sign, but it can mislead. The course describes entropy as dispersal: how widely the particles are spread in space and how widely the energy is shared out among them. Use that language in written answers."
  - question: "Do I need to calculate ΔS in this topic?"
    answer: "No. Here you predict the sign and compare sizes. In Topic 9.2 you calculate ΔS° from tables of standard molar entropies, and you can use the reasoning from this topic to check that your answer has a sensible sign."
  - question: "Does an exothermic reaction always have a negative ΔS?"
    answer: "No. ΔH and ΔS are separate quantities. Some exothermic reactions gain entropy and some lose it. Topic 9.3 shows how the two combine to decide whether a process is thermodynamically favourable."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why energy alone is not enough

In Unit 6 you met processes that take in energy from the surroundings and still happen on their own. Ice melts on a warm day. Ammonium nitrate dissolves in water and the beaker turns cold. If lower energy were the only thing that mattered, these endothermic changes would never happen by themselves.

Something else is pushing them. That "something" is **entropy**, the subject of this topic. Entropy, symbol **S**, is a property of a system, like its enthalpy. A change in entropy is written **ΔS**:

- **ΔS > 0**: the system's entropy increases.
- **ΔS < 0**: the system's entropy decreases.

In Topic 9.3 you will combine ΔS with ΔH to decide whether a process is thermodynamically favourable. Here you learn to read the sign and the rough size of ΔS from what is happening to the particles.

## Entropy as dispersal

The most useful picture of entropy is **dispersal**. Entropy increases when:

1. **Matter becomes more dispersed.** The particles spread out over a larger space and become freer to move.
2. **Energy becomes more dispersed.** The total energy is shared out over a wider range of particle energies.

Every rule in this topic is one of these two ideas applied to a particular case. If you forget a rule, go back to "Is matter spreading out? Is energy spreading out?"

### Matter dispersal in phase changes

<figure>
<svg viewBox="0 0 660 250" role="img" aria-labelledby="phase-s-title phase-s-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="phase-s-title">Particle pictures of a solid, a liquid and a gas</title>
<desc id="phase-s-desc">Three containers drawn side by side. The first, labelled solid, has twelve particles packed in a regular grid at the bottom; they can only vibrate in place. The second, labelled liquid, has twelve particles still touching but arranged irregularly at the bottom; they can slide past each other. The third, labelled gas, has twelve particles spread far apart through the whole container; they move freely in straight lines. An arrow under the three containers points from solid to gas and is labelled entropy increases. The step from liquid to gas is marked as the much larger increase.</desc>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<path d="M20 30 V190 H200 V30"/><path d="M240 30 V190 H420 V30"/><path d="M460 30 V190 H640 V30"/>
</g>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5">
<circle cx="56" cy="176" r="11"/><circle cx="80" cy="176" r="11"/><circle cx="104" cy="176" r="11"/><circle cx="128" cy="176" r="11"/><circle cx="152" cy="176" r="11"/><circle cx="176" cy="176" r="11"/>
<circle cx="56" cy="153" r="11"/><circle cx="80" cy="153" r="11"/><circle cx="104" cy="153" r="11"/><circle cx="128" cy="153" r="11"/><circle cx="152" cy="153" r="11"/><circle cx="176" cy="153" r="11"/>
<circle cx="268" cy="177" r="11"/><circle cx="292" cy="172" r="11"/><circle cx="318" cy="178" r="11"/><circle cx="345" cy="174" r="11"/><circle cx="372" cy="178" r="11"/><circle cx="398" cy="170" r="11"/>
<circle cx="279" cy="151" r="11"/><circle cx="306" cy="154" r="11"/><circle cx="333" cy="150" r="11"/><circle cx="360" cy="155" r="11"/><circle cx="386" cy="147" r="11"/><circle cx="352" cy="131" r="11"/>
<circle cx="490" cy="60" r="11"/><circle cx="560" cy="48" r="11"/><circle cx="615" cy="75" r="11"/><circle cx="520" cy="110" r="11"/><circle cx="590" cy="125" r="11"/><circle cx="480" cy="150" r="11"/>
<circle cx="545" cy="170" r="11"/><circle cx="620" cy="168" r="11"/><circle cx="555" cy="88" r="11"/><circle cx="485" cy="105" r="11"/>
<circle cx="600" cy="40" r="11"/><circle cx="625" cy="120" r="11"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5" marker-end="url(#ps-a)">
<path d="M490 60 L470 46"/><path d="M560 48 L582 40"/><path d="M520 110 L540 128"/><path d="M590 125 L570 140"/><path d="M545 170 L565 160"/><path d="M485 105 L470 120"/>
</g>
<g font-size="15" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="110" y="22">Solid</text><text x="330" y="22">Liquid</text><text x="550" y="22">Gas</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="110" y="118">vibrate in place</text><text x="330" y="112">slide past each other</text>
</g>
<path d="M40 222 H620" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ps-a)"/>
<text x="330" y="244" font-size="13" text-anchor="middle" fill="#1d2b44">entropy increases → (small step: solid to liquid; much larger step: liquid to gas)</text>
<defs><marker id="ps-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
</svg>
<figcaption>Figure 1. The same twelve particles as a solid, a liquid and a gas. Short arrows show free straight-line motion in the gas. Matter is most dispersed in the gas, so the gas has the highest entropy.</figcaption>
</figure>

- **Solid → liquid (melting): ΔS > 0.** The particles are still close together, but they can now move past one another instead of only vibrating in fixed positions.
- **Liquid → gas (vaporisation): ΔS > 0, and much larger.** The particles separate completely, move freely and fill a volume hundreds or even thousands of times larger.
- **Solid → gas (sublimation): ΔS > 0, larger still**, because it combines both steps.
- The reverse changes (freezing, condensing, deposition) have **ΔS < 0** of the same size.

To see how lopsided the two steps are, here is a preview of data you will use in Topic 9.2. At 298 K, going from Br₂(l) to Br₂(g) raises the standard molar entropy by about 93 J K⁻¹ mol⁻¹, and going from H₂O(l) to H₂O(g) by about 119 J K⁻¹ mol⁻¹. Melting steps are typically several times smaller.

### Matter dispersal in a gas: volume

For a gas at constant temperature, **a larger volume means higher entropy**. If you open a valve between a flask of gas and an empty flask of the same size, the gas spreads into both. Each molecule now has twice as much space to move in. Matter is more dispersed, so ΔS > 0. The temperature has not changed, so this is purely a matter-dispersal effect.

The reverse is also true: compressing a gas into a smaller volume at constant temperature gives ΔS < 0.

*Background: at a fixed temperature, a lower pressure of the same amount of gas means a larger volume, so a gas at lower pressure has higher entropy. This is why tables of standard entropies always state the pressure (1 bar).*

### Matter dispersal in reactions: count the moles of gas

Gases have far higher entropies than liquids or solids. So for a reaction, the quickest test is:

> Compare the **total moles of gas** on each side of the balanced equation. More moles of gas in the products → ΔS is usually **positive**. Fewer moles of gas in the products → ΔS is usually **negative**.

Only gases count in this comparison. A reaction that turns a solid into a gas, such as a carbonate decomposing to release CO₂(g), gains entropy even though the number of particles on paper seems similar.

When the moles of gas are **equal** on both sides, the entropy change is small. Its sign depends on finer details (which molecules, how many atoms each has), so you **cannot** predict it reliably by counting. Say so in a written answer rather than guessing.

### Energy dispersal: temperature

The second idea is energy dispersal. In Topic 3.5 you saw that the particles of a gas do not all have the same kinetic energy. Their energies follow a distribution, and the shape of that distribution depends on temperature.

<figure>
<svg viewBox="0 0 680 350" role="img" aria-labelledby="ke-t-title ke-t-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ke-t-title">Kinetic energy distributions of one gas sample at temperature T and at temperature 2T</title>
<desc id="ke-t-desc">The horizontal axis is kinetic energy of a particle, with no scale. The vertical axis is fraction of particles, with no scale. Both curves start at zero, rise to one peak and fall in a long tail to the right. The solid curve, for the lower temperature T, has a tall, narrow peak at low energy. The dashed curve, for the higher temperature 2T, has a peak about half as tall at twice the energy, and it is spread across a much wider range of energies. The two curves cross; beyond the crossing point the dashed curve is higher. A dotted vertical line marks one chosen energy: about 11 percent of particles are above it at T and about 39 percent at 2T. The areas under the two curves are equal.</desc>
<path d="M80 30 V290 H620" fill="none" stroke="#1d2b44" stroke-width="2"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="350" y="318">Kinetic energy of a particle (no scale)</text>
<text x="80" y="306" font-size="12">0</text>
</g>
<text x="40" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 40 160)">Fraction of particles</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,290.0 86.8,135.0 93.5,91.7 100.2,70.2 107.0,60.4 113.8,57.7 120.5,59.8 127.2,65.0 134.0,72.3 140.8,81.1 147.5,90.7 154.2,100.9 161.0,111.3 167.8,121.7 174.5,132.0 181.2,142.0 188.0,151.7 194.8,161.0 201.5,169.9 208.2,178.3 215.0,186.3 221.8,193.9 228.5,201.0 235.3,207.6 242.0,213.9 248.8,219.7 255.5,225.1 262.2,230.2 269.0,234.9 275.8,239.2 282.5,243.3 289.2,247.0 296.0,250.5 302.8,253.7 309.5,256.7 316.2,259.4 323.0,261.9 329.8,264.2 336.5,266.4 343.2,268.3 350.0,270.2 356.8,271.8 363.5,273.4 370.2,274.8 377.0,276.1 383.8,277.2 390.5,278.3 397.2,279.3 404.0,280.2 410.8,281.1 417.5,281.8 424.3,282.5 431.0,283.2 437.8,283.8 444.5,284.3 451.2,284.8 458.0,285.3 464.8,285.7 471.5,286.1 478.2,286.4 485.0,286.7 491.8,287.0 498.5,287.3 505.3,287.5 512.0,287.7 518.8,287.9 525.5,288.1 532.2,288.3 539.0,288.4 545.8,288.6 552.5,288.7 559.2,288.8 566.0,288.9 572.8,289.0 579.5,289.1 586.2,289.2 593.0,289.3 599.8,289.3 606.5,289.4 613.2,289.4 620.0,289.5"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" points="80.0,290.0 86.8,232.4 93.5,212.5 100.2,199.7 107.0,190.8 113.8,184.5 120.5,180.1 127.2,177.1 134.0,175.2 140.8,174.2 147.5,173.9 154.2,174.1 161.0,174.9 167.8,176.0 174.5,177.5 181.2,179.2 188.0,181.2 194.8,183.3 201.5,185.5 208.2,187.9 215.0,190.4 221.8,192.9 228.5,195.5 235.3,198.0 242.0,200.6 248.8,203.3 255.5,205.8 262.2,208.4 269.0,211.0 275.8,213.5 282.5,216.0 289.2,218.4 296.0,220.8 302.8,223.2 309.5,225.5 316.2,227.7 323.0,229.9 329.8,232.1 336.5,234.2 343.2,236.2 350.0,238.2 356.8,240.1 363.5,241.9 370.2,243.7 377.0,245.5 383.8,247.2 390.5,248.8 397.2,250.4 404.0,251.9 410.8,253.4 417.5,254.9 424.3,256.2 431.0,257.6 437.8,258.9 444.5,260.1 451.2,261.3 458.0,262.4 464.8,263.6 471.5,264.6 478.2,265.7 485.0,266.6 491.8,267.6 498.5,268.5 505.3,269.4 512.0,270.3 518.8,271.1 525.5,271.9 532.2,272.6 539.0,273.3 545.8,274.0 552.5,274.7 559.2,275.3 566.0,276.0 572.8,276.6 579.5,277.1 586.2,277.7 593.0,278.2 599.8,278.7 606.5,279.2 613.2,279.6 620.0,280.1"/>
<path d="M282.5 60 V290" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<g font-size="13" fill="#1d2b44">
<text x="130" y="45">T (solid): tall, narrow</text>
<text x="330" y="200">2T (dashed): lower, wider</text>
<text x="292" y="76">beyond this line:</text>
<text x="292" y="94">about 11% of particles at T</text>
<text x="292" y="112">about 39% of particles at 2T</text>
</g>
</svg>
<figcaption>Figure 2. Model kinetic-energy distributions for the same gas sample at an absolute temperature T and at 2T, calculated from kinetic theory. Line style and labels identify the curves. At the higher temperature the energy is shared over a much wider range of values.</figcaption>
</figure>

When the temperature rises:

- The average kinetic energy rises, so the peak moves to higher energy.
- The curve becomes **lower and wider**. The same number of particles is now spread over a broader range of energies.
- That broader spread is **energy dispersal**. So the entropy of a substance **increases as its temperature increases**, even when no phase change happens and the volume stays the same.

This explains why heating a gas in a rigid, sealed container still raises its entropy. The particles have not gained any extra space, but their energy is more spread out.

The same idea applies to liquids and solids: a warmer sample of any substance has a higher entropy than a cooler sample of the same substance.

## Summary of the rules

| Change | Main idea | Sign of ΔS | Typical size |
|---|---|---|---|
| Solid → liquid | matter freer to move | + | small |
| Liquid → gas | matter much more dispersed | + | large |
| Gas expands at constant T | matter has more space | + | depends on how much the volume changes |
| Temperature rises (no phase change) | energy more dispersed | + | depends on the temperature change |
| Reaction with more moles of gas in products | matter more dispersed | usually + | larger for a bigger change in moles of gas |
| Reaction with equal moles of gas | small, details matter | cannot tell by counting | small |

For every row, the reverse change has the opposite sign.

## Worked example 1: predict and rank ΔS for four processes

**Question.** For each process, predict the sign of ΔS. Then rank the four from most positive to most negative, as far as the reasoning allows.

- (a) C₆H₆(l) → C₆H₆(g)
- (b) 2 NO₂(g) → N₂O₄(g)
- (c) 2 H₂S(g) + 3 O₂(g) → 2 SO₂(g) + 2 H₂O(g)
- (d) NH₄HS(s) → NH₃(g) + H₂S(g)

1. **(a)** A liquid becomes a gas. Moles of gas: 0 → 1. Matter becomes far more dispersed: **ΔS > 0**.
2. **(b)** Moles of gas: 2 → 1. Two freely moving molecules are joined into one, so matter is less dispersed: **ΔS < 0**.
3. **(c)** Moles of gas: 2 + 3 = 5 on the left, 2 + 2 = 4 on the right. One fewer mole of gas: **ΔS < 0**.
4. **(d)** A solid produces 2 mol of gas. Moles of gas: 0 → 2: **ΔS > 0**, and large.
5. **Ranking.** (d) gains 2 mol of gas from a solid, so it should be the most positive. (a) gains 1 mol of gas: positive, but smaller. (b) and (c) each lose 1 mol of gas, so both are negative.

**Answer.** (d) > (a) > (b) and (c), with (b) and (c) both negative.

**What you cannot say.** Counting moles of gas does not decide whether (b) or (c) is more negative: each loses 1 mol of gas. A good answer states that limit instead of inventing a reason. Topic 9.2 lets you calculate the values and settle it.

## Worked example 2: one gas, three changes

**Question.** A rigid 1.0 L flask holds a sample of argon at 300 K. Predict the sign of ΔS for the argon in each change and name the type of dispersal involved.

- (a) The flask is heated to 400 K. The volume does not change.
- (b) Back at 300 K, a valve is opened to a second, empty 1.0 L flask. The temperature stays at 300 K.
- (c) The argon (in the original flask) is cooled until it condenses to a liquid.

1. **(a)** No change in volume, so matter dispersal is unchanged. The temperature rises, so the kinetic-energy distribution becomes lower and wider (Figure 2). Energy is more dispersed: **ΔS > 0 (energy dispersal)**.
2. **(b)** The temperature, and so the energy distribution, is unchanged. The argon atoms can now move through 2.0 L instead of 1.0 L. Matter is more dispersed: **ΔS > 0 (matter dispersal)**.
3. **(c)** Two effects, both in the same direction. The temperature falls, so energy is less dispersed. The gas becomes a liquid, so the atoms are confined to a much smaller volume and are less free to move. Matter is far less dispersed: **ΔS < 0**, and the condensation step gives a large decrease.

**Check.** In each case you named which kind of dispersal changes. That is what a written answer needs: a claim (the sign) plus particle-level evidence (what the atoms or their energies are doing).

## Common misconceptions

- **"Entropy is disorder, so a tidy-looking picture always has lower entropy."** Use dispersal of matter and energy instead. Disorder gives no clear reason why a hot gas has more entropy than the same gas when cool.
- **Counting every mole in the equation.** Only moles of **gas** decide the sign. In CaCO₃(s) → CaO(s) + CO₂(g), the 1 mol of gas produced matters; the solids do not.
- **"Equal moles of gas means ΔS = 0."** It means ΔS is small and its sign cannot be predicted by counting. It is rarely exactly zero.
- **"Exothermic means ΔS is negative" (or the reverse).** The sign of ΔH tells you nothing about the sign of ΔS. Judge each separately.
- **"Heating without melting does not change entropy."** It does: the energy spreads over a wider range of values, so S increases with temperature.
- **"The entropy of a system can never decrease."** It can. Freezing water and compressing a gas both have ΔS < 0 for the system. What decides whether such a change happens is the subject of Topic 9.3.
- **Treating melting and boiling as similar in size.** Vaporisation gives a much larger entropy increase than melting, because the particles separate completely in a gas.

## Where this leads

Next, [Topic 9.2: Absolute Entropy and Entropy Change](/advanced-course-resources/chemistry/9-2-absolute-entropy-entropy-change-study-guide/) turns these predictions into numbers: you calculate ΔS° from tables of standard molar entropies and use today's sign rules to check your answers. Topic 9.3 then combines ΔS with ΔH to judge thermodynamic favourability. Try the [practice questions](/advanced-course-resources/chemistry/9-1-introduction-entropy-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/9-1-introduction-entropy-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/9-1-introduction-entropy-checklist/) to consolidate.
