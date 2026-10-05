---
resourceId: "mb-ap-chem-3.5-study-guide"
title: "Kinetic Molecular Theory: Study Guide (Chemistry 3.5)"
description: "Use the kinetic molecular theory, particle diagrams and Maxwell–Boltzmann graphs to explain gas pressure and temperature, and compare the speeds of different gas particles."
course: "chemistry"
unit: 3
topics: ["3.5"]
resourceType: "study-guide"
prerequisites:
  - "The ideal gas law PV = nRT and partial pressures (Topic 3.4)"
  - "Converting between degrees Celsius and kelvin"
  - "Calculating molar mass from a formula (Topic 1.1)"
prerequisiteResources: ["mb-ap-chem-3.4-study-guide"]
learningObjectives:
  - "State the assumptions of the kinetic molecular theory and use them to explain gas pressure"
  - "Explain, at the particle level, why pressure changes when temperature, volume or amount of gas changes"
  - "Use KE = ½mv² to compare the average speeds of different gas particles at the same temperature"
  - "Relate the Kelvin temperature to the average kinetic energy of the particles"
  - "Read, sketch and compare Maxwell–Boltzmann distributions for different temperatures and different gases"
  - "Draw a particle diagram that shows the motion of gas particles at two temperatures"
skills: ["4", "5"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Most comparisons are ratios, so no constants are needed. Use temperatures in kelvin (K = °C + 273). R = 8.314 J mol⁻¹ K⁻¹ appears only in background values"
related: ["mb-ap-chem-3.5-revision-notes", "mb-ap-chem-3.5-practice", "mb-ap-chem-3.5-checklist"]
next: "mb-ap-chem-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "The kinetic molecular theory (KMT) explains gas behaviour with moving particles: pressure is the result of particles hitting the container walls."
  - "The Kelvin temperature is proportional to the average kinetic energy of the particles. Double the kelvin temperature and you double the average kinetic energy."
  - "At the same temperature, every gas has the same average kinetic energy, so lighter particles move faster on average (KE = ½mv²)."
  - "A Maxwell–Boltzmann distribution shows the spread of particle speeds or energies. Heating moves the peak to the right, lowers it and widens the curve; the area stays the same."
  - "Particles in solids and liquids are also in constant, random motion; KMT just describes gases most simply."
faqs:
  - question: "If the average kinetic energy is the same, why are the speeds different?"
    answer: "Kinetic energy depends on mass and speed together (KE = ½mv²). A heavier particle needs a lower speed to carry the same kinetic energy."
  - question: "Do all particles in a gas move at the same speed?"
    answer: "No. Collisions constantly swap energy between particles, so at any moment there is a wide range of speeds. Temperature tells you only the average kinetic energy."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From a law to a model

In Topic 3.4 you used PV = nRT to connect pressure, volume, temperature and amount of gas. That law describes what you measure. It does not say *why* gases behave that way. The **kinetic molecular theory (KMT)** answers the "why". It links the large-scale (macroscopic) properties you measure to the motion of the tiny particles you cannot see.

"Kinetic" means "to do with motion". The central idea is simple: **all particles of matter are in continuous, random motion.** This is true in solids and liquids as well as gases. In a gas the particles are far apart and move freely, so the model is easiest to apply.

## The assumptions of the model

KMT describes an **ideal gas** with five assumptions:

1. **Constant, random motion.** Gas particles move in straight lines until they hit another particle or a wall. Their directions are random.
2. **Particle volume is negligible.** The particles are tiny compared with the space between them, so almost all of the gas's volume is empty space.
3. **No attractions or repulsions.** Particles do not pull on or push each other, except at the instant of a collision.
4. **Elastic collisions.** When particles collide, they can swap energy, but the total kinetic energy does not change. No energy is lost as heat to the walls.
5. **Temperature measures average kinetic energy.** The average kinetic energy of the particles is proportional to the **Kelvin** temperature.

Assumptions 2 and 3 are never exactly true for real gases. In Topic 3.6 you will see when they break down and what happens then.

## Pressure from collisions

When a particle hits a wall, it pushes on the wall and bounces back. Billions of these impacts every second add up to a steady force. **Pressure is the force of these collisions per unit area of wall.** Two things decide the pressure:

- **How often** particles hit each square centimetre of wall (collision frequency).
- **How hard** each particle hits (which depends on its speed and mass).

Every gas law from Topic 3.4 follows from these two ideas.

| Change (others held constant) | What happens to the particles | Effect on pressure |
|---|---|---|
| Raise T (fixed V, n) | Particles move faster: they hit the walls more often **and** harder | P increases (P ∝ T) |
| Reduce V (fixed T, n) | Same speeds, but less wall area and less distance to travel, so more hits per unit area per second | P increases (P ∝ 1/V) |
| Add more gas (fixed V, T) | More particles, so more hits per second | P increases (P ∝ n) |
| Raise T (fixed P, n), for example a balloon | Faster particles push the walls outward until the collision rate per unit area falls back | V increases (V ∝ T) |
| Mix two gases (fixed V, T) | Particles do not attract or repel, so each gas hits the walls as if it were alone | P_total = P_A + P_B + … |

Notice one point in the second row: squeezing a gas at constant temperature does **not** make the particles move faster. Only a change in temperature changes the average kinetic energy.

### A particle diagram

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="kmt-box-title kmt-box-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="kmt-box-title">The same gas sample at 300 K and at 600 K</title>
<desc id="kmt-box-desc">Two identical rigid boxes each hold eight gas particles drawn as circles. Each particle has an arrow showing its velocity. In the left box, labelled 300 K, the arrows are short and have different lengths. In the right box, labelled 600 K, the arrows point in random directions and are on average longer, showing faster motion. A few particles in each box touch the walls to show collisions. The right box is labelled: same number of particles, same volume, higher average speed, more frequent and harder wall collisions, so higher pressure.</desc>
<defs><marker id="kmt-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="20" width="270" height="190" fill="#ffffff" stroke="#1d2b44" stroke-width="3"/>
<rect x="350" y="20" width="270" height="190" fill="#fdf6e3" stroke="#1d2b44" stroke-width="3"/>
<g fill="#1d2b44">
<circle cx="60" cy="60" r="7"/><circle cx="150" cy="50" r="7"/><circle cx="240" cy="80" r="7"/><circle cx="90" cy="140" r="7"/><circle cx="190" cy="130" r="7"/><circle cx="270" cy="170" r="7"/><circle cx="45" cy="190" r="7"/><circle cx="140" cy="185" r="7"/>
<circle cx="390" cy="60" r="7"/><circle cx="480" cy="50" r="7"/><circle cx="570" cy="80" r="7"/><circle cx="420" cy="140" r="7"/><circle cx="520" cy="130" r="7"/><circle cx="600" cy="170" r="7"/><circle cx="375" cy="190" r="7"/><circle cx="470" cy="185" r="7"/>
</g>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#kmt-a)">
<path d="M60 60 L80 70"/><path d="M150 50 L140 70"/><path d="M240 80 L258 72"/><path d="M90 140 L75 128"/><path d="M190 130 L210 140"/><path d="M270 170 L280 182"/><path d="M45 190 L35 175"/><path d="M140 185 L162 180"/>
<path d="M390 60 L430 80"/><path d="M480 50 L460 90"/><path d="M570 80 L606 64"/><path d="M420 140 L390 116"/><path d="M520 130 L560 150"/><path d="M600 170 L612 196"/><path d="M375 190 L360 160"/><path d="M470 185 L514 175"/>
</g>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="155" y="235" font-weight="600">300 K: shorter arrows</text>
<text x="485" y="235" font-weight="600">600 K: longer arrows on average</text>
<text x="485" y="253" font-size="12">same n and V, faster particles, higher P</text>
</g>
</svg>
<figcaption>Figure 1. Arrow length shows speed. Heating does not change the number of particles or the box; it raises the average speed, so the walls are hit more often and harder.</figcaption>
</figure>

In a particle diagram, keep the **number of particles the same** when only temperature changes, give the particles **random directions**, and show **a range of arrow lengths** in both boxes. Some particles in the hot gas can still be slow.

## Temperature and kinetic energy

The kinetic energy of one moving particle is

**KE = ½mv²**, where m is the particle's mass and v its speed.

Assumption 5 says the **average** KE of the particles is proportional to the Kelvin temperature. Two results follow, and you will use them often:

- **Same temperature → same average kinetic energy, whatever the gas.** At 25 °C, helium atoms and sulfur dioxide molecules have the same average KE.
- **Kelvin temperature doubles → average KE doubles.** Because KE depends on v², the average speed rises by a factor of only √2 ≈ 1.41.

This only works in kelvin. On the Kelvin scale, 0 K means zero particle motion in this model, so the numbers are proportional. On the Celsius scale they are not: 20 °C is not "twice as hot" as 10 °C.

**Background (not required):** for one mole of an ideal gas, the average kinetic energy is (3/2)RT. At 300 K that is (3/2)(8.314 J mol⁻¹ K⁻¹)(300 K) = 3.74 kJ mol⁻¹, the same for every gas.

### Comparing speeds of different gases

If two gases are at the same temperature, their average kinetic energies are equal:

½m₁v₁² = ½m₂v₂², so **v₁ / v₂ = √(m₂ / m₁)**

The particle mass is proportional to the molar mass, so you can use molar masses in the ratio. A particle four times heavier moves, on average, half as fast.

## Worked example 1: two gases at the same temperature

**Question.** A flask at 25 °C contains a mixture of methane, CH₄, and sulfur dioxide, SO₂. (a) Compare the average kinetic energies of the two kinds of molecule. (b) Which molecules move faster on average, and by what factor?

1. **(a)** Both gases are at the same temperature, 298 K. The average kinetic energy depends only on the Kelvin temperature, so the average KE of a CH₄ molecule **equals** the average KE of an SO₂ molecule.
2. **(b)** Molar masses: M(CH₄) = 12.01 + 4(1.008) = 16.04 g mol⁻¹; M(SO₂) = 32.06 + 2(16.00) = 64.06 g mol⁻¹.
3. Equal average KE means the lighter molecule must be faster: v(CH₄) / v(SO₂) = √(64.06 / 16.04) = √3.99 = 2.00.

**Answer.** Equal average kinetic energies; methane molecules move about **2.0 times faster** on average than sulfur dioxide molecules.

**Check.** SO₂ is about 4 times heavier, and √4 = 2. **Background:** the root-mean-square speeds at 298 K are about 681 m s⁻¹ for CH₄ and 341 m s⁻¹ for SO₂, which gives the same ratio. A common error is to say the speed ratio is 4 (the mass ratio) instead of 2.

## The Maxwell–Boltzmann distribution

Collisions swap energy between particles all the time, so at any moment some particles are slow, most are moderate and a few are very fast. A **Maxwell–Boltzmann distribution** is a graph of how many particles (or what fraction) have each speed or kinetic energy at one temperature.

<figure>
<svg viewBox="0 0 680 350" role="img" aria-labelledby="mb-t-title mb-t-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mb-t-title">Speed distributions for oxygen at 300 K and 600 K</title>
<desc id="mb-t-desc">The horizontal axis is molecular speed in metres per second from 0 to 1600. The vertical axis is fraction of molecules, with no scale. Both curves start at zero at zero speed, rise to a single peak and then fall in a long tail to the right. The solid curve for 300 K is tall and narrow with its peak at about 395 metres per second. The dashed curve for 600 K is lower and wider with its peak at about 558 metres per second, and it is higher than the 300 K curve at high speeds, beyond about 500 metres per second. The areas under the two curves are equal.</desc>
<path d="M80 30 V290 H620" fill="none" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><path d="M80 290 V296 M147.5 290 V296 M215 290 V296 M282.5 290 V296 M350 290 V296 M417.5 290 V296 M485 290 V296 M552.5 290 V296 M620 290 V296"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="311">0</text><text x="147.5" y="311">200</text><text x="215" y="311">400</text><text x="282.5" y="311">600</text><text x="350" y="311">800</text><text x="417.5" y="311">1000</text><text x="485" y="311">1200</text><text x="552.5" y="311">1400</text><text x="620" y="311">1600</text>
<text x="350" y="338" font-size="13">Molecular speed (m s⁻¹)</text>
</g>
<text x="40" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 40 160)">Fraction of molecules</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,290.0 88.4,287.4 96.9,279.8 105.3,267.5 113.8,251.1 122.2,231.3 130.6,209.1 139.1,185.5 147.5,161.5 155.9,138.1 164.4,116.2 172.8,96.7 181.2,80.2 189.7,67.3 198.1,58.2 206.6,53.1 215.0,52.0 223.4,54.6 231.9,60.6 240.3,69.7 248.8,81.2 257.2,94.7 265.6,109.6 274.1,125.4 282.5,141.5 290.9,157.6 299.4,173.3 307.8,188.3 316.2,202.2 324.7,215.1 333.1,226.7 341.6,237.1 350.0,246.2 358.4,254.1 366.9,260.9 375.3,266.6 383.8,271.4 392.2,275.3 400.6,278.5 409.1,281.1 417.5,283.2 425.9,284.8 434.4,286.1 442.8,287.1 451.2,287.9 459.7,288.4 468.1,288.9 476.6,289.2 485.0,289.4 493.4,289.6 501.9,289.7 510.3,289.8 518.8,289.9"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" points="80.0,290.0 88.4,289.1 96.9,286.4 105.3,281.9 113.8,275.8 122.2,268.2 130.6,259.3 139.1,249.3 147.5,238.4 155.9,226.8 164.4,214.9 172.8,202.9 181.2,191.0 189.7,179.5 198.1,168.6 206.6,158.5 215.0,149.4 223.4,141.5 231.9,134.7 240.3,129.4 248.8,125.4 257.2,122.9 265.6,121.7 274.1,121.9 282.5,123.5 290.9,126.2 299.4,130.1 307.8,134.9 316.2,140.6 324.7,147.1 333.1,154.1 341.6,161.6 350.0,169.4 358.4,177.4 366.9,185.5 375.3,193.6 383.8,201.5 392.2,209.3 400.6,216.7 409.1,223.9 417.5,230.6 425.9,237.0 434.4,242.9 442.8,248.3 451.2,253.4 459.7,257.9 468.1,262.1 476.6,265.8 485.0,269.1 493.4,272.1 501.9,274.7 510.3,277.0 518.8,279.0 527.2,280.8 535.6,282.3 544.1,283.5 552.5,284.6 560.9,285.6 569.4,286.4 577.8,287.0 586.2,287.6 594.7,288.0 603.1,288.4 611.6,288.7 620.0,289.0"/>
<g font-size="13" fill="#1d2b44">
<text x="225" y="45">300 K (solid): peak ≈ 395 m s⁻¹</text>
<text x="300" y="112">600 K (dashed): peak ≈ 558 m s⁻¹</text>
<text x="440" y="215">more fast molecules at 600 K</text>
</g>
</svg>
<figcaption>Figure 2. Model speed distributions for O₂ calculated from kinetic theory. Line style (solid or dashed) and labels identify the curves. Heating moves the peak right, lowers it and spreads the curve out.</figcaption>
</figure>

How to read and sketch these graphs:

- **Start at the origin.** Almost no particles are at rest at any moment, so the curve starts at zero.
- **One peak, then a long tail to the right.** The peak is the most likely speed (or energy). The tail shows a few very fast particles. The curve is not symmetrical.
- **Area = all the particles.** For the same sample, the area under the curve stays the same at every temperature.
- **Higher temperature:** peak moves right (faster), peak gets lower and the curve gets wider. It must be lower because the same area is spread over a wider range. For O₂, about 4% of molecules are faster than 800 m s⁻¹ at 300 K but about 25% at 600 K (model values).
- **Same temperature, different gases (speed axis):** the heavier gas has a taller, narrower curve with its peak at a lower speed (Figure 3).
- **Same temperature, different gases (kinetic energy axis):** the curves are **identical**, because the energy distribution depends only on temperature.

<figure>
<svg viewBox="0 0 680 350" role="img" aria-labelledby="mb-m-title mb-m-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mb-m-title">Speed distributions for sulfur dioxide and methane, both at 298 K</title>
<desc id="mb-m-desc">The horizontal axis is molecular speed in metres per second from 0 to 1600. The vertical axis is fraction of molecules, with no scale. The solid curve for sulfur dioxide is tall and narrow with its peak at about 278 metres per second and almost no molecules above 900 metres per second. The dashed curve for methane is lower and much wider with its peak at about 556 metres per second, twice the speed of the sulfur dioxide peak, and a tail reaching beyond 1600 metres per second.</desc>
<path d="M80 30 V290 H620" fill="none" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><path d="M80 290 V296 M147.5 290 V296 M215 290 V296 M282.5 290 V296 M350 290 V296 M417.5 290 V296 M485 290 V296 M552.5 290 V296 M620 290 V296"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="311">0</text><text x="147.5" y="311">200</text><text x="215" y="311">400</text><text x="282.5" y="311">600</text><text x="350" y="311">800</text><text x="417.5" y="311">1000</text><text x="485" y="311">1200</text><text x="552.5" y="311">1400</text><text x="620" y="311">1600</text>
<text x="350" y="338" font-size="13">Molecular speed (m s⁻¹)</text>
</g>
<text x="40" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 40 160)">Fraction of molecules</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,290.0 88.4,284.8 96.9,269.7 105.3,246.2 113.8,216.5 122.2,183.2 130.6,149.3 139.1,117.5 147.5,90.4 155.9,69.9 164.4,56.9 172.8,52.0 181.2,54.8 189.7,64.4 198.1,79.7 206.6,99.0 215.0,120.8 223.4,143.7 231.9,166.4 240.3,187.9 248.8,207.4 257.2,224.6 265.6,239.3 274.1,251.5 282.5,261.3 290.9,269.1 299.4,275.0 307.8,279.5 316.2,282.7 324.7,285.1 333.1,286.7 341.6,287.9 350.0,288.6 358.4,289.1 366.9,289.5 375.3,289.7 383.8,289.8 392.2,289.9"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" points="80.0,290.0 88.4,289.3 96.9,287.4 105.3,284.2 113.8,279.8 122.2,274.4 130.6,268.1 139.1,260.9 147.5,253.2 155.9,244.9 164.4,236.5 172.8,227.9 181.2,219.5 189.7,211.3 198.1,203.6 206.6,196.5 215.0,190.1 223.4,184.5 231.9,179.8 240.3,176.0 248.8,173.3 257.2,171.6 265.6,170.9 274.1,171.1 282.5,172.3 290.9,174.4 299.4,177.2 307.8,180.7 316.2,184.8 324.7,189.5 333.1,194.5 341.6,199.9 350.0,205.5 358.4,211.2 366.9,217.0 375.3,222.7 383.8,228.3 392.2,233.8 400.6,239.1 409.1,244.1 417.5,248.8 425.9,253.3 434.4,257.4 442.8,261.3 451.2,264.8 459.7,267.9 468.1,270.8 476.6,273.4 485.0,275.7 493.4,277.8 501.9,279.6 510.3,281.2 518.8,282.5 527.2,283.7 535.6,284.8 544.1,285.6 552.5,286.4 560.9,287.0 569.4,287.6 577.8,288.0 586.2,288.4 594.7,288.7 603.1,288.9 611.6,289.2 620.0,289.3"/>
<g font-size="13" fill="#1d2b44">
<text x="185" y="45">SO₂, M = 64.06 (solid): peak ≈ 278 m s⁻¹</text>
<text x="285" y="150">CH₄, M = 16.04 (dashed): peak ≈ 556 m s⁻¹</text>
</g>
</svg>
<figcaption>Figure 3. Model speed distributions at 298 K. Both gases have the same average kinetic energy, but the lighter CH₄ molecules are spread over higher speeds. The peak speeds differ by a factor of √(64.06 / 16.04) = 2.00.</figcaption>
</figure>

## Worked example 2: heating a gas in a rigid container

**Question.** A sealed steel container of oxygen gas is heated from 27 °C to 327 °C. The pressure at 27 °C is 1.20 atm.
(a) By what factor does the average kinetic energy of the O₂ molecules change?
(b) By what factor does their average speed change?
(c) Use KMT to explain why the pressure rises, and find the new pressure.
(d) Describe how the Maxwell–Boltzmann speed distribution changes.

1. **Convert to kelvin.** T₁ = 27 + 273 = 300 K; T₂ = 327 + 273 = 600 K.
2. **(a)** Average KE ∝ T, so the factor is 600 / 300 = **2.00**. (Using Celsius, 327 / 27 = 12.1, would be badly wrong.)
3. **(b)** KE ∝ v², so v ∝ √T. The factor is √2.00 = **1.41**. The molecules have the same mass at both temperatures, so only speed can change.
4. **(c)** The volume and number of molecules are fixed. Faster molecules hit the walls **more often** and **with more force** on each impact, so the force per unit area rises. P₂ = 1.20 atm × (600 K / 300 K) = **2.40 atm**.
5. **(d)** At 600 K the curve's peak moves to a higher speed (from about 395 to about 558 m s⁻¹, model values), the peak is lower, the curve is broader, and a larger fraction of molecules have high speeds. The area under the curve is unchanged because the number of molecules is unchanged (Figure 2).

**Check.** The pressure doubles while the average speed rises by only 1.41 times. That is consistent: both the frequency of collisions and the force of each collision increase, and each goes up by a factor of about 1.41, giving 1.41 × 1.41 = 2.

## Common misconceptions

- **"Heavier gases have more kinetic energy."** At the same temperature, the average kinetic energy is the same for every gas. Heavier particles simply move more slowly.
- **"Compressing a gas speeds up the particles."** At constant temperature the average speed does not change. The pressure rises because collisions with each unit of wall area become more frequent.
- **"All particles in a gas have the same speed."** There is always a spread of speeds, shown by the Maxwell–Boltzmann distribution. Temperature fixes the *average* KE, not each particle's.
- **"Doubling the temperature doubles the speed."** Doubling the *Kelvin* temperature doubles the average KE; speed rises by √2.
- **Using °C in ratios.** Average KE is proportional to the Kelvin temperature only.
- **Drawing the hot curve taller.** At higher temperature the peak is *lower* and wider, because the area (number of particles) stays the same.
- **Drawing a symmetrical bell curve.** The distribution starts at zero and has a long tail on the high-speed side.
- **"Particles in solids are not moving."** All particles of matter are in continuous random motion; in solids they vibrate about fixed positions.

## Where this leads

KMT assumes particles have no volume and no attractions. In Topic 3.6 you will use those assumptions to explain when and why real gases do not obey PV = nRT: see [Deviation from Ideal Gas Law](/advanced-course-resources/chemistry/3-6-deviation-ideal-gas-law-study-guide/). The Maxwell–Boltzmann distribution comes back in Unit 5, where it shows why only a fraction of collisions have enough energy to react, and in Unit 9, where a wider spread of energies means higher entropy. Now try the [practice questions](/advanced-course-resources/chemistry/3-5-kinetic-molecular-theory-practice/), then use the [revision notes](/advanced-course-resources/chemistry/3-5-kinetic-molecular-theory-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/3-5-kinetic-molecular-theory-checklist/).
