---
resourceId: "mb-ap-phys2-9.1-study-guide"
title: "Kinetic Theory of Temperature and Pressure: Study Guide (Physics 2 9.1)"
description: "Explain gas pressure from atomic collisions and momentum change, and temperature from average kinetic energy, rms speed and the Maxwell–Boltzmann speed distribution."
course: "physics-2"
unit: 9
topics: ["9.1"]
resourceType: "study-guide"
prerequisites:
  - "Momentum p = mv and impulse: average force × time = change in momentum"
  - "Kinetic energy K = ½mv² and resolving a velocity into components"
  - "Pressure as force per unit area"
learningObjectives:
  - "Explain the pressure of a gas as the result of atoms colliding with a surface and changing momentum"
  - "Use momentum conservation to find the momentum change in a collision of an atom with a wall, head-on or at an angle"
  - "Calculate pressure from the perpendicular force exerted on a surface"
  - "Explain why pressure exists everywhere inside a gas, not only at the walls"
  - "Relate the temperature of a gas to the average kinetic energy and rms speed of its atoms"
  - "Describe how the Maxwell–Boltzmann speed distribution changes with temperature and with atomic mass"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "k_B = 1.38 × 10⁻²³ J/K. Temperatures in kelvin. Keep unrounded values until the final step"
related: ["mb-ap-phys2-9.1-revision-notes", "mb-ap-phys2-9.1-practice", "mb-ap-phys2-9.1-checklist"]
next: "mb-ap-phys2-9.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Gas pressure comes from atoms hitting a surface: each bounce changes the atom's momentum, so the surface must push on it, and it pushes back."
  - "Pressure is the total perpendicular force from the atoms divided by the area: P = F⊥/A. Only the perpendicular component of each atom's velocity reverses."
  - "Pressure exists at every point inside a gas, not just at the container walls."
  - "Temperature measures the average kinetic energy of the atoms: K_avg = (3/2)k_B T = ½m v_rms², with T in kelvin."
  - "At a higher temperature the Maxwell–Boltzmann speed distribution shifts to higher speeds, spreads out and its peak gets lower; the area under it stays the same."
faqs:
  - question: "Do all the atoms in a gas at one temperature move at the same speed?"
    answer: "No. The atoms have a wide spread of speeds, shown by the Maxwell–Boltzmann distribution. Temperature fixes the average kinetic energy of the atoms, not the speed of any one atom."
  - question: "Do I need to know the equation of the Maxwell–Boltzmann curve?"
    answer: "No. You need to read and sketch the graph and say how its features (peak position, height, spread, area) depend on temperature. The formula for the curve is not required."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## A gas is a crowd of moving atoms

Picture a sealed box of gas. It looks still, but inside it a huge number of atoms move in random directions at high speeds. They keep colliding: with each other and with the walls. **Kinetic theory** explains two large-scale properties of the gas, pressure and temperature, using only this atomic motion.

Every collision obeys the rules you met in mechanics:

- Momentum is conserved in a collision between two atoms. The total momentum of the pair is the same before and after.
- When an atom hits a fixed wall, the wall exerts a force on the atom and changes its momentum. By Newton's third law the atom exerts an equal and opposite force on the wall.
- In this model the collisions are **elastic**, so the atoms do not lose kinetic energy when they bounce.

In this course you analyse these collisions in one or two dimensions. You will not need three-dimensional collision calculations.

## Pressure from collisions

### One atom hitting a wall head-on

An atom of mass m moves at speed v straight towards a wall. It bounces back elastically with the same speed v. Take the direction away from the wall as positive.

- Momentum before: −mv
- Momentum after: +mv
- Change in momentum of the atom: Δp = mv − (−mv) = **2mv**, directed away from the wall.

The wall gave the atom an impulse of 2mv. So the atom gave the wall an impulse of 2mv, directed into the wall. A common slip is to write mv. The atom does not just stop: it stops **and** comes back.

### One atom hitting a wall at an angle

Now the atom arrives at angle θ to the **normal** (the line perpendicular to the wall). Split its velocity into two components (Figure 1):

- perpendicular to the wall: v cos θ
- parallel to the wall: v sin θ

A smooth wall can only push perpendicular to its surface. So the parallel component does not change. Only the perpendicular component reverses. The change in momentum is:

**Δp = 2m v cos θ**, perpendicular to the wall.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="wall-hit-title wall-hit-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="wall-hit-title">An atom bouncing off a wall at an angle, with its velocity components before and after</title>
<desc id="wall-hit-desc">Left: a vertical wall with a dashed normal line drawn from the point of impact. An atom approaches from the lower left, travelling at angle theta to the normal, and leaves towards the upper left at the same angle theta and the same speed v. Right: two sets of component arrows. Before the collision the perpendicular component, v cos theta, points towards the wall and the parallel component, v sin theta, points up. After the collision the perpendicular component, v cos theta, points away from the wall and the parallel component, v sin theta, still points up, unchanged.</desc>
<defs><marker id="wh-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="280" y="20" width="16" height="280" fill="#e8ecf2" stroke="#1d2b44" stroke-width="1.5"/>
<text x="288" y="318" font-size="12" fill="#1d2b44" text-anchor="middle">wall</text>
<line x1="150" y1="160" x2="280" y2="160" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="150" y="152" font-size="12" fill="#1d2b44">normal</text>
<circle cx="215" cy="272.6" r="7" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="219" y1="265.7" x2="277" y2="165.2" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#wh-arr)"/>
<line x1="280" y1="160" x2="219" y2="54.3" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#wh-arr)"/>
<circle cx="215" cy="47.4" r="7" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M245 160 A35 35 0 0 0 262.5 190.3" fill="none" stroke="#1d2b44" stroke-width="1.2"/>
<path d="M245 160 A35 35 0 0 1 262.5 129.7" fill="none" stroke="#1d2b44" stroke-width="1.2"/>
<g font-size="13" fill="#1d2b44">
<text x="232" y="192">θ</text><text x="232" y="138">θ</text>
<text x="203" y="285" text-anchor="end">before: speed v</text>
<text x="203" y="44" text-anchor="end">after: speed v</text>
</g>
<g font-size="13" fill="#1d2b44">
<text x="330" y="45" font-weight="600">Before</text>
<line x1="350" y1="120" x2="410" y2="120" stroke="#1d2b44" stroke-width="2" marker-end="url(#wh-arr)"/>
<line x1="350" y1="120" x2="350" y2="70" stroke="#1d2b44" stroke-width="2" marker-end="url(#wh-arr)"/>
<text x="416" y="124" font-size="12">v cos θ (to wall)</text>
<text x="358" y="82">v sin θ</text>
<text x="330" y="170" font-weight="600">After</text>
<line x1="470" y1="245" x2="410" y2="245" stroke="#1d2b44" stroke-width="2" marker-end="url(#wh-arr)"/>
<line x1="470" y1="245" x2="470" y2="195" stroke="#1d2b44" stroke-width="2" marker-end="url(#wh-arr)"/>
<text x="404" y="249" text-anchor="end">v cos θ (away)</text>
<text x="478" y="207">v sin θ</text>
<text x="478" y="223" font-size="11">(unchanged)</text>
<text x="330" y="290" font-size="12">Only the perpendicular component reverses:</text>
<text x="330" y="308" font-size="12">Δp = 2m v cos θ, perpendicular to the wall</text>
</g>
</svg>
<figcaption>Figure 1. An atom bounces elastically off a smooth wall. It leaves at the same speed and the same angle θ to the normal. The component parallel to the wall (v sin θ) is unchanged; the perpendicular component (v cos θ) reverses, so the atom's momentum changes by 2m v cos θ.</figcaption>
</figure>

### From many collisions to pressure

One collision gives a tiny impulse. But a real wall is hit by an enormous number of atoms every second. The many small impulses add up to a steady average force. If each collision gives the wall a perpendicular impulse Δp, and the wall receives R collisions per second, the average force is:

**F⊥ = (number of collisions per second) × (impulse per collision) = R × Δp**

This is just Newton's second law in the form F = Δp/Δt, applied to all the atoms that hit in one second.

**Pressure** is the sum of the perpendicular force components from all the atoms, divided by the area of the surface:

**P = F⊥ / A**

The unit is the pascal: 1 Pa = 1 N/m². Note the word *perpendicular*. Atoms that hit at an angle still push only perpendicular to the wall, because the parallel parts of their momentum do not change.

### Pressure is everywhere in the gas

Pressure is not just something that happens at the walls. Imagine a small, flat test surface placed anywhere inside the gas, even in the middle of the box. Atoms hit it from both sides, so there is a force on each face, and a pressure at that point. Inside the gas, atoms are also colliding with each other and transferring momentum across every imaginary surface you could draw. So pressure exists **throughout** the gas. The walls are simply where we usually measure it.

### Going further (background, not required)

For one atom moving back and forth between two walls a distance L apart, with velocity component v_x, the time between hits on the same wall is 2L/v_x. The average force on that wall is 2m v_x ÷ (2L/v_x) = m v_x²/L. If you add up this result for N atoms moving in random directions in a box of volume V, you get PV = (1/3)N m v_rms² = (2/3)N K_avg. Combined with the next section, this gives PV = N k_B T, the ideal gas law of Topic 9.2. You do not need to reproduce this derivation, but it shows how the collision picture and the temperature picture fit together.

## Temperature and the motion of atoms

The **temperature** of a gas is a measure of the **average kinetic energy** of its atoms. Hotter gas has atoms with more kinetic energy on average. For an ideal gas the link is:

**K_avg = (3/2) k_B T = ½ m v_rms²**

- K_avg is the average translational kinetic energy of one atom (J).
- k_B = 1.38 × 10⁻²³ J/K is Boltzmann's constant.
- T is the absolute temperature in **kelvin**.
- m is the mass of one atom (kg).
- v_rms is the **root-mean-square speed** (m/s).

### What "root-mean-square" means

To find v_rms, square every atom's speed, take the mean of the squares, then take the square root. For four atoms with speeds 200, 400, 400 and 600 m/s:

- mean speed = 400 m/s
- mean of the squares = (40 000 + 160 000 + 160 000 + 360 000) ÷ 4 = 180 000 m²/s²
- v_rms = √180 000 = 424 m/s

The rms speed is the speed an atom would need to have exactly the average kinetic energy. It is slightly larger than the mean speed, because squaring gives extra weight to the fast atoms.

Three consequences of K_avg = (3/2)k_B T:

1. **K_avg depends only on T.** Two different gases at the same temperature have the same average kinetic energy per atom.
2. **Lighter atoms move faster at the same T.** Since ½m v_rms² is the same, v_rms = √(3k_B T / m). A smaller m means a larger v_rms.
3. **v_rms ∝ √T.** Doubling the kelvin temperature doubles K_avg but multiplies v_rms by only √2 ≈ 1.41.

Temperature is a property of a **large group** of atoms. A single atom has a kinetic energy and a speed, but it does not have a temperature.

## The Maxwell–Boltzmann distribution

At any instant the atoms in a gas have a wide range of speeds. Collisions keep changing each atom's speed, but for a gas at a steady temperature the **fraction** of atoms in each speed range stays the same. The graph of this fraction against speed is the **Maxwell–Boltzmann distribution** (Figure 2). You do not need its formula. You do need to read and sketch it.

<figure>
<svg viewBox="0 0 560 380" role="img" aria-labelledby="mb-dist-title mb-dist-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mb-dist-title">Maxwell–Boltzmann speed distributions for argon at 300 K and 600 K</title>
<desc id="mb-dist-desc">Horizontal axis: speed of atom in metres per second, from 0 to 1400. Vertical axis: fraction of atoms per unit speed, with no numbers. A solid curve for 300 K starts at zero, rises to a tall, narrow peak near 350 metres per second, then falls with a long tail towards high speeds. A dashed curve for 600 K starts at zero, rises to a lower, wider peak near 500 metres per second and has a longer tail that reaches higher speeds. The peak of each curve is marked with a dot. A note says the area under each curve is the same.</desc>
<defs><marker id="mb-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="320" x2="535" y2="320" stroke="#1d2b44" stroke-width="2" marker-end="url(#mb-arr)"/>
<line x1="80" y1="320" x2="80" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#mb-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="340">0</text>
<line x1="142.9" y1="320" x2="142.9" y2="326" stroke="#1d2b44"/><text x="142.9" y="340">200</text>
<line x1="205.7" y1="320" x2="205.7" y2="326" stroke="#1d2b44"/><text x="205.7" y="340">400</text>
<line x1="268.6" y1="320" x2="268.6" y2="326" stroke="#1d2b44"/><text x="268.6" y="340">600</text>
<line x1="331.4" y1="320" x2="331.4" y2="326" stroke="#1d2b44"/><text x="331.4" y="340">800</text>
<line x1="394.3" y1="320" x2="394.3" y2="326" stroke="#1d2b44"/><text x="394.3" y="340">1000</text>
<line x1="457.1" y1="320" x2="457.1" y2="326" stroke="#1d2b44"/><text x="457.1" y="340">1200</text>
<line x1="520" y1="320" x2="520" y2="326" stroke="#1d2b44"/><text x="520" y="340">1400</text>
<text x="300" y="368" font-size="13">Speed of atom v (m/s)</text>
</g>
<text x="40" y="190" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 40 190)">Fraction of atoms per unit speed</text>
<polyline points="80.0,320.0 87.9,316.8 95.7,307.2 103.6,291.9 111.4,271.8 119.3,248.0 127.1,221.8 135.0,194.8 142.9,168.3 150.7,143.7 158.6,122.1 166.4,104.4 174.3,91.3 182.1,83.2 190.0,80.0 197.9,81.8 205.7,87.9 213.6,97.9 221.4,111.0 229.3,126.5 237.1,143.6 245.0,161.6 252.9,179.8 260.7,197.7 268.6,214.7 276.4,230.6 284.3,245.1 292.1,258.0 300.0,269.4 307.9,279.2 315.7,287.5 323.6,294.4 331.4,300.1 339.3,304.7 347.1,308.4 355.0,311.3 362.9,313.5 370.7,315.3 378.6,316.6 386.4,317.5 394.3,318.3 402.1,318.8 410.0,319.2 417.9,319.4 425.7,319.6 433.6,319.7 441.4,319.8 449.3,319.9 457.1,319.9 465.0,320.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="80.0,320.0 87.9,318.8 95.7,315.4 103.6,309.8 111.4,302.3 119.3,292.9 127.1,282.0 135.0,270.0 142.9,257.1 150.7,243.7 158.6,230.1 166.4,216.8 174.3,204.1 182.1,192.2 190.0,181.5 197.9,172.1 205.7,164.3 213.6,158.1 221.4,153.7 229.3,151.1 237.1,150.3 245.0,151.1 252.9,153.6 260.7,157.5 268.6,162.7 276.4,169.0 284.3,176.2 292.1,184.2 300.0,192.8 307.9,201.6 315.7,210.7 323.6,219.8 331.4,228.8 339.3,237.6 347.1,246.0 355.0,254.0 362.9,261.6 370.7,268.6 378.6,275.1 386.4,281.0 394.3,286.3 402.1,291.1 410.0,295.3 417.9,299.1 425.7,302.4 433.6,305.3 441.4,307.7 449.3,309.9 457.1,311.7 465.0,313.2 472.9,314.5 480.7,315.5 488.6,316.4 496.4,317.1 504.3,317.7 512.1,318.2 520.0,318.6" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5"/>
<circle cx="191.1" cy="80" r="4" fill="#1d2b44"/>
<circle cx="237.1" cy="150.3" r="4" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44">
<text x="202" y="70">300 K (solid)</text>
<text x="340" y="222">600 K (dashed)</text>
<text x="380" y="110" font-size="12">Same gas, same number of atoms:</text>
<text x="380" y="127" font-size="12">equal areas under both curves</text>
</g>
</svg>
<figcaption>Figure 2. Speed distributions for the same sample of argon at 300 K (solid) and 600 K (dashed). Dots mark each peak (the most probable speed: about 353 m/s and 500 m/s). At the higher temperature the curve shifts right, spreads out and its peak falls to about 0.71 of its old height. The rms speeds are 433 m/s and 612 m/s.</figcaption>
</figure>

Features to know:

- The curve starts at zero (very few atoms are almost at rest), rises to a **peak** and then falls with a long tail towards high speeds. It is not symmetrical.
- The **area under the curve** represents the total number (or fraction) of atoms. For a fixed sample this area does not change when the temperature changes.
- **Raise the temperature** and the whole curve shifts to higher speeds. It also spreads out. Because the area must stay the same, a wider curve has to be **lower**. So the peak moves right and down.
- **Compare two gases at the same temperature**: the lighter gas has the curve shifted to higher speeds and spread out, like a hotter sample of the heavier gas. The average kinetic energy is the same for both.
- At any temperature there are some slow atoms and some very fast atoms. A higher temperature does not make every atom faster. It changes the **distribution**.

## Worked example 1: pressure from atoms hitting a wall at an angle

**Question.** In a simplified model of a gas, argon atoms (mass 6.63 × 10⁻²⁶ kg each) all hit a wall at 500 m/s, at 60° to the normal, and bounce off elastically. A 1.0 cm² patch of the wall receives 3.0 × 10²³ collisions every second. Find (a) the change in momentum of one atom, (b) the average force on the patch and (c) the pressure on the wall.

1. Perpendicular component of velocity: v cos θ = 500 m/s × cos 60° = 250 m/s. (The parallel component, 500 × sin 60° = 433 m/s, does not change and adds nothing to the force on the wall.)
2. (a) Change in momentum: Δp = 2m v cos θ = 2 × (6.63 × 10⁻²⁶ kg)(250 m/s) = 3.315 × 10⁻²³ kg·m/s, directed away from the wall.
3. (b) Average force on the patch: F⊥ = R × Δp = (3.0 × 10²³ s⁻¹)(3.315 × 10⁻²³ kg·m/s) = 9.945 N.
4. (c) Area: 1.0 cm² = 1.0 × 10⁻⁴ m². Pressure: P = F⊥/A = 9.945 N ÷ (1.0 × 10⁻⁴ m²) = 9.945 × 10⁴ Pa.

**Answer.** Δp = 3.3 × 10⁻²³ kg·m/s (away from the wall), F = 9.9 N, P = 9.9 × 10⁴ Pa.

**Interpretation and check.** Units: (kg·m/s) × s⁻¹ = kg·m/s² = N, and N/m² = Pa. The answer is close to everyday air pressure, which is reasonable. If you had used the full speed instead of v cos θ you would get twice the force (19.9 N). If you had used m v cos θ instead of 2m v cos θ you would get half the pressure. Real atoms arrive at all angles and speeds; this model replaces them with one "typical" collision.

## Worked example 2: two gases at the same temperature

**Question.** A container holds a mixture of helium (atom mass 6.64 × 10⁻²⁷ kg) and argon (atom mass 6.63 × 10⁻²⁶ kg) at 300 K. (a) Find the average kinetic energy of a helium atom and of an argon atom. (b) Find the rms speed of each. (c) The mixture is heated to 450 K. By what factor does each rms speed increase?

1. (a) K_avg depends only on T: K_avg = (3/2)k_B T = 1.5 × (1.38 × 10⁻²³ J/K)(300 K) = 6.21 × 10⁻²¹ J. This is the **same** for both gases.
2. (b) From ½m v_rms² = (3/2)k_B T, v_rms = √(3k_B T/m).
   - Helium: v_rms = √[3(1.38 × 10⁻²³)(300) ÷ (6.64 × 10⁻²⁷)] = 1368 m/s ≈ 1.37 × 10³ m/s.
   - Argon: v_rms = √[3(1.38 × 10⁻²³)(300) ÷ (6.63 × 10⁻²⁶)] = 433 m/s.
3. Check the ratio: 1368 ÷ 433 = 3.16, which equals √(m_Ar/m_He) = √9.98 = 3.16. Argon atoms are about 10 times heavier, so they move about √10 times slower.
4. (c) v_rms ∝ √T, so the factor is √(450/300) = √1.5 = 1.22 for **both** gases. Helium rises to 1675 m/s and argon to 530 m/s.

**Answer.** (a) 6.21 × 10⁻²¹ J for both. (b) Helium 1.37 × 10³ m/s, argon 433 m/s. (c) Both increase by a factor of 1.22.

**Interpretation.** Being in the same container at the same temperature means equal average kinetic energy, not equal speed. Note also that a 50% rise in kelvin temperature gives only a 22% rise in rms speed.

## Common misconceptions

- **"Δp in a bounce is mv."** The atom reverses, so its perpendicular momentum changes by 2m v cos θ (2mv head-on).
- **"Atoms hitting at an angle push the wall sideways."** A smooth wall changes only the perpendicular component. Pressure uses the perpendicular force.
- **"Pressure only exists at the walls."** Pressure exists at every point in the gas. A test surface anywhere inside would feel it.
- **"Pressure is caused by atoms pushing on each other at rest."** In the kinetic model, pressure comes from moving atoms changing momentum in collisions.
- **"At a given temperature all atoms move at the same speed."** There is a wide distribution. Temperature fixes the average kinetic energy.
- **"Heavier atoms have more kinetic energy at the same temperature."** They have the same average kinetic energy and a lower rms speed.
- **"Doubling the temperature doubles the speed."** Doubling the kelvin temperature doubles K_avg; v_rms rises by a factor of √2.
- **"The curve gets taller when the gas is heated."** The peak moves to a higher speed and gets lower, because the area stays the same.
- **Using Celsius in K_avg = (3/2)k_B T.** T must be in kelvin. A gas at 0 °C has a large average kinetic energy, not zero.

## Where this leads

Topic 9.2, [The Ideal Gas Law](/advanced-course-resources/physics-2/9-2-ideal-gas-law-study-guide/), connects pressure, volume, amount and temperature in PV = nRT = Nk_B T, which grows directly out of the collision picture above. Later in the unit, internal energy (Topic 9.4) is the total kinetic energy of the atoms you met here. Test yourself with the [practice questions](/advanced-course-resources/physics-2/9-1-kinetic-theory-temperature-pressure-practice/), then use the [revision notes](/advanced-course-resources/physics-2/9-1-kinetic-theory-temperature-pressure-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/9-1-kinetic-theory-temperature-pressure-checklist/) to consolidate.
