---
resourceId: "mb-ap-chem-3.6-study-guide"
title: "Deviation from Ideal Gas Law: Study Guide (Chemistry 3.6)"
description: "Explain why real gases depart from PV = nRT: attractions between particles lower the pressure near condensation, and particle volume raises it at very high pressure."
course: "chemistry"
unit: 3
topics: ["3.6"]
resourceType: "study-guide"
prerequisites:
  - "The ideal gas law PV = nRT (Topic 3.4)"
  - "The assumptions of the kinetic molecular theory (Topic 3.5)"
  - "Types and relative strengths of intermolecular forces (Topic 3.1)"
prerequisiteResources: ["mb-ap-chem-3.5-study-guide"]
learningObjectives:
  - "Identify which assumptions of the kinetic molecular theory fail for real gases"
  - "Explain why attractions between gas particles make the measured pressure lower than the ideal value"
  - "Explain why the volume of the particles makes the measured volume or pressure higher than the ideal value at very high pressure"
  - "Predict the conditions, and the kinds of gas, that give the largest and smallest deviations from ideal behaviour"
  - "Compare a measured value with an ideal-gas prediction and justify which effect is dominant"
  - "Interpret a graph or table of PV/nRT against pressure"
skills: ["4", "5", "6"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "R = 0.08206 L atm mol⁻¹ K⁻¹. All measured values for gases X and Y are invented for practice, not real data"
related: ["mb-ap-chem-3.6-revision-notes", "mb-ap-chem-3.6-practice", "mb-ap-chem-3.6-checklist"]
next: "mb-ap-chem-3.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "PV = nRT assumes gas particles have no volume and do not attract each other. Real particles do both, so real gases deviate."
  - "Attractions pull particles back from the walls, so the measured pressure is lower than the ideal value. This matters most near condensation: low temperature, high pressure, strong intermolecular forces."
  - "The particles' own volume makes the measured volume (or pressure) higher than the ideal value. This matters most at very high pressure."
  - "The ratio PV/nRT is 1 for an ideal gas, below 1 when attractions dominate and above 1 when particle volume dominates."
  - "Gases behave most ideally at high temperature and low pressure, especially small particles with weak intermolecular forces, such as helium."
faqs:
  - question: "If real gases are not ideal, why use PV = nRT at all?"
    answer: "At ordinary temperatures and pressures, most gases are within a few per cent of ideal behaviour, so PV = nRT gives good answers. You only need to worry near condensation or at very high pressure."
  - question: "Do the two effects ever cancel out?"
    answer: "Yes. At one particular pressure for a given gas and temperature, the effect of attractions and the effect of particle volume can balance, so PV/nRT happens to equal 1. The gas is still not ideal: both effects are present."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Ideal gases are a model

In Topic 3.5 you met the kinetic molecular theory (KMT). Two of its assumptions are what make PV = nRT work:

- **The particles have negligible volume.** All of the container's volume is free space for the particles to move in.
- **The particles do not attract or repel each other** except when they collide.

No real gas meets these assumptions exactly. Real particles take up space, and every real particle feels at least London dispersion forces (Topic 3.1). So the ideal gas law never describes a real gas perfectly. The question is: **how far off is it, in which direction, and why?**

## Measuring the deviation: the ratio PV/nRT

A simple way to see a deviation is to measure P, V, n and T for a real gas and calculate PV/nRT.

- **PV/nRT = 1:** the gas behaves ideally.
- **PV/nRT < 1:** the measured pressure (or volume) is **lower** than the ideal prediction. Attractions between particles are the main effect.
- **PV/nRT > 1:** the measured pressure (or volume) is **higher** than the ideal prediction. The volume of the particles is the main effect.

You can also compare a single measured value directly with the ideal value: calculate P_ideal = nRT/V and compare it with the measured pressure. (Background: PV/nRT is often called the compressibility factor, Z. You do not need the name.)

## Effect 1: attractions lower the pressure

Picture a particle about to hit the wall. In an ideal gas nothing pulls on it. In a real gas, the particles behind it attract it, pulling it slightly back towards the middle of the container. So:

- it hits the wall **with less force**, and
- particles strike the walls **less often**, because attractions keep some of them close together.

Both effects make the **measured pressure lower than the ideal pressure**. (If the pressure is held constant instead, the gas takes up **less volume** than predicted.)

Attractions matter most when they are large compared with the kinetic energy of the particles, and when the particles are close enough to feel them. That means **conditions close to condensation**:

- **Low temperature.** Slow particles spend longer near each other, and their kinetic energy is too small to shrug off the attractions.
- **Moderately high pressure.** Particles are closer together, so they feel each other's attractions more.
- **Strong intermolecular forces.** Polar molecules, molecules with hydrogen bonding, and large molecules with many electrons (strong dispersion forces) deviate more than small nonpolar ones.

A useful check is the boiling point: a gas with a higher boiling point has stronger intermolecular forces, and at the same temperature it is closer to condensing. Ammonia, NH₃ (boils at −33 °C, hydrogen bonding), deviates far more at room temperature than nitrogen, N₂ (boils at −196 °C), which in turn deviates more than helium, He (boils at −269 °C, very weak dispersion forces).

## Effect 2: particle volume raises the volume (or pressure)

At ordinary pressures the particles take up a tiny fraction of the container. For example, if the molecules of a gas themselves occupy about 40 mL per mole, that is only 0.16% of the 24.6 L that one mole of gas fills at 300 K and 1 atm. Ignoring it causes no real error.

At **extremely high pressure** the gas is squeezed into a small volume, and the particles themselves fill a large share of it. The empty space the particles can actually move in is **smaller** than the container volume. So:

- at a fixed pressure, the real gas **cannot be compressed as far** as PV = nRT predicts: its **measured volume is larger** than the ideal volume;
- at a fixed volume, the particles have less free space, hit the walls more often, and the **measured pressure is higher** than the ideal value.

Larger particles show this effect sooner.

<figure>
<svg viewBox="0 0 640 280" role="img" aria-labelledby="dev-p-title dev-p-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dev-p-title">The two causes of non-ideal behaviour at the particle level</title>
<desc id="dev-p-desc">Left panel, labelled attractions: a container with widely spaced particles. One particle is moving towards the right-hand wall, shown by a solid arrow. Three dotted lines join it to nearby particles behind it, labelled attractions pull the particle back, so it hits the wall more gently. Right panel, labelled particle volume at very high pressure: a small container packed with large circles that fill much of the space. A label says the free space the particles can move in is much smaller than the container volume.</desc>
<defs><marker id="dev-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="30" width="280" height="190" fill="#ffffff" stroke="#1d2b44" stroke-width="3"/>
<g fill="#1d2b44">
<circle cx="250" cy="120" r="9"/><circle cx="195" cy="85" r="9"/><circle cx="190" cy="160" r="9"/><circle cx="150" cy="120" r="9"/>
<circle cx="70" cy="70" r="9"/><circle cx="80" cy="180" r="9"/><circle cx="110" cy="60" r="9"/>
</g>
<path d="M260 120 H290" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#dev-a)"/>
<g stroke="#1d2b44" stroke-width="2" stroke-dasharray="3 4"><path d="M250 120 L195 85"/><path d="M250 120 L190 160"/><path d="M250 120 L150 120"/></g>
<rect x="360" y="70" width="140" height="140" fill="#fdf6e3" stroke="#1d2b44" stroke-width="3"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="385" cy="95" r="20"/><circle cx="430" cy="95" r="20"/><circle cx="475" cy="95" r="20"/>
<circle cx="385" cy="140" r="20"/><circle cx="433" cy="142" r="20"/><circle cx="475" cy="140" r="20"/>
<circle cx="385" cy="185" r="20"/><circle cx="430" cy="185" r="20"/><circle cx="475" cy="185" r="20"/>
</g>
<g font-size="14" fill="#1d2b44">
<text x="160" y="22" text-anchor="middle" font-weight="600">Attractions</text>
<text x="160" y="244" text-anchor="middle" font-size="12">dotted lines: attractions pull the particle back,</text>
<text x="160" y="260" text-anchor="middle" font-size="12">so it hits the wall more gently: P lower than ideal</text>
<text x="430" y="40" text-anchor="middle" font-weight="600">Particle volume</text>
<text x="430" y="58" text-anchor="middle" font-size="12">(very high pressure)</text>
<text x="430" y="244" text-anchor="middle" font-size="12">free space is much smaller than the container,</text>
<text x="430" y="260" text-anchor="middle" font-size="12">so V (or P) is higher than ideal</text>
</g>
</svg>
<figcaption>Figure 1. Left: attractions from neighbouring particles (dotted lines) slow a particle as it approaches the wall. Right: at very high pressure, the particles themselves fill much of the container.</figcaption>
</figure>

## Both effects together

In a real gas both effects act at the same time. Which one wins depends on the conditions. Figure 2 shows model curves for two invented gases at 300 K.

<figure>
<svg viewBox="0 0 680 350" role="img" aria-labelledby="dev-z-title dev-z-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dev-z-title">PV/nRT against pressure for an ideal gas and two model real gases at 300 K</title>
<desc id="dev-z-desc">The horizontal axis is pressure in atmospheres from 0 to 800. The vertical axis is PV divided by nRT from 0.6 to 2.0. A horizontal dashed line at 1.0 is labelled ideal gas. A dotted line for a gas with very weak attractions starts at 1.0 and rises steadily to about 1.77 at 800 atmospheres. A solid line for gas Y, which has stronger attractions, starts at 1.0, dips below the ideal line to a minimum of about 0.82 near 150 atmospheres, crosses back above 1.0 at about 310 atmospheres and rises to about 1.87 at 800 atmospheres. The region below the ideal line is labelled attractions dominate; the region above is labelled particle volume dominates.</desc>
<path d="M80 30 V290 H620" fill="none" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<path d="M74 30 H80 M74 67.1 H80 M74 104.3 H80 M74 141.4 H80 M74 178.6 H80 M74 215.7 H80 M74 252.9 H80 M74 290 H80"/>
<path d="M80 290 V296 M147.5 290 V296 M215 290 V296 M282.5 290 V296 M350 290 V296 M417.5 290 V296 M485 290 V296 M552.5 290 V296 M620 290 V296"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="70" y="34">2.0</text><text x="70" y="71.1">1.8</text><text x="70" y="108.3">1.6</text><text x="70" y="145.4">1.4</text><text x="70" y="182.6">1.2</text><text x="70" y="219.7">1.0</text><text x="70" y="256.9">0.8</text><text x="70" y="294">0.6</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="311">0</text><text x="147.5" y="311">100</text><text x="215" y="311">200</text><text x="282.5" y="311">300</text><text x="350" y="311">400</text><text x="417.5" y="311">500</text><text x="485" y="311">600</text><text x="552.5" y="311">700</text><text x="620" y="311">800</text>
<text x="350" y="338" font-size="13">Pressure (atm)</text>
</g>
<text x="28" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 28 160)">PV / nRT</text>
<path d="M80 215.7 H620" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="8 5"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 4" stroke-linecap="round" points="80.7,215.5 94.2,212.1 107.7,208.6 121.2,205.2 134.7,201.7 148.2,198.2 161.7,194.7 175.2,191.2 188.7,187.7 202.2,184.2 215.7,180.6 229.2,177.1 242.7,173.5 256.2,170.0 269.7,166.4 283.2,162.9 296.7,159.3 310.2,155.7 323.7,152.2 337.2,148.6 350.7,145.0 364.2,141.4 377.7,137.9 391.2,134.3 404.7,130.7 418.2,127.1 431.7,123.5 445.2,119.9 458.7,116.3 472.2,112.7 485.7,109.1 499.2,105.5 512.7,101.9 526.2,98.3 539.7,94.7 553.2,91.1 566.7,87.5 580.2,83.9 593.7,80.2 607.2,76.6 620.0,73.2"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.7,216.0 94.2,222.2 107.7,228.4 121.2,234.3 134.7,239.6 148.2,244.2 161.7,247.4 175.2,249.1 188.7,249.0 202.2,247.4 215.7,244.5 229.2,240.6 242.7,235.9 256.2,230.7 269.7,225.1 283.2,219.2 296.7,213.1 310.2,206.8 323.7,200.4 337.2,193.9 350.7,187.4 364.2,180.8 377.7,174.2 391.2,167.5 404.7,160.8 418.2,154.2 431.7,147.5 445.2,140.8 458.7,134.0 472.2,127.3 485.7,120.6 499.2,113.9 512.7,107.2 526.2,100.5 539.7,93.9 553.2,87.2 566.7,80.5 580.2,73.8 593.7,67.2 607.2,60.5 620.0,54.2"/>
<g font-size="12" fill="#1d2b44">
<text x="520" y="232">ideal gas (dashed) = 1</text>
<text x="300" y="148" text-anchor="end">weak attractions (dotted)</text>
<text x="440" y="175">gas Y (solid)</text>
<text x="190" y="275">attractions dominate (below 1)</text>
<text x="95" y="60">particle volume dominates (above 1)</text>
</g>
</svg>
<figcaption>Figure 2. Model curves for invented gases, not measured data. Line style and labels identify each curve. Gas Y dips below 1 at moderate pressure, then rises above 1 at very high pressure.</figcaption>
</figure>

How to read Figure 2:

- **Low pressure (near 0 atm):** every curve starts at 1. The particles are far apart, so neither effect matters.
- **Moderate pressure (gas Y):** particles are close enough to attract each other, but the gas is not yet so compressed that particle volume matters. Attractions win, so PV/nRT drops below 1.
- **Very high pressure:** the particles fill a large share of the volume. Particle volume wins, so PV/nRT rises above 1 for both gases.
- **The gas with very weak attractions** never dips noticeably below 1: particle volume is the only visible effect. Helium behaves like this at room temperature.

## Predicting which gas deviates more

To compare two gases at the **same temperature and moderate pressure**, compare their intermolecular forces, then link them to the pressure.

Take methane, CH₄, and chloromethane, CH₃Cl, both at 25 °C and 10 atm.

1. **Name the forces.** CH₄ is nonpolar with 10 electrons: only London dispersion forces. CH₃Cl is polar with 26 electrons: dipole–dipole forces **and** stronger dispersion forces, because its larger electron cloud is more polarisable.
2. **Compare the attractions.** CH₃Cl molecules attract each other more strongly. Its much higher boiling point (−24 °C, against −161.5 °C for CH₄) confirms this.
3. **Link to the measurement.** Stronger attractions pull CH₃Cl molecules back from the walls more, so CH₃Cl shows the **larger negative deviation**: its measured pressure is further below the ideal value.

At extremely high pressure the comparison is about size instead: the larger CH₃Cl molecules also take up more space.

## Worked example 1: comparing a measured pressure with the ideal value

**Question.** A rigid 5.00 L cylinder holds 2.00 mol of gas X at 250 K. The measured pressure is 7.65 atm (invented data).
(a) Calculate the pressure predicted by the ideal gas law.
(b) Calculate PV/nRT and state which effect is dominant. Justify your answer at the particle level.
(c) Predict how PV/nRT would change if the cylinder were heated to 500 K.

1. **(a)** P_ideal = nRT / V = (2.00 mol)(0.08206 L atm mol⁻¹ K⁻¹)(250 K) / 5.00 L = **8.21 atm**.
2. **(b)** PV/nRT = P_measured / P_ideal = 7.65 / 8.206 = **0.932**. The real pressure is about 6.8% lower than ideal.
3. Since the ratio is **below 1**, attractions between the particles are the dominant effect. Attractions pull particles back as they approach the walls, so they collide with the walls less often and less forcefully than ideal particles would.
4. **(c)** At 500 K the particles have twice the average kinetic energy. The attractions are now small compared with the kinetic energy, and the gas is further from condensing. PV/nRT would move **closer to 1**: the gas would behave more ideally.

**Check.** A ratio a little below 1 at a moderate pressure and low temperature is exactly the pattern expected for attractions (compare gas Y in Figure 2).

## Worked example 2: interpreting a data table

**Question.** The table gives PV/nRT for 1.00 mol of gas Y at 300 K (invented model data, as in Figure 2).

| P (atm) | 1 | 50 | 100 | 200 | 400 | 600 | 800 |
|---|---|---|---|---|---|---|---|
| PV/nRT | 1.00 | 0.92 | 0.85 | 0.84 | 1.15 | 1.51 | 1.87 |

(a) Explain the trend from 1 atm to 200 atm. (b) Explain the trend from 400 atm to 800 atm. (c) At 800 atm, compare the real volume of gas Y with the ideal volume.

1. **(a)** From 1 to 200 atm, PV/nRT falls below 1. As the gas is compressed, the particles get closer together, so the attractions between them have a bigger effect. Attractions lower the pressure (or volume) below the ideal value.
2. **(b)** Above about 300 atm, PV/nRT rises above 1 and keeps rising. The particles now fill a large share of the container, so the free space is much smaller than the container volume. The gas resists further compression, and particle volume outweighs attractions.
3. **(c)** The ideal volume at 800 atm is V = nRT/P = (1.00)(0.08206)(300) / 800 = 0.03077 L = **30.8 mL**. Since PV/nRT = 1.87, the real volume is 1.87 × 30.77 mL = **57.5 mL**, much larger than ideal.

**Interpretation.** Near 300 atm the two effects roughly balance and the ratio passes through 1. This does not mean the gas is ideal there.

## Common misconceptions

- **"Real gases always have a lower pressure than ideal."** Only when attractions dominate. At very high pressure, particle volume makes the pressure (or volume) higher than ideal.
- **"High pressure always makes a gas more ideal."** The opposite: gases are most ideal at **low** pressure, where the particles are far apart.
- **"Low temperature makes a gas more ideal because the particles are slower."** Slow particles are more affected by attractions. Gases are most ideal at **high** temperature.
- **Blaming collisions between particles.** Ideal particles collide too. Deviations come from attractions and particle volume, not from collisions.
- **"PV/nRT = 1 means the gas is ideal."** The two effects can cancel at one pressure while both are present.
- **Calling an intermolecular force "strong" or "weak" without naming it.** Say which force (for example, hydrogen bonding in NH₃, dispersion forces in He) and explain why it is stronger or weaker.
- **Confusing intramolecular and intermolecular forces.** Covalent bonds inside a molecule do not cause deviations; attractions *between* molecules do.

## Where this leads

The same intermolecular forces that make gases non-ideal control how substances mix and dissolve. In Topic 3.7 you will use them, with concentration calculations, to describe [solutions and mixtures](/advanced-course-resources/chemistry/3-7-solutions-mixtures-study-guide/). Now try the [practice questions](/advanced-course-resources/chemistry/3-6-deviation-ideal-gas-law-practice/), then use the [revision notes](/advanced-course-resources/chemistry/3-6-deviation-ideal-gas-law-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/3-6-deviation-ideal-gas-law-checklist/).
